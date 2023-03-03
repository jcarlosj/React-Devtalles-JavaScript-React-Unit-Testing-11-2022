// Promises (Promesas):
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise 
// 1. Las promesas son asincronas y primero se va a ejecutar todo el codigo que es sincrono (código secuencial])
// 2. Las promesas caen en una ligar especial de la pila de trabajo de JavaScript 
// 3. Una ves termina todo lo sincrono se va a ejecutar el resultado de las promesas

import { getHeroById } from '../functions/heroes';

// Se construyen a partir de un callback que recibe dos argumentos
const promise = new Promise( function( resolve, reject ) {      
    setTimeout( () => {
        const heroe = getHeroById( 3 );

        // Valida si existe el heroe
        if( heroe ) 
            resolve( heroe );   // Devuelve el heroe encontrado
        else 
            reject();           // Retorna el error al no encontrar el heroe
        
    }, 2000 );
} );

promise
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