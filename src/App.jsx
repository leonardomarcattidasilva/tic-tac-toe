import React from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import GameOver from './components/GameOver'
import { players } from './helpers'
import useMain from "./hooks/userMain"

const App = () => {
   const { activePlayer, gameBoard, winner, handlePlayerName, hasDraw, handleSelectedSquare, handleRematch } = useMain()

   return <main>
      <div id="game-container">
         <ol id="players" className="highlight-player">
            <Player name={players.X} symbol='X' isActive={activePlayer == 'X'} onPlayernameChange={handlePlayerName} />
            <Player name={players.O} symbol='O' isActive={activePlayer == 'O'} onPlayernameChange={handlePlayerName} />
         </ol>

         <GameBoard onSelectedSquare={handleSelectedSquare} board={gameBoard} />
         {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
      </div>
   </main>
}

export default App
