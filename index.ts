import validForm from '@functions/valid-form'

const data = '19/01/2023'
const result = validForm().date(data, 'pt')
console.log(result)
