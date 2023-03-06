// Definir valores fuera del componente permite:
// - Que el valor no sea re-procesado o re-renderizado por el componente.
// - Si los valores no tienen ninguna dependencia del componente podemos ponerla fuera de nuestros funcional components 
const numbers = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10];
const person = { name: 'Juan Carlos', age: 45 };

// Arrow Function
const addNumbers = () => {
    const initialValue = 0;

    return numbers.reduce( ( acummulator, currentValue ) => {
        return acummulator + currentValue;
    }, initialValue );
}

// Functional Component
function App( props) {
    return (
        <>
            {/* Las diferentes formas de imprimir valores de constantes, variables, objetos o funciones en el JSX (cuerpo) del componente */}
            <h1>Hello, { props.name }!</h1>
            <p>{ props.message }</p>
            <p><b>Operations: </b> { 4 + 5 }</p>
            <p><b>Array: </b> { numbers }</p>
            <p><b>Object: </b> <code>{ JSON.stringify( person ) }</code></p>       
            <p><b>Function: </b>{ addNumbers() }</p>
        </>
    )
}


export default App;