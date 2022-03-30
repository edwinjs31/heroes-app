import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>Heroes Marvel Comics</h1>
            <hr />
            
            <HeroList publisher="Marvel Comics"/>
        </div>
    )
}
