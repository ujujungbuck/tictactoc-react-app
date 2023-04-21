import { useState } from "react";
import React from "react";
import styled from "styled-components";
import Square from "./Square";

export const BoxContainer =  styled.div`
/* display: flex;
align-items: center;
justify-content: center; */
//flex-direction: column;
font-size: 30px;
background-color: pink;
margin: 5% 40%;
padding: 40px 40px;
//height: 500px;
 .square {
    background: none;
    border-radius: 30px;
    margin: 10px;
    font-size: 30px;
    height: 40px;
    width: 40px;
  }
` 


const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const status = `Next player: ${xIsNext ? 'X' : 'O'}`

    const handleClick = (i) => {
        const newSquares = squares.slice()
        newSquares[i] = xIsNext ? 'X' : 'O'
        setSquares(newSquares)
        setXIsNext(prev => !prev)
    }

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />
    }

    return(
        <div>

            <BoxContainer>
            <div className="status">{status}</div>
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </BoxContainer>
        </div>
    )
}


export default Board