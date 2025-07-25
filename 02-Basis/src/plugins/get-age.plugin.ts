// const getAgePlugin = require('get-age');

export const getAge = (birthdate: string) => {
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
