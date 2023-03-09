// Definimos una prueba demo
// No olvidemos cambiar la configuracion del script en el package JSON para poder leer las pruebas desde este directorio
// El script debe ser asi: "test": "react-scripts test -- --config jest.config.js",

test( 'Demo: Esta prueba no puede fallar', () => {
    // eslint-disable-next-line no-self-compare
    if( 0 === 1 )
        throw new Error( 'No se puede dividir entre cero' );
});