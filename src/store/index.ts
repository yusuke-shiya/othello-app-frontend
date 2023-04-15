import { createStore, Store } from 'vuex'
import { othelloModule } from './othello'
import type { OthelloState } from './othello/types'

export interface RootState {
  othello: OthelloState
}

export const store = createStore<RootState>({
  modules: {
    othello: othelloModule
  }
})

export function useStore(): Store<RootState> {
  return store
}
