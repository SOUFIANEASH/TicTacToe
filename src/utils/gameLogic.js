// All possible winning combinations (indices into the 9-cell array)
const WIN_LINES = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal top-left to bottom-right
  [2, 4, 6], // diagonal top-right to bottom-left
]

/**
 * Checks the board for a winner or draw.
 * @param {Array} squares - 9-element array of 'X', 'O', or null
 * @returns {{ winner: string, line: number[] } | null}
 *   winner: 'X', 'O', or 'D' (draw). null if game is still ongoing.
 */
export function calculateWinner(squares) {
  // Check all winning lines
  for (const [a, b, c] of WIN_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] }
    }
  }

  // Check for draw (all cells filled, no winner)
  if (squares.every(Boolean)) {
    return { winner: 'D', line: [] }
  }

  // Game still in progress
  return null
}
