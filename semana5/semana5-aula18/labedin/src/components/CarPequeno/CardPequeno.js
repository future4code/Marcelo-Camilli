import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={ props.imagem } className="img-icon"   />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.email }</p>
            </div>
        </div>
    )
}

export default CardPequeno;