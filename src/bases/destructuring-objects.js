// Desestructuración o Asignación desestructurante de objetos
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Desestructuración en el argumento de una función
export const getUserMessage = ({ firstName, age, profession = 'Developer' }) => {
    return `Hola ${ firstName } ¡Wow! ¿Tienes ${ age } años y eres ${ profession }?`;
}


export const useContext = ({ nickname, coords, profession = 'Developer' }) => {
    return {
        sobrenombre: nickname,
        coords,
        profession
    }
}