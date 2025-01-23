import React, { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning_combinations"

const deriveGameTurns = gameTurns => {
   let currentPlayer = 'X'
   if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O'
   }

   return currentPlayer
}


const App = () => {
   const [gameTurns, setGameTurns] = useState([])
   const activePlayer = deriveGameTurns(gameTurns)

   const handleActivePlayer = (rowIndex, colIndex) => {
      setGameTurns(prevState => {
         const currentPlayer = deriveGameTurns(prevState)
         const newTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevState]
         return newTurns
      })
   }

   return <main>
      <div id="game-container">
         <ol id="players" className="highlight-player">
            <Player name='Player 1' symbol='X' isActive={activePlayer == 'X'} />
            <Player name='Player 2' symbol='O' isActive={activePlayer == 'O'} />
         </ol>
         <GameBoard onSelectedSquare={handleActivePlayer} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
   </main>
}

export default App
