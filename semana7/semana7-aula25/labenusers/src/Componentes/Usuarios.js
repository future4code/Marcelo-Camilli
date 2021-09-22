import React from "react";
import axios from "axios"
import styled from "styled-components"

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin:10px;
    width: 300px;
    justify-content: space-between;
    display: flex;    
`
const ContainerUsuarios = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


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

    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url,headers)
    
    .then ((res)=> {
        alert ("Usuário deletado")
        this.getAllUsers()
    })
    .catch ((err)=> {
        alert ("Ocorreu um erro, tente novamente")
    })

}

render () {
    const userComponentes = this.state.userList.map((user)=> {
        return <CardUsuario key={user.id}>{user.name}
                <button onClick={() => this.deleteUser(user.id)}>X</button></CardUsuario>
    })
return (
    <ContainerUsuarios>
        <h3> Lista de Usuários Cadastrados </h3>
        {userComponentes}
    </ContainerUsuarios>
);
}
}

