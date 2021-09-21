import React from "react";
import axios from "axios"
import styled from "styled-components"

const SaveButton = styled.div`
margin: 0 auto;
background-color: cadetblue;
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
        console.log("Nome add")
        this.setState({userListName: ""})
        this.setState({userlistEmail: ""})
    })
    .catch((err)=> {
        console.log(err.response)
    })

    


}
render () {
return (
    <><div>
        <label> Nome:</label>
        <input
            value={this.state.userListName}
            onChange={this.handleUserlistName} />
        <label> Email:</label>
        <input
            value={this.state.userListEmail}
            onChange={this.handleUserlistEmail} />
    </div>
    <SaveButton>
            <button onClick={this.createUser}>Salvar</button>
        </SaveButton></>

);
}
}
