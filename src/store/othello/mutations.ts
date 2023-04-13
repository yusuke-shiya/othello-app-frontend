import type { OthelloCell, PlayerColor, OthelloState } from './types'

export const mutations = {
  setBoard(state: OthelloState, payload: OthelloCell[][]) {
    state.board = payload
  },
  setCurrentPlayer(state: OthelloState, payload: PlayerColor) {
    state.currentPlayer = payload
  },
  setScore(state: OthelloState, payload: { color: PlayerColor; score: number }) {
    state.score[payload.color] = payload.score
  },
  setIsGameOver(state: OthelloState, payload: boolean) {
    state.isGameOver = payload
  },
  initializeBoard(state: OthelloState) {
    state.board = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null))
    state.board[3][3] = 'white'
    state.board[4][4] = 'white'
    state.board[3][4] = 'black'
    state.board[4][3] = 'black'
  }
}
