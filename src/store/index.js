import Vue from 'vue'
import Vuex from 'vuex'
import note from './module/note'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    note
  },
  strict: debug
})
