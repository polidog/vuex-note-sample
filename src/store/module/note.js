const ADD_NOTE = 'add_note'
const EDIT_NOTE = 'edit_note'
const TOGGLE_FAVORITE = 'toggle_favorite'
const SET_ACTIVE_NOTE = 'set_active_note'
const DELETE_NOTE = 'delete_note'
const CHANGE_FILTER_TYPE = 'change_filter_type'

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
    commit(ADD_NOTE)
  },
  editNote ({ commit }, e) {
    commit(EDIT_NOTE, e.target.value)
  },
  updateActiveNote ({ commit }, note) {
    commit(SET_ACTIVE_NOTE, note)
  },
  toggleFavorite ({ commit }) {
    commit(TOGGLE_FAVORITE)
  },
  deleteNote ({ commit }) {
    commit(DELETE_NOTE)
  },
  changeFilterType ({ commit }, type) {
    commit(CHANGE_FILTER_TYPE, type)
  }
}

const createNew = () => {
  return {
    text: 'New note',
    favorite: false
  }
}

const mutations = {
  [ADD_NOTE] (state) {
    const newNote = createNew()
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  [EDIT_NOTE] (state, text) {
    state.activeNote.text = text
  },
  [DELETE_NOTE] (state) {
    let index = state.notes.indexOf(state.activeNote)
    state.notes.splice(index, 1)
    if (state.notes.length < 1) {
      state.notes.push(createNew())
    }
    state.activeNote = state.notes[0]
  },
  [TOGGLE_FAVORITE] (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },
  [SET_ACTIVE_NOTE] (state, note) {
    state.activeNote = note
  },
  [CHANGE_FILTER_TYPE] (state, type) {
    state.filterType = type
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  namespace: true
}
