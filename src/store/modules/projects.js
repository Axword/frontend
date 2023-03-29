// src/store/modules/projects.js
import axios from 'axios';

export default {
  namespaced: true,
  state: {
    projects: [],
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
    addProject(state, project) {
      state.projects.push(project);
    },
  },
  actions: {
    async fetchProjects({ commit }) {
      const response = await axios.get('projects/');
      commit('setProjects', response.data);
    },
    async createProject({ commit }, projectData) {
      const response = await axios.post('projects/', projectData);
      commit('addProject', response.data);
    },
  },
};
