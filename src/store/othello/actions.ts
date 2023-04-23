import type { ActionTree } from 'vuex'
import type { OthelloState } from './types'
import type { RootState } from '../index'
import { isValidMove, flipStones, countStones, hasValidMoves } from './utility'

export const actions: ActionTree<OthelloState, RootState> = {
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
    } else if (hasValidMoves(updatedBoard, state.currentPlayer)) {
      // 次のプレイヤーが置けるマスがない場合、現在のプレイヤーが置けるマスがあるか確認
      // 置けるマスがある場合、プレイヤーは交代せずに続行
    } else {
      // どちらのプレイヤーも置けるマスがない場合、ゲームを終了
      commit('setIsGameOver', true)
    }

    // スコアを更新する
    const score = countStones(state)
    commit('setScore', score)
  }
}
