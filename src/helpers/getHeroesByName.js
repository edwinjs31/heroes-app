import { heroes } from "../data/heroes";

export const getHeroesByName = (nameHero) => {
    //si no se ingresa ningun dato para buscar
    if (nameHero.length === 0) {
        return [];
    }
    nameHero = nameHero.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(nameHero));
};