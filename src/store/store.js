// src/store/index.js
import Vuex from 'vuex';
import projects from './modules/projects';

export default new Vuex.Store({
  modules: {
    projects,
  },
});
