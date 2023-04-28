import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'
import BackButton from '@/components/BackButton.vue'

describe('AppHeader.vue', () => {
  it('showBackButtonがtrueならBackButtonが表示される', () => {
    const wrapper = shallowMount(AppHeader, {
      propsData: {
        showBackButton: true
      }
    })

    expect(wrapper.findComponent(BackButton).exists()).toBe(true)
  })

  it('showBackButtonがtrueならBackButtonは表示されない', () => {
    const wrapper = shallowMount(AppHeader, {
      propsData: {
        showBackButton: false
      }
    })

    expect(wrapper.findComponent(BackButton).exists()).toBe(false)
  })

  it('BackButtonがクリックされたら$routerのbackメソッドが呼び出される', async () => {
    const mockRouterBack = vi.fn()
    const wrapper = shallowMount(AppHeader, {
      propsData: {
        showBackButton: true
      },
      global: {
        mocks: {
          $router: {
            back: mockRouterBack
          }
        }
      }
    })

    await wrapper.findComponent(BackButton).vm.$emit('back')
    expect(mockRouterBack).toHaveBeenCalled()
  })
})
