import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainContainer, CardContainer, ItemContainer } from "../styles"
import {MdOutlineCleaningServices} from "react-icons/md"



export const Match = (props) => {
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:marcelo-maryam/matches')
            .then((res) => {
                console.log(res.data.matches)
                setMatches(res.data.matches)
            })
            .catch((err) => {
                console.log(err.res)
            })
    }
    useEffect(() => {
        getMatches()
    }, [])

    const cleanMatches = () => {
        axios
            .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcelo-maryam/clear")
            .then((res) => {
                console.log(res)
                setMatches([])

            })
            .catch((err) => {
                console.log(err)
            })


    }

    return (

        <MainContainer>
            <CardContainer>
                <h3> Astromatch </h3>
                
                <ul>
                    {matches.map((match => (
                        <ItemContainer><li key={match.id}> {match.name}  <img src={match.photo}></img></li></ItemContainer>
                    )))
                    }
                </ul>
                <button onClick={cleanMatches}> Clean <MdOutlineCleaningServices/> </button>
            </CardContainer>            
        </MainContainer>
    );
}

export default Match
