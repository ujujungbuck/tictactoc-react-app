import { useState } from "react";
import React from "react";
import styled from "styled-components";
import Square from "./Square";

export const BoxContainer =  styled.div`
display: flex;
align-items: center;
justify-content: center;
//flex-direction: column;
background-color: pink;
margin: 10px;
padding: 10px;
//height: 500px;
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
            <div className="status">{status}</div>
            <BoxContainer>
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