import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import postModule from "./posts";
import auth from "@/helpers/auth";
import { token_key } from '../env_files/var';
axios.defaults.baseURL = 'http://thisjesusmartinez.com/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    challenges: null,
    currentToken: auth.getToken(),
    currentUser: auth.getUser()
  },
  mutations: {
    SET_CHALLENGES (state, challenges) {
      state.challenges = challenges;
    },
    CLEAR_CHALLENGES (state) {
      state.challenges = null;
    }
  },
  actions: {
    async getChallenges(context) {
      try {
        context.commit('CLEAR_CHALLENGES');
        let response = await axios.get('/challenges');
        context.commit('SET_CHALLENGES', response.data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  modules: {
    postModule
  },
});
