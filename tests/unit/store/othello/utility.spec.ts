import { describe, test, expect, beforeEach } from 'vitest'
import { isValidMove, hasValidMoves, flipStones, countStones } from '@/store/othello/utility'
import type { OthelloState, OthelloBoard } from '@/store/othello/types'

describe('OthelloUtility', () => {
  let initialBoard: OthelloBoard
  let state: OthelloState

  beforeEach(() => {
    initialBoard = Array(8)
      .fill(null)
      .map(() => Array(8).fill('empty'))
    initialBoard[3][3] = 'white'
    initialBoard[4][4] = 'white'
    initialBoard[3][4] = 'black'
    initialBoard[4][3] = 'black'

    state = {
      board: initialBoard,
      score: { black: 2, white: 2 },
      currentPlayer: 'black',
      isGameOver: false
    }
  })

  test('isValidMoveが石を置けるマスを判定できる', () => {
    expect(isValidMove(initialBoard, 2, 3, 'black')).toBe(true)
  })

  test('isValidMoveが石を置けないマスを判定できる', () => {
    expect(isValidMove(initialBoard, 0, 0, 'black')).toBe(false)
  })

  test('hasValidMovesが有効な手が存在することを判定できる', () => {
    expect(hasValidMoves(initialBoard, 'black')).toBe(true)
  })

  test('hasValidMovesが有効な手が存在しないことを判定できる', () => {
    const noMoveBoard = initialBoard.map((row) => row.fill('black'))
    expect(hasValidMoves(noMoveBoard, 'white')).toBe(false)
  })

  test('flipStonesが石を正しくひっくり返すことができる', () => {
    const expectedBoard = JSON.parse(JSON.stringify(initialBoard))
    expectedBoard[3][3] = 'black'
    expectedBoard[2][3] = 'black'

    expect(flipStones(initialBoard, 2, 3, 'black')).toEqual(expectedBoard)
  })

  test('flipStonesは石をひっくり返せないマスでは何も変更しない', () => {
    const originalBoard = JSON.parse(JSON.stringify(initialBoard))
    expect(flipStones(initialBoard, 0, 0, 'black')).toEqual(originalBoard)
  })

  test('countStonesが正しいスコアを返すことができる', () => {
    const customBoard = JSON.parse(JSON.stringify(initialBoard))
    customBoard[3][3] = 'black'
    customBoard[2][3] = 'black'

    const customState: OthelloState = {
      ...state,
      board: customBoard
    }

    expect(countStones(customState)).toEqual({ black: 4, white: 1 })
  })
})
