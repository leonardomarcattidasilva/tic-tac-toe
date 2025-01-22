import React, {useState} from "react";

const initialGameBoard = [
   [null, null, null],
   [null, null, null],
   [null, null, null],
]


const GameBoard = () => {
   const [gameBoard, setGameBoard] = useState(initialGameBoard);

   const handleSelectedSquare = (rowIndex, colIndex, PlayerSymbol) => {
      setGameBoard(prevState => {
         const newState = [...prevState.map(innerArray => [...innerArray])]
         newState[rowIndex][colIndex] = 'X';
         return newState
      })
   }

   return <ol id="game-board">
      {
         gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
               {
                  row.map((PlayerSymbol, colIndex) => {
                     return <li key={colIndex}>
                        <button type="button" onClick={() => handleSelectedSquare(rowIndex, colIndex, PlayerSymbol)} >{PlayerSymbol}</button>
                     </li>
                  })
               }
            </ol>
         </li>)
      }
   </ol>
}

export default GameBoard;