// Variables y Constantes
const firstName = 'Juan';
const lastName = 'Jiménez';

let value = 5;
value = 4;

console.log( firstName, lastName, value );

// var NO se debe usar... ni en la FIFA :P
if( true ) {
    const firstName = 'Carlos';
    const value = 9;
    console.log( firstName, lastName, value );
}

console.log( firstName, lastName, value );
