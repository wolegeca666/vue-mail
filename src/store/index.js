import Vue from "vue";
import Vuex from 'vuex';

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./moudles/moduleA";

Vue.use(Vuex);

const state = {
  counter: 10,
  msg: {
    name: '666',
    height: 1.75
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
});

export default store