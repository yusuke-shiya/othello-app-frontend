import type { OnlineState } from './types'

export const mutations = {
  setBattleStatus(state: OnlineState, battleStatus: OnlineState['battleStatus']) {
    state.battleStatus = battleStatus
  },
  setMyColor(state: OnlineState, myColor: OnlineState['myColor']) {
    state.myColor = myColor
  }
}
