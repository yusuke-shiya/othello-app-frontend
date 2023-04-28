import { describe, test, expect, beforeEach } from 'vitest'
import { actions } from '@/store/othello/actions'
import { mutations } from '@/store/othello/mutations'
import type { OthelloState } from '@/store/othello/types'
import { initialState } from '@/store/othello/state'
import { createStore } from 'vuex'
import type { RootState } from '@/store'

const setupTestStore = (state: OthelloState) => {
  return createStore<RootState>({
    modules: {
      othello: {
        namespaced: true,
        state: state,
        mutations: mutations,
        actions: actions
      }
    }
  })
}

describe('OthelloActions', () => {
  let state: OthelloState

  beforeEach(() => {
    state = JSON.parse(JSON.stringify(initialState))
  })

  test('initializeがゲーム状態を正しく初期化できる', async () => {
    const store = setupTestStore(state)
    await store.dispatch('othello/initialize')

    const expectedBoard = JSON.parse(JSON.stringify(initialState.board))
    expectedBoard[3][3] = 'white'
    expectedBoard[4][4] = 'white'
    expectedBoard[3][4] = 'black'
    expectedBoard[4][3] = 'black'

    expect(store.state.othello.board).toEqual(expectedBoard)
    expect(store.state.othello.score).toEqual({ black: 2, white: 2 })
    expect(store.state.othello.currentPlayer).toEqual('black')
  })

  test('putStoneで石を正しくひっくり返せる', async () => {
    const store = setupTestStore(state)
    await store.dispatch('othello/initialize')
    await store.dispatch('othello/putStone', { row: 2, column: 3 })

    const expectedBoard = JSON.parse(JSON.stringify(initialState.board))
    expectedBoard[4][4] = 'white'
    expectedBoard[3][4] = 'black'
    expectedBoard[2][3] = 'black'
    expectedBoard[3][3] = 'black'
    expectedBoard[4][3] = 'black'

    expect(store.state.othello.board).toEqual(expectedBoard)
    expect(store.state.othello.score).toEqual({ black: 4, white: 1 })
    expect(store.state.othello.currentPlayer).toEqual('white')
  })

  test('putStoneでひっくり返せない場所には石を置けない', async () => {
    const store = setupTestStore(state)
    await store.dispatch('othello/initialize')

    const invalidRow = 0
    const invalidColumn = 0
    await store.dispatch('othello/putStone', { row: invalidRow, column: invalidColumn })

    const expectedBoard = JSON.parse(JSON.stringify(initialState.board))
    expectedBoard[3][3] = 'white'
    expectedBoard[4][4] = 'white'
    expectedBoard[3][4] = 'black'
    expectedBoard[4][3] = 'black'

    expect(store.state.othello.board).toEqual(expectedBoard)
    expect(store.state.othello.score).toEqual({ black: 2, white: 2 })
    expect(store.state.othello.currentPlayer).toEqual('black')
  })
})
