import React from "react";
import axios from "axios";
import styled from "styled-components"
import Playlists from "./Components/playlist";
import Tracks from "./Components/tracks";


const ContainerGeral = styled.div`
background-color: black;
height: 100vh;
width: 100vw;
color: lemonchiffon;
`
const Container = styled.div `
display: grid;
grid-template-columns: 2fr 1fr;
align-items: center;
margin: 10px;
padding: 10px;
color: white;
`

const Header = styled.header`
display: flex;
justify-content: flex-start;
color: white
`




export default class App extends React.Component {
  state = {
    playListName: ""    
  }

  handlePlaylistName = (event) => {
    this.setState({playListName: event.target.value})
  }

    createPlayList = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.playListName
    }

    axios
      .post(url, body, {
        headers: {
          Authorization: "marcelo-camilli-maryam"
        }
      })
      .then((res) => {
        this.setState({playListName: "" })        
      })
      .catch((err) => {
        console.log(err)
      })
    

    }
  render() {

    return (
      <ContainerGeral>        
        <h1>Labefy</h1>
        <Header>
            <input
            placeholder={"Nome da Playlist"}
            value={this.state.playListName}
            onChange={this.handlePlaylistName} /> <br/>
          <button onClick={this.createPlayList}>Adicionar Playlist</button>
        </Header>
      <Container>
        <Playlists/>
        <Tracks/>
        </Container>
      </ContainerGeral>
      
      
      
    );
  }
}
