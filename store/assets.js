export const state = () => ({
  assets: []
})

export const getters = {
  uploadedAssets(state) {
    return state.assets
  }
}

export const mutations = {
  setAssets(state, assets) {
    state.assets = [...assets]
  },
  addAsset(state, asset) {
    state.assets.push(asset)
  }
}

export const actions = {
  async GET_ASSETS({ commit }) {
    await this.$axios.get(process.env.API_URL + 'assets').then(res => {
      if (res.status === 200) {
        commit('setAssets', res.data)
      }
    })
  },
  async ADD_ASSET({ commit, dispatch }, payload) {
    await this.$axios
      .post(process.env.API_URL + 'assets', payload)
      .then(res => {
        if (res.status_code === 200) {
          commit('addAsset', payload)
        }
      })
    await dispatch('GET_ASSETS')
  },
  async DELETE_ASSET({ dispatch }, uuid) {
    await this.$axios
      .delete(process.env.API_URL + `assets/${uuid}`)
      .then(res => {
        if (res.status === 200) {
          dispatch('GET_ASSETS')
        }
      })
  }
}
