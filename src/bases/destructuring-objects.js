// Desestructuración o Asignación desestructurante de objetos
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const person = {
    firstName: 'Juan',
    age: 45,
    nickname: 'jcarlosj',
    coords: {
        lat: 4.7392514, 
        lng: -74.0403743
    }
}

console.log( person.firstName, person.age, person.nickname );

const { firstName, age, nickname } = person;    // Desestructuración
console.log( firstName, age, nickname );


const { firstName: nombre, age: edad, nickname: apodo } = person;    // Desestructuración
console.log( nombre, edad, apodo );


// Desestructuración en el argumento de una función
const getUser = ({ firstName, age, profession = 'Developer' }) => {
    console.log( `Hola ${ firstName } ¡Wow! ¿Tienes ${ age } años y eres ${ profession }?` );
}

getUser( person );


const useContext = ({ nickname, coords, profession = 'Developer' }) => {
    return {
        sobrenombre: nickname,
        coords,
        profession
    }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const { sobrenombre, profession, coords: { lat, lng } } = useContext( person );     // Nested destructuring of objects
console.log( sobrenombre, profession, lat, lng );