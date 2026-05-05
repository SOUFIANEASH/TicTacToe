import React from 'react'
import Square from './Square'
import styles from './Board.module.css'

// Renders the 3x3 board grid
function Board({ squares, winLine, onPlay }) {
  function handleClick(index) {
    // Guard: ignore if cell already filled (game logic also handles this in App)
    if (squares[index]) return
    onPlay(index)
  }

  return (
    <div className={styles.board}>
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          isWinner={winLine.includes(index)}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  )
}

export default Board
