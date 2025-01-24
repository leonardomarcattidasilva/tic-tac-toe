import React from "react";


const GameBoard = ({ onSelectedSquare, board}) => {

   return <ol id="game-board">
      {
         board.map((row, rowIndex) => <li key={rowIndex}>
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