import * as fs from 'fs'
import * as path from 'path'

import { Pessoa as People } from '../interfaces/generalInterfaces'

/**
 * Reads the people.json file and returns an array of Person objects.
 */
const loadPeople = (): People[] => {
  const filePath = path.join(__dirname, '..', 'people.json')
  const peopleJson = fs.readFileSync(filePath, 'utf-8')
  const peoples: People[] = JSON.parse(peopleJson)
  return peoples
}

export default loadPeople
