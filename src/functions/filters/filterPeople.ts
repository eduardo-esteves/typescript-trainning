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
