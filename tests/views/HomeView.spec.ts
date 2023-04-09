import { mount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import HomeView from '@/views/HomeView.vue'
import AppHeader from '@/components/AppHeader.vue'
import HomeNavigation from '@/components/HomeNavigation.vue'

describe('HomeView.vue', () => {
  it('renders AppHeader component', async () => {
    const wrapper = mount(HomeView)
    const appHeader = wrapper.getComponent(AppHeader)
    expect(appHeader).toBeDefined()
  })

  it('renders HomeNavigation component', async () => {
    const wrapper = mount(HomeView)
    const homeNavigation = wrapper.getComponent(HomeNavigation)
    expect(homeNavigation).toBeDefined()
  })
})
