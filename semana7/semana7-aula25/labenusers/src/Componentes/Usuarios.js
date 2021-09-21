import React from "react";
import axios from "axios"
import styled from "styled-components"



const headers = {
    headers: {
    Authorization: "marcelo-camilli-maryam"
    }
}


export default class Usuarios extends React.Component {
    state ={
        userList: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get (url,headers)
        .then ((res)=>{
            this.setState ({userList:res.data})
            console.log(res)
        })
        .catch((err)=> {
            console.log(err.response)
        })
    }

render () {
    const userComponentes = this.state.userList.map((user)=> {
        return <li>{user.name}</li>
    })
return (
    <div>
        {userComponentes}
        <button>Voltar</button>
        </div>
);
}
}

