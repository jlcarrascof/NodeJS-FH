const { getUUID, getAge } = require('./plugins');
// const {emailTemplate} = require ('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const getPokemonById = require('./js-foundation/06-promises');
const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Application started');
logger.error('An error occurred');

// getPokemonById(4)
//     .then( (pokemon) => console.log( { pokemon } ) )
//     .catch( (error) => console.log( 'Please, try again' ) )
//     .finally( () => console.log( 'End of the process' ) );


// ! Reference to Factory Pattern
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const MakePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'Javier', birthdate: '1968-03-09' };

// const john = MakePerson( obj );
// console.log( { john } );
