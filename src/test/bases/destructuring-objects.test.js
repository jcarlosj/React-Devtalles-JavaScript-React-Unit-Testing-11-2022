import { getUserMessage, useContext } from "../../bases/destructuring-objects";

describe( 'Test: destructuring-objects', () => {
    test( 'getUserMessage debe retornar un mensaje', () => {
        const 
            testUser = { 
                firstName: 'John', 
                age: 27, 
                profession: 'Doctor' 
            },
            message = getUserMessage( testUser ),
            expectedMessage = `Hola ${ testUser.firstName } ¡Wow! ¿Tienes ${ testUser.age } años y eres ${ testUser.profession }?`;

        expect( message ).toBe( expectedMessage );
    });

    test( 'useContext debe retornar un objeto con parametro "profession" predeterminado', () => {
        const testUser = { 
            nickname: 'jhonny',
            coords: { lat: -1, lng: -4 }
        };

        const user = useContext( testUser );

        // console.log( user );

        expect( user ).toStrictEqual({ 
            sobrenombre: 'jhonny',
            coords: { lat: -1, lng: -4 },
            profession: 'Developer'
        });
        
    });
});