import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import OnlineStatusMessage from '@/components/OnlineStatusMessage.vue'
import type { OnlineState } from '@/store/online/types'

describe('OnlineStatusMessage.vue', () => {
  const createWrapper = (battleStatus: OnlineState['battleStatus']) => {
    return mount(OnlineStatusMessage, {
      global: {
        mocks: {
          $store: {
            getters: {
              'online/getBattleStatus': battleStatus
            }
          }
        }
      }
    })
  }

  test('battleStatusが"waiting"だったら待機中メッセージが表示される', () => {
    const wrapper = createWrapper('waiting')
    expect(wrapper.find('.waiting').exists()).toBe(true)
  })

  test('battleStatusが"starting"だったら対戦開始メッセージが表示される', () => {
    const wrapper = createWrapper('starting')
    expect(wrapper.find('.starting').exists()).toBe(true)
  })

  test('battleStatusが"playing"か"finished"だったらレンダリングされない', () => {
    // battleStatusが"playing"の場合
    let wrapper = createWrapper('playing')
    expect(wrapper.find('.messageBox').exists()).toBe(false)
    // battleStatusが"finished"の場合
    wrapper = createWrapper('finished')
    expect(wrapper.find('.messageBox').exists()).toBe(false)
  })
})
