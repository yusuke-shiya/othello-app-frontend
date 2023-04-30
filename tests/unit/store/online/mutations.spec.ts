import { describe, test, expect, beforeEach } from 'vitest'
import { mutations } from '@/store/online/mutations'
import type { OnlineState } from '@/store/online/types'
import { initialState } from '@/store/online/state'

let state: OnlineState

beforeEach(() => {
  state = JSON.parse(JSON.stringify(initialState))
})

describe('OthelloMutations', () => {
  test('setBattleStatusがbattleStatusを正しく設定できる', () => {
    const newBattleStatus = 'playing'
    mutations.setBattleStatus(state, newBattleStatus)
    expect(state.battleStatus).toBe(newBattleStatus)
  })
})
