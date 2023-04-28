import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ScoreBoard from '@/components/ScoreBoard.vue'

describe('ScoreBoard.vue', () => {
  it('スコアボードに黒と白のスコアが正しく表示されていることを確認する', () => {
    const wrapper = shallowMount(ScoreBoard, {
      global: {
        mocks: {
          $store: {
            getters: {
              'othello/getScore': {
                black: 28,
                white: 36
              }
            }
          }
        }
      }
    })

    const scoreSpans = wrapper.findAll('span')
    expect(scoreSpans[0].text()).toBe('● 28')
    expect(scoreSpans[1].text()).toBe('○ 36')
  })
})
