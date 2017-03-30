import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const state = {
  notes: [],
  activeNote: {},
  filterType: 'all'
}

const getters = {
  getNotes: state => {
    if (state.filterType === 'all') {
      return state.notes
    }
    return state.notes.filter((note) => {
      return note.favorite
    })
  },
  getActiveNote: state => {
    return state.activeNote.text
  },
  getFilterType: state => {
    return state.filterType
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
  },
  changeFilterType ({ commit }, type) {
    commit(types.CHANGE_FILTER_TYPE, type)
  }
}

const createNew = () => {
  return {
    text: 'New note',
    favorite: false
  }
}

const mutations = {
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
  },
  [types.CHANGE_FILTER_TYPE] (state, type) {
    state.filterType = type
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug
})
