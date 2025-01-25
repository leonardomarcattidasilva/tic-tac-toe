import { useState } from "react"
import { deriveGameTurns, players, checkWinner, deriveGameBoard } from '../helpers'

const useMain = () => {
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

   return { activePlayer, gameBoard, winner, handlePlayerName, hasDraw, handleSelectedSquare, handleRematch }

}

export default useMain