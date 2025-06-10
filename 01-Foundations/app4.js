

console.log('Begin the program');

setTimeout( () => {
    console.log('First Timeout');
}, 3000 );


setTimeout( () => {
    console.log('Second Timeout');
}, 1 );


setTimeout( () => {
    console.log('Third Timeout');
}, 0 );


console.log('End of the program');
