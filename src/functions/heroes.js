import dataHeroes, { owners } from '../data/heroes.js';

console.log( dataHeroes, owners );

export const getHeroById = ( id ) => dataHeroes.find( hero => hero.id === id );

export const  getHeroesByOwner = ( owner ) => dataHeroes.filter( hero => hero.owner === owner );