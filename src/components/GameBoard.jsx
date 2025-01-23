import React from "react";

const initialGameBoard = [
   [null, null, null],
   [null, null, null],
   [null, null, null],
]


const GameBoard = ({ onSelectedSquare, turns }) => {
   let gameBoard = initialGameBoard

   for (const turn of turns) {
      const { square, player } = turn
      const { row, col } = square
      gameBoard[row][col] = player
   }

   return <ol id="game-board">
      {
         gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
               {
                  row.map((PlayerSymbol, colIndex) => {
                     return <li key={colIndex}>
                        <button type="button" onClick={() => onSelectedSquare(rowIndex, colIndex)} disabled={PlayerSymbol !== null}>
                           {PlayerSymbol}
                        </button>
                     </li>
                  })
               }
            </ol>
         </li>)
      }
   </ol>
}

export default GameBoard;