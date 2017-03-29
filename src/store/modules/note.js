import * as types from '../mutation-types'

const state = {
  notes: [],
  activeNote: {}
}

const actions = {
  [types.ADD_NOTE] ({ commit }) {
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
  }
}

const mutations = {
  [types.ADD_NOTE] (state) {
    const newNote = {
      text: 'New note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  [types.EDIT_NOTE] (state, text) {
    state.activeNote.text = text
  },
  [types.DELETE_NOTE] (state) {
    state.notes.$remove(state.activeNote)
  },
  [types.TOGGLE_FAVORITE] (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },
  [types.SET_ACTIVE_NOTE] (state, note) {
    state.activeNote = note
  }
}

export default {
  state,
  actions,
  mutations,
  namespace: false
}
