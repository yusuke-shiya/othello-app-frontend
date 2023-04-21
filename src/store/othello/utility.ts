import type { OthelloCell, OthelloBoard, PlayerColor, OthelloState } from './types'
import { BOARD_SIZE } from '@/constants'

const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
]
const isInBounds = (row: number, column: number) =>
  row >= 0 && row < BOARD_SIZE && column >= 0 && column < BOARD_SIZE
const isOpponentCell = (cell: OthelloCell, currentPlayer: PlayerColor) =>
  cell !== currentPlayer && cell !== 'empty'

export function isValidMove(
  board: OthelloBoard,
  row: number,
  column: number,
  currentPlayer: PlayerColor
): boolean {
  if (board[row][column] !== 'empty') {
    return false
  }
  // 8方向に対して、ひっくり返せる石があるかどうかをチェック
  for (const [dx, dy] of directions) {
    let flipped = false
    let nextRow = row + dx
    let nextColumn = column + dy
    // 対戦相手の石が続く限り、ひっくり返せるかチェック
    while (
      isInBounds(nextRow, nextColumn) &&
      isOpponentCell(board[nextRow][nextColumn], currentPlayer)
    ) {
      nextRow += dx
      nextColumn += dy
      flipped = true
    }
    // ひっくり返せる方向が1つでもあれば、石を置くことができるのでtrueを返す
    if (
      flipped &&
      isInBounds(nextRow, nextColumn) &&
      board[nextRow][nextColumn] === currentPlayer
    ) {
      return true
    }
  }

  return false
}

export function flipStones(
  board: OthelloBoard,
  row: number,
  column: number,
  currentPlayer: PlayerColor
): OthelloBoard {
  const newBoard = JSON.parse(JSON.stringify(board))

  newBoard[row][column] = currentPlayer
  // 8方向に対して、ひっくり返せる石があればひっくり返す
  for (const [dx, dy] of directions) {
    let nextRow = row + dx
    let nextColumn = column + dy
    const flippedCells: [number, number][] = []
    // 対戦相手の石が続く限り、ひっくり返せる石を配列に追加
    while (
      isInBounds(nextRow, nextColumn) &&
      isOpponentCell(newBoard[nextRow][nextColumn], currentPlayer)
    ) {
      flippedCells.push([nextRow, nextColumn])
      nextRow += dx
      nextColumn += dy
    }
    // 自分の石で挟む形になっていれば、ひっくり返す
    if (isInBounds(nextRow, nextColumn) && newBoard[nextRow][nextColumn] === currentPlayer) {
      for (const [flipRow, flipColumn] of flippedCells) {
        newBoard[flipRow][flipColumn] = currentPlayer
      }
    }
  }

  return newBoard
}

export function getScore(state: OthelloState): OthelloState['score'] {
  const players = Object.keys(state.score) as PlayerColor[]
  const score = state.board
    .flat()
    .reduce((currentScore: OthelloState['score'], cell: OthelloCell) => {
      const player = players.find((player) => player === cell)
      if (player) {
        currentScore[player]++
      }
      return currentScore
    }, Object.fromEntries(players.map((player) => [player, 0])) as OthelloState['score'])
  return score
}
