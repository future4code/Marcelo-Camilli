import React from "react"
import styled from "styled-components"

export const MainContainer = styled.div ` 
display: flex;
background-color: cadetblue;
height: 100vh;

`
export const CardContainer = styled.div ` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 40vh;
height: 70vh;
margin-left: auto;
margin-right: auto;
margin-top: 20vh;
margin-bottom: 20vh;
border: 1px solid black;
border-radius: 25px;
background-color: white;
img {
    width: 200px;
    height: 250px;    
    margin-top: 10px;
    border-radius: 15px;
}
`

export const Buttons = styled.div ` 
display: flex;
button {    
    padding: 10px;
    margin: 30px;
    border-radius: 5px;
    background-color: cadetblue;
}
`