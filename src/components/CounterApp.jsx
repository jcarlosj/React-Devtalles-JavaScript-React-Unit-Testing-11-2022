import { useState } from 'react';
import PropTypes from 'prop-types';


// Functional Component
const CounterApp = ({ value }) => {
    // Define estado del Componente
    const [ counter, setCounter ] = useState( value );

    const handleAdd = ( event ) => {
        // setCounter( counter + 1 );               // Forma 1
        setCounter( newValue => newValue + 1 );     // Forma 2
    }

    const handleSubstract = ( event ) => {
        setCounter( counter - 1 );                  // Forma 1
        // setCounter( newValue => newValue - 1 );  // Forma 2
    }

    const handleReset = ( event ) => {
        setCounter( value ); 
    }


    return (
        <>
            <h1>Counter App</h1>   
            <h2> { counter } </h2>
            <button
                onClick={ handleAdd }
            >
                +1 
            </button>
            <button
                onClick={ handleSubstract }
            >
                -1 
            </button>
            <button
                onClick={ handleReset }
            >
                reset
            </button>
        </>
    );
};


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
    value: 0
}


export default CounterApp;
