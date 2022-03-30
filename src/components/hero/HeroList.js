import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    //momoriza los heroes(si no tubieramos el publisher como dependencia seria un array vacio)
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    //desestructuramos todas las propiedates de 'hero'
                    <HeroCard key={hero.id} {...hero} />

                ))
            }
        </div>
    )
}
