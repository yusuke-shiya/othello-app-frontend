import type { GetterTree } from 'vuex'
import type { OthelloState } from './types'

export const getters: GetterTree<OthelloState, {}> = {
  getBoard(state: OthelloState) {
    return state.board
  },
  getCurrentPlayer(state: OthelloState) {
    return state.currentPlayer
  },
  getScore(state: OthelloState) {
    return state.score
  },
  getIsGameOver(state: OthelloState) {
    return state.isGameOver
  }
}
