export const state = () => ({
  drawer: null,
  loaded: false
})

export const mutations = {
  setDrawer: (state, payload) => {
    state.drawer = payload
  },
  toggleDrawer: (state) => {
    state.drawer = !state.drawer
  },
  setLoaded: (state, payload) => {
    state.loaded = payload
  }
}

export const actions = {
   updateActionValue({ commit }) {
    commit('updateValue', payload)
  }
}

export const getters = {
  getterDrawer: state => {
    return state.drawer
  },
  getterLoaded: state => {
    return state.loaded
  }
}
