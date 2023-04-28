import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import TurnIndicator from '@/components/TurnIndicator.vue'

describe('TurnIndicator.vue', () => {
  it('現在のプレイヤーが黒の場合、●に下線が表示されることを確認する', () => {
    const wrapper = shallowMount(TurnIndicator, {
      global: {
        mocks: {
          $store: {
            getters: {
              'othello/getCurrentPlayer': 'black'
            }
          }
        }
      }
    })

    expect(wrapper.find('.current-player').text()).toBe('●')
  })

  it('現在のプレイヤーが白の場合、○に下線が表示されることを確認する', () => {
    const wrapper = shallowMount(TurnIndicator, {
      global: {
        mocks: {
          $store: {
            getters: {
              'othello/getCurrentPlayer': 'white'
            }
          }
        }
      }
    })

    expect(wrapper.find('.current-player').text()).toBe('○')
  })
})
