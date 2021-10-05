import React from "react"
import axios from "axios"
import styled from "styled-components"

const ContainerAdd = styled.div`
display: flex;
flex-direction: column;
` 
const Title = styled.div ` 
display: flex;
align-self: center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 22px;
margin-bottom: 10px;
color: white
`
const BotaoAddPlaylist = styled.button `
display: flex;
flex-direction: column;

`

export default class Tracks extends React.Component {
    state = {
        trackName:"",
        artist:"",
        trackUrl: ""
        
    }
    addTrackToPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
        const body = {
        name: this.state.trackName,
        artist: this.state.artist,
        url: this.state.trackUrl
        }
        axios
        .post(url,body,{
            headers:{
                Authorization: "marcelo-camilli-maryam"
            }
        })
        .then((res)=> {
            console.log(res.data)
        })
        .catch((err)=> {
            console.log(err)
        })
/* 
        handleTrackName = (event) => {
            this.setState({trackName: event.target.value})
        }

        handleArtist = (event) => {
            this.setState({artist: event.target.value})
        }

        handleTrackUrl = (event) => {
            this.setState({trackUrl: event.target.value})
        } */
}
    
    render () {
        return(
            <ContainerAdd>
                <Title > <strong> Adicionar musica a playlist:</strong></Title>
                <input
                    placeholder={"Nome da musica"}
                    value={this.state.trackName}
                    onChange={this.handleTrackName}
                />
                <input
                    placeholder={"Nome do artista"}
                    value={this.state.artist}
                    onChange={this.handleArtist}
                />
                <input
                    placeholder={"Url da musica"}
                    value={this.state.trackUrl}
                    onChange={this.handleTrackUrl}
                />
                <button onClick={this.addTrackToPlaylist}>Adicionar a playlist</button>
            </ContainerAdd>
        )
    }
}