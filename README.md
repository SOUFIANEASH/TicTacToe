# Tic-Tac-Toe — React App

**Practical Work No. 10 · 2025–2026**  
Theme: ReactJS Library

---

## Overview

A fully functional two-player Tic-Tac-Toe game built with **React 18** and **Vite**. The project demonstrates core React concepts including component composition, state management with hooks, props, and CSS Modules for scoped styling.

---

## Features

- Two-player gameplay (X and O take turns)
- Win detection with highlighted winning line
- Draw detection when the board is full
- Persistent score tracking across multiple games
- Match history log (last 8 results)
- New game and full reset controls

---

## Project Structure

```
tictactoe/
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite + React plugin config
└── src/
    ├── main.jsx                # React DOM render entry
    ├── App.jsx                 # Root component — holds all game state
    ├── App.module.css
    ├── index.css               # Global styles and CSS custom properties
    ├── components/
    │   ├── Square.jsx          # Single board cell with SVG X/O mark
    │   ├── Square.module.css
    │   ├── Board.jsx           # 3×3 grid of Square components
    │   ├── Board.module.css
    │   ├── ScoreBoard.jsx      # Score cards for X, Draw, O
    │   ├── ScoreBoard.module.css
    │   ├── History.jsx         # List of past game outcomes
    │   └── History.module.css
    └── utils/
        └── gameLogic.js        # calculateWinner() — pure game logic
```

---

## Component Architecture

```
App
├── Board
│   └── Square (×9)
├── ScoreBoard
└── History
```

| Component | Responsibility |
|-----------|---------------|
| `App` | Game state, turn logic, score tracking |
| `Board` | Renders the 3×3 grid, passes click events up |
| `Square` | Renders one cell; draws SVG X or O mark |
| `ScoreBoard` | Displays win/draw counts |
| `History` | Shows list of past game results |
| `gameLogic.js` | Pure function — checks all win lines and draw condition |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm (included with Node.js)

### Install and Run

```bash
# 1. Unzip the project
unzip Trab10_TicTacToe.zip
cd tictactoe

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

> **Note:** The `node_modules/` folder is excluded from the submission zip, as per the assignment instructions. Run `npm install` to restore it.

---

## Key React Concepts Used

- **`useState`** — manages board state, current player, scores, and history
- **Props** — data and callbacks flow from `App` down to child components
- **Event handling** — click events bubble up from `Square` → `Board` → `App`
- **Conditional rendering** — win/draw messages shown only when the game ends
- **Array methods** — `.map()` to render cells, `.slice()` to copy board state immutably
- **CSS Modules** — scoped class names per component, no style conflicts

---

## How the Game Logic Works

`calculateWinner(squares)` in `utils/gameLogic.js` checks all 8 possible winning lines against the current 9-cell board array. It returns:

- `{ winner: 'X' | 'O', line: [i, j, k] }` — if a player has won
- `{ winner: 'D', line: [] }` — if all cells are filled with no winner (draw)
- `null` — if the game is still in progress

---

## Author

Student No.: 28638 
Name: Soufiane 
Date: May 2025
