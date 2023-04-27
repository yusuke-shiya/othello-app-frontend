import type { OthelloState } from './types'
import { BOARD_SIZE } from '@/constants'

export const initialState: OthelloState = {
  board: Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill('empty')),
  currentPlayer: 'black',
  score: {
    black: 0,
    white: 0
  },
  isGameOver: false
}
