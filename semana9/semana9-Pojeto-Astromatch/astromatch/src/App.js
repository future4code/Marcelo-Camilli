import React, { useState, useEffect } from "react";
import axios from "axios"
import Matches from "./Matches/Matches";
import { MainContainer, CardContainer, Buttons } from "./styles";


export default function App() {
    const [profileName, setProfileName] = useState("")
    const [profileAge, setProfileAge] = useState (Number)
    const [profileBio, setProfileBio] = useState("")
    const [profilePhoto, setProfilePhoto] = useState("")
    const [profileId, setProfileId] = useState ("")
    const [currentPage, setCurrentPage] = useState ("home")
    console.log(profileId)

    

    useEffect(() => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
            .then(res => {
                console.log(res.data)
                setProfileName(res.data.profile.name)
                setProfileAge(res.data.profile.age)
                setProfileBio (res.data.profile.bio)
                setProfilePhoto (res.data.profile.photo)
                setProfileId (res.data.profile.id)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

        /*     useEffect (()=> {
        axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person", {
            "id": setProfileId,
            "choice": true
        })
    }) */

    const handleClickMatches = () => {
        setCurrentPage("matches")
        console.log("clicou")
    }

    const handleClickHome = () => {
        setCurrentPage("home")
    }



    const pageRender = () => {
        switch (currentPage) {
            case "home":
                return(
                    <MainContainer>
                    <CardContainer>
                        <h3> Astromatch </h3>   
                        <button onClick={handleClickMatches}>Matches</button>                  
                        <img src={profilePhoto} alt="nome"/> 
                        <h3>{profileName}</h3>
                        <strong> Age: {profileAge} </strong> 
                        <p>{profileBio}</p> 
                    <Buttons> 
                        <button>X</button>       
                        <button>V</button> 
                    </Buttons>           
                    </CardContainer>
                    </MainContainer>
                )
                case "matches":
                    return <Matches />
                default:
                    return <h1>Erro</h1>
        }
    }


    return (
        <div>
            {pageRender()}
        </div>
    );
}


