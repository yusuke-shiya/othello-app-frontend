import type { GetterTree } from 'vuex'
import type { OnlineState } from './types'

export const getters: GetterTree<OnlineState, {}> = {
  getBattleStatus(state: OnlineState) {
    return state.battleStatus
  }
}
