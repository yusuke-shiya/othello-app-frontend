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
  }
}
