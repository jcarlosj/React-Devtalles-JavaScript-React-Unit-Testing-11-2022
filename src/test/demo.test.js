// Definimos una prueba demo
test( 'Demo: Esta prueba no puede fallar', () => {
    // eslint-disable-next-line no-self-compare
    if( 0 === 1 )
        throw new Error( 'No se puede dividir entre cero' );
});