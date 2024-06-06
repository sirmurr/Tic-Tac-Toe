import React, { useState, useEffect } from "react";
import "./App.css";
import CheckWin from "./CheckWin.js";
import Mark from "./Mark.js";

function App() {
  const [TL, setTL] = useState(false);
  const [TM, setTM] = useState(false);
  const [TR, setTR] = useState(false);
  const [ML, setML] = useState(null);
  const [MM, setMM] = useState(null);
  const [MR, setMR] = useState(false);
  const [LL, setLL] = useState(null);
  const [LM, setLM] = useState(true);
  const [LR, setLR] = useState(null);

  const [playerTurn, setPlayerTurn] = useState(true); //will be T/F. T: X, F: Y, always starting with X
  const [winner, setWinner] = useState(null); // set to winning player when state reached

  // PLay a turn then check for win then play next turn

  useEffect(() => {
    let Board = [
      [TL, TM, TR],
      [ML, MM, MR],
      [LL, LM, LR],
    ];

    if (CheckWin(Board, playerTurn)) {
      setWinner(playerTurn ? "X" : "O");
    }
    // } else {
    //   setPlayerTurn(!playerTurn);
    // }
  }, [TL, TM, TR, ML, MM, MR, LL, LM, LR, playerTurn]);

  return (
    <div className="App">
      <h1 className="App-header">Tic-Tac-Toe</h1>
      <div className="Board" /*Naming: (Top/Middle/Bottom-Left/Middle/Right)*/>
        <div id="T-L" className="Square">
          <h2>{Mark(TL)}</h2>
        </div>
        <div id="T-M" className="Square">
          <h2>{Mark(TM)}</h2>
        </div>
        <div id="T-R" className="Square">
          <h2>{Mark(TR)}</h2>
        </div>
        <div id="M-L" className="Square">
          <h2>{Mark(ML)}</h2>
        </div>
        <div id="M-M" className="Square">
          <h2>{Mark(MM)}</h2>
        </div>
        <div id="M-R" className="Square">
          <h2>{Mark(MR)}</h2>
        </div>
        <div id="B-L" className="Square">
          <h2>{Mark(LL)}</h2>
        </div>
        <div id="B-M" className="Square">
          <h2>{Mark(LM)}</h2>
        </div>
        <div id="B-R" className="Square">
          <h2>{Mark(LR)}</h2>
        </div>
      </div>
      <div>
        {winner !== null ? <h3>The winner is {Mark(winner)}</h3> : null}
      </div>
    </div>
  );
}

export default App;
