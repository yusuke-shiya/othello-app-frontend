import { describe, test, expect } from 'vitest'
import type { RootState } from '@/store'
import { getters } from '@/store/online/getters'
import { initialState } from '@/store/online/state'
import type { OnlineState } from '@/store/online/types'

const mockState: OnlineState = { ...initialState }
const mockRootState: RootState = { online: mockState }

describe('OnlineGetters', () => {
  test('getBattleStatusがbattleStatusを正しく取得できる', () => {
    const result = getters.getBattleStatus(mockState, null, mockRootState, null)
    expect(result).toEqual(mockState.battleStatus)
  })
})
