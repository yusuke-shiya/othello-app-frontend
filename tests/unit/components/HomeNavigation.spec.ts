import { mount, RouterLinkStub } from '@vue/test-utils'
import { expect, describe, it, beforeEach, vi } from 'vitest'
import HomeNavigation from '@/components/HomeNavigation.vue'
import BattleRoomsApi from '@/api/BattleRoomsApi'

vi.mock('@/api/BattleRoomsApi')

describe('HomeNavigation.vue', () => {
  let wrapper
  const mountOptions = {
    global: {
      stubs: {
        RouterLink: RouterLinkStub
      },
      mocks: {
        $router: {
          push: vi.fn()
        }
      }
    }
  }
  beforeEach(() => {
    wrapper = mount(HomeNavigation, mountOptions)
  })

  it('offline-battleページへのリンクが含まれているか', async () => {
    expect(
      wrapper
        .findAllComponents(RouterLinkStub)
        .find((link) => link.props().to === '/offline-battle')
    ).toBeTruthy()
  })

  it('「オンラインでプレイ」ボタンが押されたら、startOnlineBattleメソッドが呼び出されオンライン対戦ページへのURLを取得できる', async () => {
    const startOnlineBattleSpy = vi.spyOn(wrapper.vm, 'startOnlineBattle')
    BattleRoomsApi.create.mockResolvedValue({ data: { id: 1 } })

    const onlineBattleButton = wrapper.find('button.nav-link')
    await onlineBattleButton.trigger('click')

    expect(startOnlineBattleSpy).toHaveBeenCalled()
    expect(BattleRoomsApi.create).toHaveBeenCalled()
    expect(wrapper.vm.$router.push).toBeCalledWith('/online-battle/1')
  })
})
