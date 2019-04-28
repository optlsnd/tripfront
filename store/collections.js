export const state = () => ({
  collections: []
})

export const getters = {
  collections(state) {
    return state.collections
  }
}

export const mutations = {
  setCollections(state, collections) {
    state.collections = [...collections]
  }
}

export const actions = {
  async GET_COLLECTIONS({ commit }) {
    await this.$axios.get(process.env.API_URL + 'collections').then(res => {
      if (res.status === 200) {
        commit('setCollections', res.data)
      }
    })
  },
  async ADD_COLLECTION({ commit, dispatch }, collection) {
    await this.$axios
      .post(process.env.API_URL + 'collections', collection)
      .then(res => {
        if (res.status === 200) {
          dispatch('GET_COLLECTIONS')
        }
      })
  }
}
