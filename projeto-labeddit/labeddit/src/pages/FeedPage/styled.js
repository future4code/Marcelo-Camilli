import styled from "styled-components"



export const FeedPageContainer = styled.div ` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


export const WritePostContainer = styled.div ` 
display: flex;
flex-direction: column;
box-shadow:  2px 2px rgb(242,118,73);
width: 450px;
height: 150px;
justify-content: center;
align-items: center;
margin-top: 20px;
margin-bottom: 20px;
font-size: 24px;
button {
    margin: 10px;
    width: 250px;
    border-radius: 5px;
    :hover {
        background-color: rgb(242,118,73)
    }
}
`


export const PostContainer = styled.div ` 
display: flex;
flex-direction: column;
box-shadow:  2px 2px rgb(242,118,73);
width: 450px;
height: 200px;
margin: 10px;
justify-content: center;
align-items: center;

`



export const UserContainer = styled.div ` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
bottom: 30%;
font-size: 24px;
`
export const TextContainer = styled.div ` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const ComentContainer = styled.div ` 
display: flex;
position: relative;
top: 30%;
`


