import { describe, test, expect } from 'vitest'
import type { RootState } from '@/store'
import { getters } from '@/store/othello/getters'
import { initialState } from '@/store/othello/state'
import type { OthelloState } from '@/store/othello/types'

const mockState: OthelloState = { ...initialState }
const mockRootState: RootState = { othello: mockState }

describe('OthelloGetters', () => {
  test('getBoardが盤面を正しく取得できる', () => {
    const result = getters.getBoard(mockState, getters, mockRootState, null)
    expect(result).toEqual(mockState.board)
  })

  test('getCurrentPlayerが現在のプレイヤーを正しく取得できる', () => {
    const result = getters.getCurrentPlayer(mockState, getters, mockRootState, null)
    expect(result).toEqual(mockState.currentPlayer)
  })

  test('getScoreがスコアを正しく取得できる', () => {
    const result = getters.getScore(mockState, getters, mockRootState, null)
    expect(result).toEqual(mockState.score)
  })

  test('getIsGameOverがゲームオーバー状態を正しく取得できる', () => {
    const result = getters.getIsGameOver(mockState, getters, mockRootState, null)
    expect(result).toEqual(mockState.isGameOver)
  })
})
