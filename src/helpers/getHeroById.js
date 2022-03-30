import { heroes } from "../data/heroes";

export const getHeroesById = ( id='' ) => {
    //TODO: falta manejar errores
    //retorna un heroe
    return heroes.find(heroe => heroe.id === id);
}
