import { getImage } from "../../bases/async-await";

describe( 'Test: async-await', () => {

    test( 'getImage debe retornar el url de la imagen', async () => {
        const url = await getImage();
        // console.log( url );

        expect( typeof url ).toBe( 'string' );
        expect( url ).toStrictEqual( expect.any( String ) );
    });
});