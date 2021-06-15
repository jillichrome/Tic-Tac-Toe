import React, { useState } from "react";
import Square from './square.js';
import "./game.css";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function renderSquare(i) {
    return(
      <Square value={squares[i]} onClick={() => {
        squares[i] = 'X';
        setSquares(squares)
      }} />
    )
  };

  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
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
        </div>
      </div>
    </div>
  );
}


export default Game;
