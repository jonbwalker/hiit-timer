import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalTime: 0
  },
  mutations: {
    incrementTotalTime(state) {
      state.totalTime += 1;
    },
    decrementTotalTime(state, value) {
      state.totalTime -= 1;
    }

  },
  actions: {

  }
});
