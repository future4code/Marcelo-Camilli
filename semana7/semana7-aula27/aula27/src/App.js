import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const CardCharacter = styled.div `
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to right, green,green);
`



const Container = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

const Header = styled.header `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: linear-gradient(to right, green,blue);
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: white;
`


export default class App extends React.Component {

  state = {
    characters: []
  }

  componentDidMount(){
    this.getAllCharacters ()
  }

  getAllCharacters = () => {
    const url ='https://rickandmortyapi.com/api/character'
    axios
    .get(url)
    .then ((res) => {
      console.log(res)
      this.setState({characters: res.data.results})
    })
    .catch ((err)=> {
      console.log(err)
    })

  }

  render() {
    const charactersList = this.state.characters.map((char) => {
      return <CardCharacter>

        <p> Name: {char.name} </p> 
        <p> Status: {char.status}</p> 
        <img src ={char.image}/>
        
        </CardCharacter>
    })
    console.log (charactersList)

    return (
      <div>
        <Header>
        <h1>Rick and Morty</h1>
        <h2> Characters </h2>
        </Header>
        <Container>
        {charactersList}
        </Container>
      </div>
    );
  }
}

