import React from "react";
import axios from "axios"
import styled from "styled-components"

const RegisterCard = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
margin: 0 auto;
width: 30%;
margin-top: 10%;
`

const Titulo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const SaveButton = styled.div`
margin: 0 auto;

`

const headers = {
    headers: {
        Authorization: "marcelo-camilli-maryam"
    }
}

export default class Register extends React.Component {
    state = {
        userListName: "",
        userEmail: ""
    }

    handleUserlistName = (event) => {
    this.setState({userListName: event.target.value})
    }

    handleUserlistEmail = (event) => {
        this.setState({userlistEmail: event.target.value})
        }

    createUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.userListName,
            email: this.state.userlistEmail
        }
    

    axios.post(url,body,headers) 
    .then ((res)=> {
        alert ("usuário cadastrado")
        this.setState({nome: "", email:""})
        this.setState({userListName: ""})
        this.setState({userlistEmail: ""})
    })
    .catch((err)=> {
        alert(err.response.data.message)
    })

    


}
render () {
return (
    <><Titulo>
        <h1>Labenusers</h1>
        <h3>Cadastro de Usuários</h3>
    </Titulo><>
    <RegisterCard>
        <input
            placeholder="Nome"
            value={this.state.userListName}
            onChange={this.handleUserlistName} />
        <input
            placeholder="E-mail"
            value={this.state.userListEmail}
            onChange={this.handleUserlistEmail} />
        <button onClick={this.createUser}>Salvar</button>
    </RegisterCard></></>

);
}
}
