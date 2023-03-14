import { getHeroById, getHeroesByOwner } from "../../functions/heroes";
import heroes from '../../data/heroes';

describe( 'Test: import-export-files', () => {
    
    test( 'getHeroById debe retornar un heroe por ID', () => {
        const
            hero_id = 3,
            hero = getHeroById( hero_id );

        // console.log( hero );

        expect( hero ).toEqual({ 
            id: 3, name: 'Superman', 
            owner: 'DComics' 
        });
    });

    test( 'getHeroById debe retornar "undefined" si no existe el ID del heroe', () => {
        const
            hero_id = 100,
            hero = getHeroById( hero_id );

        // console.log( hero );

        expect( hero ).toBe( undefined );
        expect( hero ).toBeFalsy();     // Evalua que el valor retornado sea: null, undefined o false 
    });

    test( 'getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => {
        const dcomicsHeroes = getHeroesByOwner( 'DComics' );

        // console.log( heroes );
        expect( dcomicsHeroes.length ).toBe( 3 );

        // Forma estática poco recomendada
        expect( dcomicsHeroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DComics' },
            { id: 3, name: 'Superman', owner: 'DComics' },
            { id: 4, name: 'Flash', owner: 'DComics' },
        ]);

        dcomicsHeroes.forEach( hero => {
            expect( hero.owner ).toBe( 'DComics' );
        });
 
        // console.log( heroes.filter( hero => hero.owner === 'DComics' ) );
        expect( dcomicsHeroes ).toEqual( heroes.filter( hero => hero.owner === 'DComics' ) );
    });

    test( 'getHeroesByOwner debe retornar un arreglo con los héroes de Marvel', () => {
        const marvelHeroes = getHeroesByOwner( 'Marvel' );

        // console.log( heroes );
        expect( marvelHeroes.length ).toBe( 2 );

        // Forma estática poco recomendada
        expect( marvelHeroes ).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);

        marvelHeroes.forEach( hero => {
            expect( hero.owner ).toBe( 'Marvel' );
        });

        // console.log( heroes.filter( hero => hero.owner === 'Marvel' ) );
        expect( marvelHeroes ).toEqual( heroes.filter( hero => hero.owner === 'Marvel' ) );
    });

});
