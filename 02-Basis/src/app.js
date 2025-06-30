const { getUUID, getAge } = require('./plugins');
// const {emailTemplate} = require ('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
const getPokemonById = require('./js-foundation/06-promises');


getPokemonById( 4 );


// ! Reference to Factory Pattern
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const MakePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'Javier', birthdate: '1968-03-09' };

// const john = MakePerson( obj );
// console.log( { john } );
