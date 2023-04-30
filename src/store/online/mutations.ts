import type { OnlineState } from './types'

export const mutations = {
  setBattleStatus(state: OnlineState, battleStatus: OnlineState['battleStatus']) {
    state.battleStatus = battleStatus
  }
}
