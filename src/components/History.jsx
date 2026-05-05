import React from 'react'
import styles from './History.module.css'

// Renders list of past game outcomes
function History({ entries }) {
  if (entries.length === 0) return null

  return (
    <div className={styles.container}>
      <p className={styles.title}>Match history</p>
      <ul className={styles.list}>
        {[...entries].reverse().slice(0, 8).map((entry, i) => (
          <li key={i} className={styles.entry}>
            <span className={styles.num}>#{entries.length - i}</span>
            <span>{entry}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default History
