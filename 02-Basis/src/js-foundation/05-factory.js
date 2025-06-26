const { v4: uuidv4 } = require('uuid');
const { getAge } = require('../plugins/get-age.plugin');

const buildPerson = ( { name, birthdate } ) => {
    return {
        id: uuidv4(),
        name: name,
        birthdate: birthdate,
        age: getAge( birthdate ),
    };
}

const obj = { name: 'Javier', birthdate: '1968-03-09' };
const john = buildPerson( obj );
console.log( john );
