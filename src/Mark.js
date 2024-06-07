function Mark(playerTurn) {
  if (playerTurn === null) {
    return;
  } else {
    return playerTurn ? "X" : "O";
  }
}

export default Mark;
