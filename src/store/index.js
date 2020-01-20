import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    userRegistration(state, payload) {
      state.user = payload;
    },
  },

  actions: {
    async SignUpAction({commit}, payload) {
      const {data} = await axios.post(
        'https://devsrc.worldclub-tennis.com/api/profile/register',
        payload,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      this.$toasted.show('Register SuccessFully', {
        theme: 'toasted-primary',
        position: 'top-right',
        duration: 5000,
      });
      commit('userRegistration', payload);
    },
  },

  getters: {
    userState(state) {
      return state.user;
    },
  },
});
