import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import BackButton from '@/components/BackButton.vue'

describe('BackButton.vue', () => {
  it('ボタンが描画されることを確認する', () => {
    const wrapper = shallowMount(BackButton)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it("ボタンがクリックされたときに、'back' イベントが発行されることを確認する", async () => {
    const wrapper = shallowMount(BackButton)
    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.emitted().back).toBeTruthy()
  })
})
