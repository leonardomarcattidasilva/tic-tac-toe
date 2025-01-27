import { WINNING_COMBINATIONS } from "./winning_combinations"

const initialGameBoard = [
   [null, null, null],
   [null, null, null],
   [null, null, null],
]

const players = { 'X': 'Player 1', 'O': 'Player 2' }

const deriveGameTurns = gameTurns => {
   let currentPlayer = 'X'
   if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O'
   }

   return currentPlayer
}

const checkWinner = (gameBoard, player) => {
   let winner = null
   for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

      if (firstSquareSymbol && firstSquareSymbol == secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol) {
         winner = player[firstSquareSymbol]

      }
   }

   return winner
}

const deriveGameBoard = (gameTurns) => {
   let gameBoard = [...initialGameBoard.map(array => [...array])]


   for (const turn of gameTurns) {
      const { square, player } = turn
      const { row, col } = square
      gameBoard[row][col] = player
   }

   return gameBoard
}


export { deriveGameTurns, players, checkWinner, deriveGameBoard }