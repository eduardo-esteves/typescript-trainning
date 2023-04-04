import * as fs from 'fs'
import * as path from 'path'
import { Pessoa as People } from '../../interfaces/generalInterfaces'

const peopleJson = fs.readFileSync(path.join(__dirname, '/../../people.json'), 'utf-8')
const peoples: People[] = JSON.parse(peopleJson)

export const bySalary = (salary: Number): People[] => {
  return peoples.filter(people => people.salario >= salary)
}
