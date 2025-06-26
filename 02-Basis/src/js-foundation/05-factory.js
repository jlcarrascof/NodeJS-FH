const obj = { name: 'Javier', birthdate: '1968-03-09' };

const buildPerson = ( { name, birthdate } ) => {

    return {
        id: new Date().getTime(),
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear()
    };

}
