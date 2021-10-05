import React from "react";
import axios from "axios";
import styled from "styled-components"

const Cardplaylist = styled.div`
border: 2px solid green;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
`

export default class Playlists extends React.Component {
    state = {
        listas: []
    }

    componentDidMount(){
        this.pegarListas()
    }

    pegarListas = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url,{
            headers: {
                Authorization: "marcelo-camilli-maryam"
            }
        }) 
        .then((res)=>{
            this.setState({listas: res.data.result.list})
        })
        .catch((err)=> {
            alert("Ocorreu um problema")
        })
    }

    deletarListas = (id) => {
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url,{
            headers: {
                Authorization: "marcelo-camilli-maryam"
            }
        })
        .then((res)=> {            
            alert("Playlist deletada")
            this.pegarListas()
        })
        .catch((err)=> {
            console.log(err.response.data)
        })
    }

    render (){
        console.log(this.state.listas)
        const listaMapeada = this.state.listas.map((lista)=> {
            return <Cardplaylist>
                    {lista.name}
                    <button onClick={()=> this.deletarListas(lista.id)}>X</button>
                </Cardplaylist>
        })

        return(
            <div>
            <h2>Playlists</h2>
            {listaMapeada}
            </div>
        )
    }
}

