import { getHeroByIdAsync } from "../../bases/promises";

describe( 'Test: promises', () => {
    
    test( 'getHeroByIdAsync debe retornar un error si héroe no existe', ( done ) => {
        const hero_id = 100;
        
        getHeroByIdAsync( hero_id )
            .catch( error => {
                // console.log( error ) ;
                expect( error ).toBe( `No se pudo encontrar el héroe con ID ${ hero_id }` );
                done();     // Jest es totalmente sincrono por lo que hay que indicarle que se termino la prueba asincrona
            });
    });

    test( 'getHeroByIdAsync debe retornar un héroe (usando: done)', ( done ) => {
        const hero_id = 1;
        
        getHeroByIdAsync( hero_id )
            .then( hero => {
                expect( hero  ).toEqual({ 
                    id: 1, 
                    name: 'Batman', 
                    owner: 'DComics' 
                }); 
                done();     // Jest es totalmente sincrono por lo que hay que indicarle que se termino la prueba asincrona
            });
    });

});