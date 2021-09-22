import React from "react";
import Register from "./Componentes/Register";
import Usuarios from "./Componentes/Usuarios";
import styled from "styled-components"

const ContainerGeral = styled.body`
background-color: cadetblue;
width: 100vw;
height: 100vw;
`

const BotaoLista = styled.div `
margin: 0 auto;
display: flex;
flex-direction: column;
width: 250px;
margin-top: 50px;
`


export default class App extends React.Component {
  state = {
    telaAtual: "register"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "register":
        return <Register irParaCadastro={this.irParaCadastro}/>
      case "usuarios":
        return <Usuarios irParaUsuarios={this.irParaUsuarios}/>
      default:
        return <div>Pagina inexistente</div>
    }
  }

  irParaCadastro = () => {
    this.setState ({telaAtual:"register"})
  }

  irParaUsuarios = () => {
    this.setState ({telaAtual:"usuarios"})
  }

render () {
  return (
    <ContainerGeral>
    <><div>
      {this.escolheTela()}
    </div>
    <BotaoLista>
        <button onClick={this.irParaUsuarios}>Lista de usuarios cadastrados</button>
        <button onClick={this.irParaCadastro}>Cadastro</button>
      </BotaoLista></>
      </ContainerGeral>
)}
}
