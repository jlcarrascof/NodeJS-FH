

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
