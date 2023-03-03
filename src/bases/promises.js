// Promises (Promesas):
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise 
// 1. Las promesas son asincronas y primero se va a ejecutar todo el codigo que es sincrono (código secuencial])
// 2. Las promesas caen en una ligar especial de la pila de trabajo de JavaScript 
// 3. Una ves termina todo lo sincrono se va a ejecutar el resultado de las promesas

import { getHeroById } from '../functions/heroes';


const getHeroByIdAsync = async ( id ) => {
    // Se construyen a partir de un callback que recibe dos argumentos
    return new Promise( function( resolve, reject ) {      
        setTimeout( () => {
            const heroe = getHeroById( id );

            // Valida si existe el heroe
            if( heroe ) 
                resolve( heroe );   // Devuelve el heroe encontrado
            else 
                reject( 'No se pudo encontrar el heroe' );           // Retorna el error al no encontrar el heroe
            
        }, 2000 );
    } );
}


const ids = [ 3, 6, 1 ];

ids.forEach( ( id ) => {
    // Ejecutamos la funcion asincrona que contiene la promesa
    getHeroByIdAsync( id )
    .then( console.log )
    .catch( console.warn )
    .finally( () => {
        console.info( `Finally... promise` );
    });
});


