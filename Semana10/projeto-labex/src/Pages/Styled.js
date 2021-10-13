import styled from "styled-components"


// ----- HEADER ---- //
export const AppContainer =styled.div ` 
    display: flex;
    flex-direction: column;
    
`
export const HeaderContainer = styled.div ` 
    height: 45px;
    background-color: rgb(187, 208, 187) ;
    display: flex;
    align-items: center;
    justify-content: space-around;

` 

export const HeaderButtons = styled.div ` 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px;
    button {
        margin: 2px;
        background: none;
        border: none;  
    :hover { 
        text-decoration: underline;
    }    

    }

`

// HOMEPAGE //

export const HomePageButtons = styled.div ` 
display: flex;
align-items: center;
justify-content: center;
margin: 0, auto;
height: 100%;
width: 100%;
position: absolute;



button {
    padding: 10px;
    margin: 10px;
    background-color: rgb(187, 208, 187);
    border:0;
    border-radius: 5px;
    width: 250px;
    height: 50px;    
    font-size: larger;
}
`

export const MainTitle = styled.div ` 
display: flex;
justify-content: center;
position: relative;
top: 20vh;
font-size: 36px;
color: rgb(187, 208, 187);
` 