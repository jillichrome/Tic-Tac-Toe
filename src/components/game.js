import React, { useState } from "react";
import Square from './square.js';
import calculateWinner from './calculateWinner.js';
import Restart from './restart.js';
import "./game.css";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);

  function renderSquare(i) {
    return(
      <Square value={squares[i]} onClick={() => {
        if( squares[i] !== null || squares[i] !== winner) {
          return;
        }

        const nextSquare = squares.slice();
        nextSquare[i] = isXNext ? 'X' : 'O';

        setSquares(nextSquare);
        setIsXNext(!isXNext)
      }} />
    )
  };

  function isBoardFull(squares) {
    for(let i = 0; i < squares.length; i++) {
      if(squares[i] == null) {
        return false;
      }
    }
    return true;
  }

  function getStatus() {
    if(winner) {
      return "Winner: " + winner
    } else if (isBoardFull(squares)) {
      return "Draw!"
    } else {
      return "Next player: " + (isXNext ? 'X' : 'O');
    }
  }

  function gameOver() {
    if(winner) {
      return "Play Again";
    } else {
      return "Restart"
    };
  }

  function renderRestartButton() {
    return(
      <Restart value={gameOver()} onClick={ () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true)
      }} />
    )
  }

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
        <div className='game-info'>{getStatus()}</div>
        <div className='restart-button'>{renderRestartButton()}</div>
      </div>
    </div>
  );
}


export default Game;
