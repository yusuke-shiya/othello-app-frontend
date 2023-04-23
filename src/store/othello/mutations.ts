import { BOARD_SIZE } from '@/constants'
import type { OthelloBoard, PlayerColor, OthelloState } from './types'

export const mutations = {
  setBoard(state: OthelloState, payload: OthelloBoard) {
    state.board = payload
  },
  setCurrentPlayer(state: OthelloState, payload: PlayerColor) {
    state.currentPlayer = payload
  },
  setScore(state: OthelloState, payload: OthelloState['score']) {
    state.score = payload
  },
  setIsGameOver(state: OthelloState, payload: boolean) {
    state.isGameOver = payload
  },
  initializeBoard(state: OthelloState) {
    state.board = Array(BOARD_SIZE)
      .fill(null)
      .map(() => Array(BOARD_SIZE).fill('empty'))
    state.board[3][3] = 'white'
    state.board[4][4] = 'white'
    state.board[3][4] = 'black'
    state.board[4][3] = 'black'
  }
}
