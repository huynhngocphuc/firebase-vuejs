export const state = () => ({
  isLoading: false,
});

export const getters = {
    isLoading: (state) => state.isLoading,
};

export const mutations = {
  SET_LOADING(state, status) {
    state.isLoading = status;
  },
};

export const actions = {
  startLoading({ commit }) {
    console.log("🚀 ~ startLoading ~ startLoading:")
    
    commit("SET_LOADING", true);
  },
  stopLoading({ commit }) {
    console.log("🚀 ~ stopLoading ~ stopLoading:")
    commit("SET_LOADING", false);
  },
};
