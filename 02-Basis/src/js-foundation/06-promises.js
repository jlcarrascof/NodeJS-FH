

const getPokemonById = ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    return fetch( url )
        .then( ( resp ) => resp.json())
        .then( ( pokemon ) => pokemon.name );

    // fetch( url ).then( ( response ) => {
    //     response.json().then( ( pokemon ) => {
    //         // console.log( pokemon.name );

    //        callback( pokemon.name );
    //     });
    // });


    // return 'Pokemon';
}


module.exports = getPokemonById;
