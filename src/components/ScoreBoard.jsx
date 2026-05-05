import React from 'react'
import styles from './ScoreBoard.module.css'

// Displays match scores for both players and draws
function ScoreBoard({ scores }) {
  return (
    <div className={styles.scores}>
      <div className={styles.card}>
        <span className={styles.label}>X wins</span>
        <span className={`${styles.value} ${styles.xColor}`}>{scores.X}</span>
      </div>
      <div className={styles.card}>
        <span className={styles.label}>Draws</span>
        <span className={styles.value}>{scores.D}</span>
      </div>
      <div className={styles.card}>
        <span className={styles.label}>O wins</span>
        <span className={`${styles.value} ${styles.oColor}`}>{scores.O}</span>
      </div>
    </div>
  )
}

export default ScoreBoard
