import { getGreeting } from '../../bases/template-strings';

describe( 'Test: template-string', () => { 
    const name = 'Juan';    // 1. Inicialización

    test( `getGreeting debe retornar "Hola, ${ name }!"`, () => {
        const message = getGreeting( name );    // 2. Estimulo
    
        expect( message ).toBe( `Hola, ${ name }!` );   // 3. Prueba: Comportamiento esperado 
    });
});