import React, {useState, useEffect} from "react"
import axios from "axios";


function Pokecard () {
    const [pokemon, setPokemon] = useState ([])

    useEffect (() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(res => {
        setPokemon (res.data)
    })
    .catch(err => {
        console.log(err)
    })
    },[pokemon])


    return (
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight}</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    );
}

export default Pokecard