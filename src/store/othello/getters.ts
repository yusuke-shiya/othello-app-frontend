import type { GetterTree } from 'vuex'
import type { OthelloState, PlayerColor } from './types'

export const getters: GetterTree<OthelloState, {}> = {
  getBoard(state: OthelloState) {
    return state.board
  },
  getCurrentPlayer(state: OthelloState) {
    return state.currentPlayer
  },
  getScore(state: OthelloState, color: PlayerColor) {
    return state.score[color]
  },
  getIsGameOver(state: OthelloState) {
    return state.isGameOver
  }
}
