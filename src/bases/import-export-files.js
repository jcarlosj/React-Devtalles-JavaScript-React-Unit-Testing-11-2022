import { getHeroById, getHeroesByOwner } from '../functions/heroes';

const heroFound = getHeroById( 3 );
console.log( heroFound );

const marvelHeroes = getHeroesByOwner( 'Marvel' );
console.log( marvelHeroes );