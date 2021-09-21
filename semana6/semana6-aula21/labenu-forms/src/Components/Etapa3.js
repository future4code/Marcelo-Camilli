import React from "react"

export default class Etapa3 extends React.Component {
render () {
    return (

        <div>
            <h2> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <p> 7. Por que você não terminou um curso de graduação ?</p>
            <input type="text"/>
            <p> 8. Você fez algum curso complementar?</p>
            <select>
                <option value = "Nenhum"> Nenhum</option>
                <option value = "Curso técnico"> Curso Técnico</option>
                <option value = "Curso de inglês"> Curso de Inglês</option>

            </select>
            
        </div>
    )
}
}