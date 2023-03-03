// Condicional ternario: Es una forma abreviada de construir un condicional
const active = true;

let message = '';

// Condicional tradicional
if( active )
    message = 'Usuario activo';
else
    message = 'Usuario inactivo'

console.log( message ); //

// Condicional anterior abreviado
message = active ? 'Perfil activo' : 'Perfil inactivo';
console.log( message ); 

message = ( ! active ) ? 'Cuenta activa' : null;
console.log( message ); 

// Forma de usarlo en React
console.group( 'Uso en React' );

message = active && 'Cuenta activa';
console.log( message ); 

message = ! active && 'Cuenta activa';
console.log( message ); 

console.groupEnd();