import type { StoneColor, OthelloState } from './types'

export const mutations = {
  setBoard(state: OthelloState, payload: (StoneColor | null)[][]) {
    state.board = payload
  },
  setCurrentPlayer(state: OthelloState, payload: StoneColor) {
    state.currentPlayer = payload
  },
  setBlackScore(state: OthelloState, payload: number) {
    state.blackScore = payload
  },
  setWhiteScore(state: OthelloState, payload: number) {
    state.whiteScore = payload
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
