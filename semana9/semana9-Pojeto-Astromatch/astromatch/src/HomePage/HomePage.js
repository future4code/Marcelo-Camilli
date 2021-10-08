import React, { useState, useEffect } from "react";
import axios from "axios"
import { MainContainer, CardContainer, Buttons } from "../styles"
import { AiFillHeart, AiOutlineClose } from "react-icons/ai"


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
            getProfileToChoose(res)
            
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
                    <button onClick={() => choosePerson (false)}> <AiOutlineClose/> </button>
                    <button onClick={() => choosePerson (true)}> <AiFillHeart/></button>
                </Buttons>
            </CardContainer>    
            
        </MainContainer>
    
    );
}


export default Home