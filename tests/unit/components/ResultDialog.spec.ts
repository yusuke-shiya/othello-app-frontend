import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ResultDialog from '@/components/ResultDialog.vue'

describe('ResultDialog.vue', () => {
  it('ゲームが終了していない場合、ResultDialog が表示されないことを確認する', () => {
    const wrapper = shallowMount(ResultDialog, {
      global: {
        mocks: {
          $store: {
            getters: {
              'othello/getIsGameOver': false
            }
          }
        }
      }
    })

    expect(wrapper.isVisible()).toBe(false)
  })

  it('ゲームが終了し、引き分けの場合、メッセージが "Draw!" であることを確認する', () => {
    const wrapper = shallowMount(ResultDialog, {
      global: {
        mocks: {
          $store: {
            getters: {
              'othello/getIsGameOver': true,
              'othello/getScore': {
                black: 32,
                white: 32
              }
            }
          }
        }
      }
    })

    expect(wrapper.find('.message').text()).toBe('Draw!')
  })

  it('ゲームが終了し、黒が勝った場合、メッセージが "Black wins!" であることを確認する', () => {
    const wrapper = shallowMount(ResultDialog, {
      global: {
        mocks: {
          $store: {
            getters: {
              'othello/getIsGameOver': true,
              'othello/getScore': {
                black: 40,
                white: 24
              }
            }
          }
        }
      }
    })

    expect(wrapper.find('.message').text()).toBe('Black wins!')
  })

  it('ゲームが終了し、白が勝った場合、メッセージが "White wins!" であることを確認する', () => {
    const wrapper = shallowMount(ResultDialog, {
      global: {
        mocks: {
          $store: {
            getters: {
              'othello/getIsGameOver': true,
              'othello/getScore': {
                black: 24,
                white: 40
              }
            }
          }
        }
      }
    })

    expect(wrapper.find('.message').text()).toBe('White wins!')
  })
})
