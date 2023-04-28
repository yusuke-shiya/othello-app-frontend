import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import OthelloCellComponent from '@/components/OthelloCellComponent.vue'

describe('OthelloCellComponent.vue', () => {
  it('OthelloCellComponentが正しくレンダリングされ、石が期待通り表示されることを確認する', () => {
    const wrapper = shallowMount(OthelloCellComponent, {
      propsData: {
        row: 0,
        column: 0,
        cellData: 'black'
      }
    })

    expect(wrapper.find('.stone').text()).toBe('●')
  })

  it('OthelloCellComponentがクリックされたときに、handleClickメソッドが呼び出され、適切なパラメータでcellClickedイベントが発火することを確認する', async () => {
    const wrapper = shallowMount(OthelloCellComponent, {
      propsData: {
        row: 0,
        column: 0,
        cellData: 'empty'
      }
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted().cellClicked).toBeTruthy()
    expect(wrapper.emitted().cellClicked[0]).toEqual([{ row: 0, column: 0 }])
  })
})
