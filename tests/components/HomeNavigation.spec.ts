import { mount, RouterLinkStub } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import HomeNavigation from '@/components/HomeNavigation.vue'

describe('HomeNavigation.vue', () => {
  it('has a link to the offline battle view', async () => {
    const wrapper = mount(HomeNavigation, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/offline-battle')
  })
})
