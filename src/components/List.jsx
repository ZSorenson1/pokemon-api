import React, { useState } from 'react'

const List = () => {
    const [pokemon, setPokemon] = useState([]);
    
    const clickHandler = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=805')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    }

    return (
        <div>
            <button onClick={clickHandler}>Fetch</button>
            {pokemon.length > 0 && pokemon.map((pokemon, i)=>{
                return (<div key={i}>{pokemon.name}</div>)
            })}
        </div>
    )
}

export default List;