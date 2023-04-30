import { createStore, Store } from 'vuex'
import { othelloModule } from './othello'
import { onlineModule } from './online'
import type { OthelloState } from './othello/types'
import type { OnlineState } from './online/types'

export interface RootState {
  othello: OthelloState
  online: OnlineState
}

export const store = createStore<RootState>({
  modules: {
    othello: othelloModule,
    online: onlineModule
  }
})

export function useStore(): Store<RootState> {
  return store
}
