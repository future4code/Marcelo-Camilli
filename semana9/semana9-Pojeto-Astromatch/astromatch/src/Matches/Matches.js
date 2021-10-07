import React, { useState, useEffect } from "react";
import { MainContainer, CardContainer} from "../styles"


function Matches() {


    return (

        <MainContainer>
        <CardContainer>
            <h3> Astromatch </h3>   
            <button /* onClick={this.props.handleClickHome()} */>Home</button>                  
        </CardContainer>
        </MainContainer>
    );
}

export default Matches;
