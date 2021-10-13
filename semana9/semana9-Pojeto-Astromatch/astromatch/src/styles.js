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
margin-top: 10vh;
margin-bottom: 10vh;
border: 1px solid black;
border-radius: 25px;
background-color: white;
position: absolute;
text-align: center;
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
    padding: 20px;
    margin: 30px;
    border-radius: 5px;
    background-color: cadetblue;
}
`
export const Main = styled.div ` 
background-color: cadetblue;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`

export const MainButtons = styled.button ` 
    display: flex;
    position: relative;
    margin-top: 46em;
    margin-left: 8em;    
    border-radius: 5px;  
`

export const ItemContainer = styled.div ` 
display: flex;
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 200px;
height: 50px;
justify-content: space-between;
align-items: center;

img {
    width: 60px ;
    height: 60px;
    border-radius: 30px;
    margin-right: 20px;
}
`