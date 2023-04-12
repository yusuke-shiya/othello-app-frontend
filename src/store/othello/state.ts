import type { OthelloState } from './types'

export const initialState: OthelloState = {
  board: Array(8).map(() => Array(8).fill(null)),
  currentPlayer: 'black',
  blackScore: 2,
  whiteScore: 2,
  isGameOver: false
}
