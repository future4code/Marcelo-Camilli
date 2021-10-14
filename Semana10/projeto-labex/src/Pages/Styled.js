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
        cursor: pointer;
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
    :hover { 
        text-decoration: underline;
        cursor: pointer;
    } 
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

// ---TripListPage ---//

export const TripContainer = styled.div ` 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
width: 450px;
position: relative;
left: 70vh;
padding: 10px;



button {
    padding: 10px;
    margin: 10px;
    background-color: rgb(187, 208, 187);
    border:0;
    border-radius: 5px;
    width: 200px;
    height: 40px;    
    font-size: larger;
    :hover { 
        text-decoration: underline;
        cursor: pointer;
    } 
}
`

export const TripTitle = styled.div ` 
justify-content: center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 36px;
display: flex;
margin-top: 50px;
margin-bottom: 25px;
`


// --- ApplicationFormPage --//

export const ApplyForm = styled.div `  
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20vh;
button {
    padding: 10px;
    margin: 10px;
    background-color: rgb(187, 208, 187);
    border:0;
    border-radius: 5px;
    width: 200px;
    height: 40px;    
    font-size: larger;
    :hover { 
        text-decoration: underline;
        cursor: pointer;
    } 
}
`

// -- CreateTripPage --// 

export const CreateForm = styled.div `  
display: flex;
flex-direction: column;
width: 400px;
position: relative;
justify-content: center;
position: relative;
left: 50vh;
top: 20vh;



button {
    padding: 10px;
    margin: 10px;
    background-color: rgb(187, 208, 187);
    border:0;
    border-radius: 5px;
    width: 200px;
    height: 40px;    
    font-size: larger;
    align-self: center;
    :hover { 
        text-decoration: underline;
        cursor: pointer;
    } 
}
`