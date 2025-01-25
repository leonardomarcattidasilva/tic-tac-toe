import React, { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import GameOver from './components/GameOver'
import { deriveGameTurns, players, checkWinner, deriveGameBoard } from './helpers'


const App = () => {
   const [player, setPlayer] = useState(players)
   const [gameTurns, setGameTurns] = useState([])
   const activePlayer = deriveGameTurns(gameTurns)
   
   const gameBoard = deriveGameBoard(gameTurns)
   const winner = checkWinner(gameBoard, player)

   const handlePlayerName = (symbol, name) => {
      setPlayer(prevState => {
         return { ...prevState, [symbol]: name }
      })
   }

   const hasDraw = gameTurns.length === 9 && !winner

   const handleSelectedSquare = (rowIndex, colIndex) => {
      setGameTurns(prevState => {
         const currentPlayer = deriveGameTurns(prevState)
         const newTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevState]
         return newTurns
      })
   }

   const handleRematch = () => setGameTurns([])

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
