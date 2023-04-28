import { describe, test, expect, beforeEach } from 'vitest'
import { mutations } from '@/store/othello/mutations'
import type { OthelloState, PlayerColor } from '@/store/othello/types'
import { initialState } from '@/store/othello/state'

let state: OthelloState

beforeEach(() => {
  state = JSON.parse(JSON.stringify(initialState))
})

describe('OthelloMutations', () => {
  test('setBoardが盤面を正しく設定できる', () => {
    const newBoard = JSON.parse(JSON.stringify(initialState.board))
    newBoard[0][0] = 'black'
    mutations.setBoard(state, newBoard)
    expect(state.board).toEqual(newBoard)
  })

  test('setCurrentPlayerが現在のプレイヤーを正しく設定できる', () => {
    const newCurrentPlayer: PlayerColor = 'white'
    mutations.setCurrentPlayer(state, newCurrentPlayer)
    expect(state.currentPlayer).toEqual(newCurrentPlayer)
  })

  test('setScoreがスコアを正しく設定できる', () => {
    const newScore = { black: 2, white: 2 }
    mutations.setScore(state, newScore)
    expect(state.score).toEqual(newScore)
  })

  test('setIsGameOverがゲームオーバー状態を正しく設定できる', () => {
    const newIsGameOver = true
    mutations.setIsGameOver(state, newIsGameOver)
    expect(state.isGameOver).toEqual(newIsGameOver)
  })
})
