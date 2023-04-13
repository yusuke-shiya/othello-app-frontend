import type { OthelloState } from './types'

export const initialState: OthelloState = {
  board: Array(8)
    .fill(null)
    .map(() => Array(8).fill(null)),
  currentPlayer: 'black',
  score: {
    black: 2,
    white: 2
  },
  isGameOver: false
}
