// Definicion de array con un valor fijo al iniciar
const numbers = new Array();
numbers.push( 1 );

console.log( numbers );

// Definicion de un array literal
const fruits = [];

fruits.push( 'Mangos' );         // No se recomienda usar el push por que modifica el objeto principal
fruits.push( 'Mandarinas' );
fruits.push( 'Melones' );

console.log( 'fruits', fruits );

const moreFruits = fruits;      // Copia referencia del espacio de memoria del array 'fruits' (Evitemos este tipo de asignacion)
moreFruits.push( 'Moras' );

console.log( 'fruits', fruits );
console.log( 'moreFruits', moreFruits );

// Clonemos el array
const theBestFruits = [ ...fruits ];  // Extraemos todas las propiedades del objeto para crear otro nuevo usando el spread
theBestFruits.push( 'Mangostinos' );

console.log( 'fruits', fruits );
console.log( 'theBestFruits', theBestFruits );

// Mapeamos el array para crear uno nuevo con nueca informacion
const amountPerFruit = theBestFruits.map( function( fruit ) {
    return `5 ${ fruit }`;
});

console.log( 'amountPerFruit', amountPerFruit );

