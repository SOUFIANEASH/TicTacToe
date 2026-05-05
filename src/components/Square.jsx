import React from 'react'
import styles from './Square.module.css'

// SVG mark for X player
function XMark({ isWinner }) {
  const color = isWinner ? '#185fa5' : '#2c2c2a'
  return (
    <svg className={styles.mark} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="10" x2="42" y2="42" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="42" y1="10" x2="10" y2="42" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}

// SVG mark for O player
function OMark({ isWinner }) {
  const color = isWinner ? '#a32d2d' : '#888780'
  return (
    <svg className={styles.mark} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="26" r="16" stroke={color} strokeWidth="3.5" />
    </svg>
  )
}

// A single square on the board
function Square({ value, onClick, isWinner }) {
  const classNames = [
    styles.square,
    value ? styles.taken : '',
    isWinner && value === 'X' ? styles.winX : '',
    isWinner && value === 'O' ? styles.winO : '',
  ].join(' ')

  return (
    <button className={classNames} onClick={onClick} disabled={!!value}>
      {value === 'X' && <XMark isWinner={isWinner} />}
      {value === 'O' && <OMark isWinner={isWinner} />}
    </button>
  )
}

export default Square
