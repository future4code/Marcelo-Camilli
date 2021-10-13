import React, {useState, useEffect} from "react"
import axios from "axios";
import Pokecard from "./Components/Pokecard/Pokecard";


function App() {
  
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokename] = useState("")

 

  useEffect (()=> {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(res=> {
      setPokeList(res.data)
      
    })
    .catch(err => {
      console.log(err)
    })
  })

  const changePokeName = (event) => {
    setPokename(event.target.value)
    
  }

    return (
    <div>
  <select onChange={changePokeName}>
  <option value={""}>Nenhum</option>
  {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            )
  })}
  </select>
  
  {setPokename && <Pokecard pokemon={setPokename}/>}
    </div>
  );
}

export default App;
