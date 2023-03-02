// Objeto literal
const person = {
    firstName: 'Sofía',
    lastName: 'Gutiérrez',
    age: 62,
    address: {
        coords: {
            lat: 4.7422749,
            lng: -74.047787
        },
        city: 'Bogotá D.C.',
        zipCode: 111141
    }
};

console.log( person );
console.table( person );

// Clonar objeto 
const person1 = person;     // Copia referencia del espacio de memoria del objeto literal 'person' (Evitemos este tipo de asignacion)
person1.firstName = 'Milo';

console.log( 'person', person );      // No vamos a querer esto
console.log( 'person1', person1 );     

// Creamos el clone
const person3 = { ...person };  // Extraemos todas las propiedades del objeto para crear otro nuevo usando el spread
person3.firstName = 'Rex';
console.log( 'person', person );  
console.log( 'person3', person3 );     