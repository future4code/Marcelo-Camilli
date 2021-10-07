import axios from "axios";
import React, {useState} from "react";
import Home from "./HomePage/HomePage";
import Match from "./Matches/Matches";
import {  MainButtons,  Main } from "./styles";



const App = () => {
  const [currentPage, setCurrentPage] = useState("home")

  const changeCurrentPage = () => {
    if (currentPage === "home") {
      setCurrentPage ("matches")
    } else {
      setCurrentPage ("home")
    }
  }

  const cleanMatches = () => {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcelo-camilli-maryam/clear")
  .then ((res) => {
    console.log (res)
    
  })
  .catch((err)=> {
    console.log(err)
  })
  

}

  return (
    <Main>             
        {currentPage === "home" ? <Home/> : <Match/>}  
        <MainButtons>  
        <button onClick ={changeCurrentPage}>Change Page</button>
        <button onClick ={cleanMatches}> Clear</button>
        </MainButtons>
    </Main>

        )
}

export default App