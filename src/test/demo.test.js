describe( 'Demo', () => { 
    test( 'deben ser dos cadenas de texto iguales', () => {
        // 1. Inicialización
        const originalMessage = 'Hola Mundo';
    
        // 2. Estímulo
        const testMessage = 'Hola Mundo';
    
        // 3. Probar: Observar el comportamiento... esperado
        expect( originalMessage ).toBe( testMessage );
    });
});