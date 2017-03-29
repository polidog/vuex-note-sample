import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const state = {
  notes: [],
  activeNote: {}
}

const getters = {
  getAllNote: state => {
    return state.notes
  },
  getActiveNote: state => {
    return state.activeNote.text
  }
}

const actions = {
  addNote ({ commit }) {
    commit(types.ADD_NOTE)
  },
  editNote ({ commit }, e) {
    commit(types.EDIT_NOTE, e.target.value)
  },
  updateActiveNote ({ commit }, note) {
    commit(types.SET_ACTIVE_NOTE, note)
  },
  toggleFavorite ({ commit }) {
    commit(types.TOGGLE_FAVORITE)
  },
  deleteNote ({ commit }) {
    commit(types.DELETE_NOTE)
  }
}

const createNew = () => {
  return {
    text: 'New note',
    favorite: false
  }
}

export const mutations = {
  [types.ADD_NOTE] (state) {
    const newNote = createNew()
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  [types.EDIT_NOTE] (state, text) {
    state.activeNote.text = text
  },
  [types.DELETE_NOTE] (state) {
    let index = state.notes.indexOf(state.activeNote)
    state.notes.splice(index, 1)
    if (state.notes.length < 1) {
      state.notes.push(createNew())
    }
    state.activeNote = state.notes[0]
  },
  [types.TOGGLE_FAVORITE] (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },
  [types.SET_ACTIVE_NOTE] (state, note) {
    state.activeNote = note
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug
})
