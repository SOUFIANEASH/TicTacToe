import React, { useState } from 'react'
import Board from './components/Board'
import ScoreBoard from './components/ScoreBoard'
import History from './components/History'
import { calculateWinner } from './utils/gameLogic'
import styles from './App.module.css'

function App() {
  // 9-cell board: each cell is 'X', 'O', or null
  const [squares, setSquares] = useState(Array(9).fill(null))
  // Whose turn it is
  const [currentPlayer, setCurrentPlayer] = useState('X')
  // Whether the game has ended
  const [gameOver, setGameOver] = useState(false)
  // Persistent scores across games
  const [scores, setScores] = useState({ X: 0, O: 0, D: 0 })
  // Log of past results
  const [history, setHistory] = useState([])

  // Determine current result (winner or draw)
  const result = calculateWinner(squares)
  const winLine = result ? result.line : []

  // Called when a square is clicked
  function handlePlay(index) {
    if (squares[index] || gameOver) return

    const next = squares.slice()
    next[index] = currentPlayer

    const outcome = calculateWinner(next)

    if (outcome) {
      setGameOver(true)
      setSquares(next)
      if (outcome.winner === 'D') {
        setScores(s => ({ ...s, D: s.D + 1 }))
        setHistory(h => [...h, 'Draw'])
      } else {
        setScores(s => ({ ...s, [outcome.winner]: s[outcome.winner] + 1 }))
        setHistory(h => [...h, `${outcome.winner} won`])
      }
    } else {
      setSquares(next)
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  // Reset board for a new game, keep scores
  function handleNewGame() {
    setSquares(Array(9).fill(null))
    setCurrentPlayer('X')
    setGameOver(false)
  }

  // Reset everything including scores and history
  function handleReset() {
    setSquares(Array(9).fill(null))
    setCurrentPlayer('X')
    setGameOver(false)
    setScores({ X: 0, O: 0, D: 0 })
    setHistory([])
  }

  // Build the status message
  function getStatus() {
    if (!result) return `${currentPlayer}'s turn`
    if (result.winner === 'D') return "It's a draw"
    return `${result.winner} wins!`
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Tic-tac-toe</h1>
          <span className={styles.badge}>{getStatus()}</span>
        </div>

        {/* Main layout: board + sidebar */}
        <div className={styles.layout}>

          {/* Game board */}
          <Board
            squares={squares}
            winLine={winLine}
            onPlay={handlePlay}
          />

          {/* Sidebar */}
          <div className={styles.sidebar}>
            <ScoreBoard scores={scores} />

            <div className={styles.buttons}>
              <button onClick={handleNewGame}>New game</button>
              <button onClick={handleReset}>Reset all</button>
            </div>

            <History entries={history} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
