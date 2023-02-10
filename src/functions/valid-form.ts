export const validForm = () => {
    return {
        email(inputEmail: string): boolean {
            const email = inputEmail.replace(/^\s+|\s+$/, '')
            const filter = /^[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}$/i
            return (filter.test(email)) ? true : false
        },
        text(input: string): boolean {
            const filter = /^[\wà-ú]{2,}\s?.+$/i;
            const text = input.replace(/^\s+|\s+$/, '');
            return (filter.test(text)) ? true : false
        },
        date(input: string): any {
            const data = new Date()
            const dataCompleta = data.toLocaleDateString()
        }
    }
}