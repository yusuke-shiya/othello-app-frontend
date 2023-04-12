import { createStore } from 'vuex'
import { othelloModule } from './othello'

export default createStore({
  modules: {
    othello: othelloModule
  }
})
