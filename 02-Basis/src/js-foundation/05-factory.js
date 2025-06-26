const { getUUID } = require('../plugins/get-id.plugins');
const { getAge } = require('../plugins/get-age.plugin');

const buildPerson = ( { name, birthdate } ) => {
    return {
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge( birthdate ),
    };
}

const obj = { name: 'Javier', birthdate: '1968-03-09' };
const john = buildPerson( obj );
console.log( john );
