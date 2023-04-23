import type { ActionTree } from 'vuex'
import type { OthelloState } from './types'
import type { RootState } from '../index'
import { isValidMove, flipStones, countScore } from './utility'

export const actions: ActionTree<OthelloState, RootState> = {
  putStone({ state, commit }, { row, column }) {
    // 石を置くことができるかどうかをチェック
    if (!isValidMove(state.board, row, column, state.currentPlayer)) return

    // 石をひっくり返す
    const updatedBoard = flipStones(state.board, row, column, state.currentPlayer)

    // 新しいボードをセット
    commit('setBoard', updatedBoard)

    // 次のプレイヤーにターンを変更する
    const nextPlayer = state.currentPlayer === 'black' ? 'white' : 'black'
    commit('setCurrentPlayer', nextPlayer)

    // スコアを更新する
    const score = countScore(state)
    commit('setScore', score)
  }
}
