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
 