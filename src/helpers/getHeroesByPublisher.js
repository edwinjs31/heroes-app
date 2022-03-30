import { heroes } from "../data/heroes";


export const getHeroesByPublisher = (publisher) => {

    //validamos que solo se busque por los siguientes prublishers
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`Invalid publisher ${publisher}`);
    }

    //retorna un nuevo array 
    return heroes.filter(hero => hero.publisher === publisher);
}