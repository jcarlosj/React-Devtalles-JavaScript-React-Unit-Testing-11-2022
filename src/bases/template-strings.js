const firstName = 'Juan Carlos';
const lastName = 'Jiménez Gutiérrez';

// Concatenacion usando el signo más
let completeName = 'Hola, ' + firstName + ' ' + lastName + ' ' + ( 1 + 1) ;

console.log( completeName );

// Para evitar el uso de la concatenacion usando el signo mas usamos las 'backticks'
completeName = `Hola, ${ firstName } ${ lastName } ${ 1 + 1 }`;

console.log( completeName );

// Invocar una funcion dentro de un Template String
function getGreeting( name ) {
    return `Hola, ${ name }!`;
}

console.log( `Alicia dice: ${ getGreeting( firstName ) }` );