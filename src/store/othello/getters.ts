import type { OthelloState } from './types'

export const getters = {
  getBoard(state: OthelloState) {
    return state.board
  },
  getCurrentPlayer(state: OthelloState) {
    return state.currentPlayer
  },
  getBlackScore(state: OthelloState) {
    return state.blackScore
  },
  getWhiteScore(state: OthelloState) {
    return state.whiteScore
  },
  getIsGameOver(state: OthelloState) {
    return state.isGameOver
  }
}
