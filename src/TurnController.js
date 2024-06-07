import CheckWin from "./CheckWin.js";

// Function to control the turns
function TurnController(
  Board,
  playerTurn,
  setBoard,
  setPlayerTurn,
  winner,
  setWinner
) {
  // Function to make a move
  const makeMove = (row, col) => {
    console.log("Make move called:", { row, col, Board, playerTurn });

    // If the game already has a winner or the cell is not empty, return
    if (Board[row][col] !== null || winner !== null) {
      console.log(
        "Invalid move: either cell is occupied or there is already a winner."
      );
      return;
    }

    // Create a copy of the board to update
    const newBoard = Board.map((boardRow, i) =>
      boardRow.map((cell, j) =>
        i === row && j === col ? (playerTurn ? "X" : "O") : cell
      )
    );

    console.log("New board after move:", newBoard);

    // Update the board state
    setBoard(newBoard);

    // Check for a winner
    if (CheckWin(newBoard, playerTurn)) {
      setWinner(playerTurn ? "X" : "O");
      console.log("We have a winner:", playerTurn ? "X" : "O");
    } else {
      // Switch turns
      setPlayerTurn(!playerTurn);
      console.log("Switching turn to:", !playerTurn ? "X" : "O");
    }
  };

  return makeMove;
}

export default TurnController;
