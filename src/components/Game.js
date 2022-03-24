import React, { useState } from "react";
//import './styles/Game.css';
import Board from "./Board";

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xo = xIsNext ? "X" : "O";
    
    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber+1);
        const current = historyPoint[stepNumber];
        const squares = [...current];

        if (winner || squares[i]) return;

        squares[i] = xo;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    };

    const renderMoves = () => 
        history.map((sstep, move) => {
            const destination = move ? `Go to move #${move}` : "Go to Start";
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>
                        {destination}
                    </button>
                </li>
            );
        });
    

    return (
        <>
            <h1>Tic Tac Toe</h1>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className="info-wrapper">
                <div>
                    <h3>History</h3>
                    {renderMoves()}
                </div>
                <h3>{winner ? "Winner: " + winner : "Next Player: " + xo}</h3>
            </div>
        </>
    )
}

export default Game;

/*function Game() {
    
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
        </div>
    )
}

export default Game;*/