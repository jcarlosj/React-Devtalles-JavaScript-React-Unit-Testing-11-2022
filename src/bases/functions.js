// Functions: Non-recommended
function greet( name ) {
    return `Hola, ${ name }!`;
}

// Constante a la que le asignamos una funcion (Recomendada)
const newGreet = function( name ) {
    return `Hola, ${ name }!`;
}

// Arrow Function se puede retornar sin usar la palabra reservada 'return'
const otherGreet = name => `Hola, ${ name }!`;
const helloWorld = _ => `Hello World!`;

// Arrow Function retorno implicito
const getUser = () => ({
    uid: '1R4521',
    username: 'jcarlosj',
    name: 'Juan',
});


console.log( greet( 'Maura' ) );
console.log( newGreet( 'Sofía' ) );
console.log( otherGreet( 'Milo' ) );
console.log( helloWorld() );
console.log( getUser() );