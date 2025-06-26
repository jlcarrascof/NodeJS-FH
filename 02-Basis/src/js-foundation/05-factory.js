const { v4: uuidv4 } = require('uuid');

const buildPerson = ( { name, birthdate } ) => {
    return {
        id: uuidv4(),
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear()
    };
}

const obj = { name: 'Javier', birthdate: '1968-03-09' };
const john = buildPerson( obj );
console.log( john );
