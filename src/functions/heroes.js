import dataHeroes from '../data/heroes.js';


export const getHeroById = ( id ) => dataHeroes.find( hero => hero.id === id );

export const  getHeroesByOwner = ( owner ) => dataHeroes.filter( hero => hero.owner === owner );