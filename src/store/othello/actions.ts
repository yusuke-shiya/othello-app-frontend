import type { ActionTree } from 'vuex'
import type { OthelloState, PlayerColor } from './types'
import type { RootState } from '../index'
import { isValidMove, flipStones, countStones, hasValidMoves } from './utility'
import { BOARD_SIZE } from '@/constants'

const initStones: [number, number, PlayerColor][] = [
  [3, 3, 'white'],
  [4, 4, 'white'],
  [3, 4, 'black'],
  [4, 3, 'black']
]
export const actions: ActionTree<OthelloState, RootState> = {
  initialize({ commit }) {
    const emptyBoard = Array(BOARD_SIZE)
      .fill(null)
      .map(() => Array(BOARD_SIZE).fill('empty'))
    const initialBoard = emptyBoard.map((row, rowIndex) => {
      return row.map((cell, columnIndex) => {
        return (
          initStones.find(([row, column]) => rowIndex === row && columnIndex === column)?.[2] ||
          cell
        )
      })
    })
    commit('setBoard', initialBoard)
    const initialScore = {
      black: 2,
      white: 2
    }
    commit('setScore', initialScore)
    commit('setCurrentPlayer', 'black')
  },
  putStone({ state, commit }, { row, column }) {
    // 石を置くことができるかどうかをチェック
    if (!isValidMove(state.board, row, column, state.currentPlayer)) return

    // 石をひっくり返す
    const updatedBoard = flipStones(state.board, row, column, state.currentPlayer)

    // 新しいボードをセット
    commit('setBoard', updatedBoard)

    // 次のプレイヤーが置けるマスがあるか確認
    const nextPlayer = state.currentPlayer === 'black' ? 'white' : 'black'
    if (hasValidMoves(updatedBoard, nextPlayer)) {
      commit('setCurrentPlayer', nextPlayer)
    } else if (!hasValidMoves(updatedBoard, state.currentPlayer)) {
      // 次のプレイヤーが置けるマスがない場合、現在のプレイヤーが置けるマスがあるか確認
      // 置けるマスがある場合、プレイヤーは交代せずに続行
      // どちらのプレイヤーも置けるマスがない場合、ゲームを終了
      commit('setIsGameOver', true)
    }

    // スコアを更新する
    const score = countStones(state)
    commit('setScore', score)
  }
}
