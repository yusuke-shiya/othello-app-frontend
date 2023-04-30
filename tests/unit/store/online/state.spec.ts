import { describe, test, expect } from 'vitest'
import { initialState } from '@/store/online/state'

describe('OnlineStateの初期状態', () => {
  test('battleStatusはwaitingである', () => {
    expect(initialState.battleStatus).toBe('waiting')
  })
})
