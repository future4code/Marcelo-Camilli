import React from "react"


export default class Etapa1 extends React.Component {
render () {
    return (

        <div>
            <h2> ETAPA 1 - DADOS GERAIS</h2>
            <p> 1. Qual o seu nome?</p>
            <input type="text"/>
            <p> 2. Qual sua idade?</p>
            <input type="text"/>
            <p> 3. Qual seu email?</p>
            <input type="text"/>
            <p> 4. Qual a sua escolaridade</p>
            <select>
                <option value = "Ensino médio incompleto">Ensino médio incompleto </option>
                <option value = "Ensino médio completo">Ensino médio completo</option>
                <option value = "Ensino superior incompleto">Ensino superior incompleto</option>
                <option value = "Ensino superior completo">Ensino superior completo</option>
            </select>
            
        </div>
    )
}
}