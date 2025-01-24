import React from "react";

const GameOver = ({winner, onRematch}) => {
   return <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p> }
      {!winner && <p>It is a draw!</p> }
      <button type="button" onClick={onRematch}>Rematch!</button>
   </div>
}

export default GameOver;