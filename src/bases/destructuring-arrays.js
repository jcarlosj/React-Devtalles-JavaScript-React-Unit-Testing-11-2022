// Desestructuración o Asignación desestructurante de arreglos
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const characters = [ 'Goku', 'Vegeta', 'Trunks' ];

console.log( characters[ 0 ], characters[ 1 ], characters[ 2 ] );

// Desestructuración de un array
const [ , ch1, ch2 ] = characters;
console.log( `${ ch2 } es hijo de ${ ch1 }` );


const getFruits = () => {
    return [ 'mangos', 350, 900 ]
}

const [ fruit, amount, unitValue ] = getFruits();       // Desestructuracion de un arreglo
console.log( `Tengo ${ amount } ${ fruit } su valor es ${ unitValue } la unidad` );

const useState = ( value ) => {
    return [ value, () => console.log( `Hello World!` ) ]
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [ nombre, setNombre ] = useState( 'Bulma' );
console.log( nombre );
setNombre( nombre );

