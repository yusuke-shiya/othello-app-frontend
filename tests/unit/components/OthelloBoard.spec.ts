import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import OthelloBoard from '@/components/OthelloBoard.vue'
import OthelloCellComponent from '@/components/OthelloCellComponent.vue'
import { BOARD_SIZE } from '@/constants'

describe('OthelloBoard.vue', () => {
  const testBoard = Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill('empty'))

  it('OthelloBoardが正しくレンダリングされ、OthelloCellComponentの数が期待通りであることを確認する', () => {
    const wrapper = shallowMount(OthelloBoard, {
      global: {
        mocks: {
          $store: {
            getters: {
              'othello/getBoard': testBoard
            }
          }
        }
      }
    })

    const othelloCells = wrapper.findAllComponents(OthelloCellComponent)
    expect(othelloCells.length).toBe(BOARD_SIZE * BOARD_SIZE)
  })

  it('OthelloCellComponentがクリックされたときに、handleCellClickedメソッドが呼び出されることを確認する', async () => {
    const putStoneMock = vi.fn()
    const wrapper = shallowMount(OthelloBoard, {
      global: {
        mocks: {
          $store: {
            getters: {
              'othello/getBoard': testBoard
            },
            dispatch: putStoneMock
          }
        }
      }
    })

    const othelloCell = wrapper.findComponent(OthelloCellComponent)
    await othelloCell.vm.$emit('cellClicked', { row: 0, column: 0 })

    expect(putStoneMock).toHaveBeenCalledWith('othello/putStone', { row: 0, column: 0 })
  })
})
