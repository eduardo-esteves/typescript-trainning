interface validateFields {
  isNull: (input: any) => boolean
  isUndefined: (input: any) => boolean
  notInitializeds: (inputs: any[]) => boolean
  email: (input: string) => boolean
  text: (input: string) => boolean
  date: (input: string, format?: string) => boolean
}

const validForm = (): validateFields => {
  return {
    /**
     * Validate if the input informed is of type null
     *
     * @author Eduardo Esteves
     *
     * @param {any} input
     *
     * @return {boolean}
     */
    isNull (input: any): boolean {
      return input === null
    },
    /**
     * Validate if the input informed is of type undefined
     *
     * @author Eduardo Esteves
     *
     * @param {any} input
     *
     * @return {boolean}
     */
    isUndefined (input: any): boolean {
      return typeof input === 'undefined'
    },
    /**
     * Validate if the are some input who is not initialized
     *
     * @author Eduardo Esteves
     *
     * @param {any[]} inputs
     *
     * @return {boolean}
     */
    notInitializeds (inputs: any[]): boolean {
      return inputs.some((valor) => valor === '' || this.isNull(valor) || this.isUndefined(valor))
    },
    /**
     * Validate if the input informed is an email valid
     *
     * @author Eduardo Esteves
     *
     * @param {string} input
     *
     * @return {boolean}
     */
    email (input: string): boolean {
      const email = input.replace(/^\s+|\s+$/, '')
      const filter = /^[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}$/i

      return !!(filter.test(email))
    },

    /**
     * Validate if input informed is a text valid
     *
     * @author Eduardo Esteves
     *
     * @param {string} input
     *
     * @return {boolean}
     */
    text (input: string): boolean {
      const num = Number(input)
      const isString = !Number.isInteger(num)

      const filter = /^[\wà-ú]{2,}\s?.+$/i
      const text = input.toString().replace(/^\s+|\s+$/, '')

      return isString && !!(filter.test(text))
    },

    /**
     * Validate if the input informed is a date valid
     *
     * @author Eduardo Esteves
     *
     * @param {string} input
     *
     * @return {boolean}
     */
    date (input: string, format = 'db'): boolean {
      const now = new Date()

      switch (format) {
        case 'pt': {
          const dateBr = input.split('/')

          if (!Array.isArray(dateBr) || dateBr.length !== 3) {
            return false
          }

          const date = `${dateBr[2]}-${dateBr[1]}-${dateBr[0]}`
          const dateInfo = new Date(`${date} ${now.toLocaleTimeString()}`)

          if (dateInfo.getTime() > now.getTime()) {
            return false
          }

          return true
        }

        default: {
          const dateInfo = new Date(`${input} ${now.toLocaleTimeString()}`)

          if (dateInfo.getTime() > now.getTime()) {
            return false
          }

          return true
        }
      }
    }
  }
}

export default validForm
