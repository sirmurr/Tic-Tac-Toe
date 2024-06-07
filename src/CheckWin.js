function CheckWin(Board, playerTurn) {
  const mark = playerTurn ? "X" : "O";

  // Check rows, columns and diagonals for win
  if (
    (Board[0][0] === mark && Board[0][1] === mark && Board[0][2] === mark) ||
    (Board[1][0] === mark && Board[1][1] === mark && Board[1][2] === mark) ||
    (Board[2][0] === mark && Board[2][1] === mark && Board[2][2] === mark) ||
    (Board[0][0] === mark && Board[1][0] === mark && Board[2][0] === mark) ||
    (Board[0][1] === mark && Board[1][1] === mark && Board[2][1] === mark) ||
    (Board[0][2] === mark && Board[1][2] === mark && Board[2][2] === mark) ||
    (Board[0][0] === mark && Board[1][1] === mark && Board[2][2] === mark) ||
    (Board[0][2] === mark && Board[1][1] === mark && Board[2][0] === mark)
  ) {
    return true;
  }
  return false;
}

export default CheckWin;
