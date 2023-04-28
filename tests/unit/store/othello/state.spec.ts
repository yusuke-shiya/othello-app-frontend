import { describe, test, expect } from 'vitest'
import { initialState } from '@/store/othello/state'
import { BOARD_SIZE } from '@/constants'

describe('OthelloStateの初期状態', () => {
  test('盤面のサイズが正しい', () => {
    expect(initialState.board.length).toBe(BOARD_SIZE)
    initialState.board.forEach((row) => {
      expect(row.length).toBe(BOARD_SIZE)
    })
  })

  test('盤面の初期値は全てempty', () => {
    expect(initialState.board.flat().find((cell) => cell !== 'empty')).toBe(undefined)
  })

  test('対戦開始時のプレイヤーは黒', () => {
    expect(initialState.currentPlayer).toBe('black')
  })

  test('全プレイヤーのスコアの初期値は0', () => {
    expect(initialState.score).toEqual({
      black: 0,
      white: 0
    })
  })

  test('ゲームオーバーの初期値はfalse', () => {
    expect(initialState.isGameOver).toBe(false)
  })
})
