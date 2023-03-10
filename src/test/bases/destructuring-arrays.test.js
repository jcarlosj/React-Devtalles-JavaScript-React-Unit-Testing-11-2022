import { getFruits } from "../../bases/destructuring-arrays";

describe( 'Test: destructuring-arrays', () => {
    
    test( 'getFruits debe retornar un array con 1 string, 2 number', () => {
        const 
            arrFruit = getFruits(),
            [ nameFruit, amount, price ] = arrFruit;

        // console.log( arrFruit );

        expect( arrFruit.length ).toBe( 3 );

        expect( typeof nameFruit ).toBe( 'string' );
        expect( nameFruit ).toStrictEqual( expect.any( String ) );
        expect( nameFruit ).toBe( 'mangos' );

        expect( typeof amount ).toBe( 'number' );
        expect( amount ).toStrictEqual( expect.any( Number ) );
        expect( amount ).toBe( 350 );

        expect( typeof price ).toBe( 'number' );
        expect( price ).toStrictEqual( expect.any( Number ) );
        expect( price ).toBe( 900 );


    });
});
