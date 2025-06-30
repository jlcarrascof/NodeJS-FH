

const getPokemonById = ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    fetch( url ).then( ( response ) => {
        console.log( response );
    });


    // return 'Pokemon';
}


module.exports = getPokemonById;
