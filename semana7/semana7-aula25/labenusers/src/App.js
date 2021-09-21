import React from "react";
import Register from "./Componentes/Register";
import Usuarios from "./Componentes/Usuarios";
import styled from "styled-components"

const RegisterCard = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
margin: 0 auto;
width: 30%;
margin-top: 10%;
`

const UserList= styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 30%;
margin-top: 10%;
align-items: center;
`





export default class App extends React.Component {
render () {
  return (
    <><RegisterCard>
      <Register />
    </RegisterCard>
    <UserList>
      <Usuarios />
    </UserList></>
)}
}
