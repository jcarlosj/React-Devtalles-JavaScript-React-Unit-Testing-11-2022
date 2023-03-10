import { getActiveUser, getUser } from '../../bases/functions';

describe( 'Test: functions', () => {
    
    test( 'getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: '1R4521',
            username: 'jcarlosj',
            name: 'Juan',
        };

        const user = getUser();
        // console.log( user );

        expect( testUser ).toEqual( user );
        expect( testUser ).toStrictEqual( user ); 
    });

    test( 'getActiveUser debe retornar un objeto al pasarle dos parametros (username, name)', () => {
        const
            username = 'jcarlosj',
            name = 'Juan', 
            user = getActiveUser( username, name );

        // console.log( user ); 
        expect( user ).toEqual({
            uid: '1R4521',
            username: 'jcarlosj',
            name: 'Juan',
        });
        expect( user ).toStrictEqual({
            uid: '1R4521',
            username: 'jcarlosj',
            name: 'Juan',
        });
    });
});
