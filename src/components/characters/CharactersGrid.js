import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharactersGrid = ({ items, isLoading}) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
            {items.map((item, indice) => (
                <CharacterItem key={item[0].name} item={item} indice={indice}/>
            ))}
        </section>
    )
}



export default CharactersGrid
