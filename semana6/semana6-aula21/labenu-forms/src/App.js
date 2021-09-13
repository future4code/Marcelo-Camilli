import React from 'react'
import styled from 'styled-components';
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Final from './Components/Final';

const TelaInicial = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`


export default class App extends React.Component {

  state = {
    etapa: 1
  }

  renderizaPagina = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>
      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      case 4:
        return <Final/>
      default:
        return <p> Seção inexistente</p>
    }
  }

  proximaPagina = () => {
    const paginaAtual = Number (this.state.etapa)
    const proximaPagina = paginaAtual + 1
    this.setState({etapa: proximaPagina})

  }

  render () {
  return (
    <TelaInicial>
    <div>
      {this.renderizaPagina()}
      <button onClick ={this.proximaPagina}> Próxima página </button>
    </div>
    </TelaInicial>
  );
}
}


