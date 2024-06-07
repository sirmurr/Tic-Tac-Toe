import React, { useState } from "react";
import "./App.css";
import CheckWin from "./CheckWin.js";
import Mark from "./Mark.js";
import TurnController from "./TurnController.js";

function App() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [playerTurn, setPlayerTurn] = useState(true); // will be T/F. T: X, F: O, always starting with X
  const [winner, setWinner] = useState(null); // set to winning player when state reached

  // Play a turn then check for win then play next turn
  const playMove = TurnController(
    board,
    playerTurn,
    setBoard,
    setPlayerTurn,
    winner,
    setWinner
  );

  const resetGame = () => {
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setPlayerTurn(true); // Reset to X's turn
    setWinner(null); // Clear the winner
  };

  // Logging to verify the state updates
  console.log("Board state:", board);
  console.log("Player turn:", playerTurn);
  console.log("Winner:", winner);

  return (
    <div className="App">
      <h1 className="App-header">Tic-Tac-Toe</h1>
      <h3>Current Player Turn: {Mark(playerTurn)}</h3>
      <div className="Board">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              className="Square"
              onClick={() => playMove(rowIndex, colIndex)}
              disabled={cell !== null || winner !== null}
            >
              {cell}
            </button>
          ))
        )}
      </div>
      <div>{winner !== null ? <h3>The winner is {winner}</h3> : null}</div>
      <button key="reset" className="reset-button" onClick={() => resetGame()}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
