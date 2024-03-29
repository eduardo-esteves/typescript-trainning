import { Pessoa as People } from '../../interfaces/generalInterfaces'
import loadPeople from '@functions/loadPeople'

const people: People[] = loadPeople()

/**
 * Filters the array of people by the given salary.
 *
 * @param salary a number.
 * @returns A new array of people who have a salary greater than or equal to the salary parameter.
 */
export const bySalary = (salary: Number): People[] => {
  return people.filter(peop => peop.salario >= salary)
}

/**
 * Format the array of people to line of the table.
 *
 * @returns An array of people ready to be inserted in the body of the table.
 */
export const tableEmployee = (): string[] => people.map(peop => (
  `<tr>
      <td>${peop.nome}</td> 
      <td>${peop.cpf}</td>
      <td>${peop.sexo}</td>
      <td>${peop.email}</td>
      <td>${peop.salario}</td>
      <td>${peop.estado}</td>
      <td>${peop.empresa}</td>
      <td>${peop.idade}</td>
    </tr>`
))

/**
 * Filters a person by their CPF, regardless of whether it's formated or not.
 *
 * @param cpf a string representing the CPF to search for.
 * @returns a People object if a match is found, otherwise undefined.
 */
export const byCpf = (cpf: string): People | undefined => {
  const pattern = /[.-]/g
  return people.find(peop => peop.cpf.replace(pattern, '') === cpf.replace(pattern, ''))
}
