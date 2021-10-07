import React, { useState, useEffect } from "react";
import axios from "axios"
import Matches from "../Matches/Matches";
import { MainContainer, CardContainer, Buttons } from "../styles"


const Home = () => {
    const [profile, setProfile] = useState({})


    const getProfileToChoose = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcelo-camilli-maryam/person')
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err.res)
            })

    }

    useEffect(() => {
        getProfileToChoose()
    }, [])



        const choosePerson = () => {
        axios
        .post ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:marcelo-camilli-maryam/choose-person", {
            id: profile.id,
            choice: true
        })
        .then ((res)=> {
            getProfileToChoose()
            
        })
        .catch ((err) => {
            console.log(err.response)
        })
        } 



    return (
        <MainContainer>
            <CardContainer>
                <h3> Astromatch </h3>
                <img src={profile.photo} alt="nome" />
                <h3>{profile.name}</h3>
                <strong> Age: {profile.age} </strong>
                <p>{profile.bio}</p>
                <Buttons>
                    <button onClick={() => choosePerson (false)}>X</button>
                    <button onClick={() => choosePerson (true)}>V</button>
                </Buttons>
            </CardContainer>    
        </MainContainer>
    
    );
}


export default Home