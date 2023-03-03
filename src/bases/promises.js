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
                reject();           // Retorna el error al no encontrar el heroe
            
        }, 2000 );
    } );
}


// Ejecutamos la funcion asincrona que contiene la promesa
getHeroByIdAsync( 6 )
    .then( ( response ) => {
        console.group( `Then... promise` );
        console.log( response );
        console.groupEnd();
    })
    .catch( err => {
        console.group( `Catch... promise` );
        console.warn( err );
        console.groupEnd();
    })
    .finally( () => {
        console.info( `Finally... promise` );
    });

getHeroByIdAsync( 3 )
    .then( ( response ) => {
        console.group( `Then... promise` );
        console.log( response );
        console.groupEnd();
    })
    .catch( err => {
        console.group( `Catch... promise` );
        console.warn( err );
        console.groupEnd();
    })
    .finally( () => {
        console.info( `Finally... promise` );
    });