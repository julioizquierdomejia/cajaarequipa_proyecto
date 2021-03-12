import axios from 'axios'
axios.defaults.baseURL = 'https://gohan-upjhfp6ytq-ue.a.run.app'
axios.defaults.headers.common = { Authorization: `Bearer ${localStorage.getItem('userToken')}` }

export default {
  state: {
    othersInsights: null,
    totalInsights: null
  },
  getters: {
    othersInsights: state => state.othersInsights,
    totalInsights: state => state.totalInsights
  },
  mutations: {
    setOthersInsights(state, data) {
      state.othersInsights = data
    },
    setTotalInsights(state, data) {
      state.totalInsights = data
    }
  },
  actions: {
    async fetchOthersInsights({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/insights/others')
          .then(res => {
            const data = res.data.result
            commit('setOthersInsights', data)
            resolve(res)
          })
          .catch(error => {
            const errorData = error.response
            reject(errorData)
          })
      })
    },
    async fetchTotalInsights({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/insights/total')
          .then(res => {
            const data = res.data.result
            commit('setTotalInsights', data)
            resolve(res)
          })
          .catch(error => {
            const errorData = error.response
            reject(errorData)
          })
      })
    }
  }
}
