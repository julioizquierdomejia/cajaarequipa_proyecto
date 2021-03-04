import axios from 'axios';
axios.defaults.baseURL = 'https://gohan-upjhfp6ytq-ue.a.run.app';

export default {
  state: {
    userToken: localStorage.getItem('userToken') != null ? localStorage.getItem('userToken') : null,
    loggedInUser: null,
    loading: false
  },
  getters: {
    loggedInUser: state => state.loggedInUser,
    loading: state => state.loading
  },
  mutations: {
    setUser(state, data) {
      state.loggedInUser = data;
      state.loading = false;
      state.error = null;
    },
    setLogout(state) {
      state.loggedInUser = null;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, data) {
      state.loading = data;
      state.error = null;
    }
  },
  actions: {
    async login({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('setLoading', true);

        axios
          .post('/api/login', data)
          .then(res => {
            const token = res.data.result.token;
            localStorage.setItem('userToken', token);
            resolve(res);
          })
          .catch(error => {
            const errorData = error.response;
            reject(errorData);
          })
          .finally(() => {
            commit('setLoading', false);
          });
      });
    },

    async signUserUp({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('setLoading', true);

        axios
          .post('/api/register', data)
          .then(res => {
            const newUser = res.data.result.user;
            commit('setUser', newUser);

            const token = res.data.result.token;
            localStorage.setItem('userToken', token);

            resolve(res);
          })
          .catch(error => {
            const errorData = error.response;
            reject(errorData);
          })
          .finally(() => {
            commit('setLoading', false);
          });
      });
    },
    signOut({ commit }) {
      commit('setLogout');
    }
  }
};
