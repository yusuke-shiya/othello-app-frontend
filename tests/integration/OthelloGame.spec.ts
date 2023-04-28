import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import type { RootState } from '@/store'
import { othelloModule } from '@/store/othello'
import OfflineBattleView from '@/views/OfflineBattleView.vue'
import OthelloCellComponent from '@/components/OthelloCellComponent.vue'
import ResultDialog from '@/components/ResultDialog.vue'

let store: ReturnType<typeof createStore>

beforeEach(() => {
  store = createStore<RootState>({
    modules: {
      othello: othelloModule
    }
  })
})

describe('統合テスト', () => {
  it('ゲームが開始されると、オセロ盤が初期配置で表示される', () => {
    mount(OfflineBattleView, { global: { plugins: [store] } })

    const initialBoard = [
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'white', 'black', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'black', 'white', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ]

    expect(store.getters['othello/getBoard']).toEqual(initialBoard)
  })

  it('プレイヤーが石を置くと、正しい色の石が表示され、反転する石が適切に反転する', async () => {
    const wrapper = mount(OfflineBattleView, { global: { plugins: [store] } })
    const othelloCells = wrapper.findAllComponents(OthelloCellComponent)
    // (2, 3)に黒の石を置く
    const blackMoveCell = othelloCells.filter(
      (cell) => cell.vm.$props.row === 2 && cell.vm.$props.column === 3
    )
    await blackMoveCell[0].trigger('click')

    // オセロ盤の状態を確認
    const expectedBoardAfterBlackMove = [
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'black', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'black', 'black', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'black', 'white', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ]

    expect(store.getters['othello/getBoard']).toEqual(expectedBoardAfterBlackMove)

    // (4, 2)に白の石を置く
    const whiteMoveCell = othelloCells.filter(
      (cell) => cell.vm.$props.row === 4 && cell.vm.$props.column === 2
    )
    await whiteMoveCell[0].trigger('click')

    // オセロ盤の状態を確認
    const expectedBoardAfterWhiteMove = [
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'black', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'black', 'black', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'white', 'white', 'white', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ]

    expect(store.getters['othello/getBoard']).toEqual(expectedBoardAfterWhiteMove)
  })
  it('石を置くことができないセルをクリックしても、何も起こらない', async () => {
    const wrapper = mount(OfflineBattleView, { global: { plugins: [store] } })
    const othelloCells = wrapper.findAllComponents(OthelloCellComponent)

    // (0, 0)に黒の石を置こうとする
    const targetCell = othelloCells.filter(
      (cell) => cell.vm.$props.row === 0 && cell.vm.$props.column === 0
    )
    await targetCell[0].trigger('click')

    // オセロ盤が初期状態のままであることを確認
    const initialBoard = [
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'white', 'black', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'black', 'white', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ]

    expect(store.getters['othello/getBoard']).toEqual(initialBoard)
  })

  it('ゲームが終了した場合、リザルトダイアログが表示され、勝者または引き分けが正しく表示される', async () => {
    const wrapper = mount(OfflineBattleView, { global: { plugins: [store] } })

    // ゲームが終了する直前の状態の盤面を作成（例: 黒が勝利）
    const almostFinishedBoard = [
      ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      ['black', 'black', 'black', 'black', 'black', 'white', 'black', 'black'],
      ['black', 'black', 'black', 'white', 'empty', 'empty', 'white', 'white']
    ]

    // 終了直前の状態の盤面をストアに設定
    store.commit('othello/setBoard', almostFinishedBoard)

    // (7, 4)に黒の石を置く
    store.dispatch('othello/putStone', { row: 7, column: 4 })
    // オセロ盤の状態を確認
    const expectedBoardAfterBlackMove = [
      ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      ['black', 'black', 'black', 'black', 'black', 'empty', 'white', 'white']
    ]
    expect(store.getters['othello/getBoard']).toEqual(expectedBoardAfterBlackMove)
    // パスが発生し、プレイヤーが黒のままであることを確認
    expect(store.getters['othello/getCurrentPlayer']).toBe('black')

    // 最後の一手を打つ
    store.dispatch('othello/putStone', { row: 7, column: 5 })

    // リザルトダイアログが表示されていることを確認
    await wrapper.vm.$nextTick()
    const resultDialog = wrapper.findComponent(ResultDialog)
    expect(resultDialog.isVisible()).toBe(true)

    // 勝者が正しく表示されていることを確認
    const winnerText = resultDialog.find('.message')
    expect(winnerText.text()).toBe('Black wins!')
  })
})
