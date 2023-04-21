import React from "react";
import styled from "styled-components"

export const BoxContainer =  styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: pink;
margin: 10px;
padding: 10px;
height: 100%;
`


const Board = () => {

    return(
        <div>
            <BoxContainer>
                <div>Next Player : X, O</div>
                
            </BoxContainer>
        </div>
    )
}


export default Board