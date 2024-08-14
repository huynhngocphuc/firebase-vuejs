export const state = () => ({
  user: null,
  token: null,
  error: "",
  isAuthenticated: true,
  loading: false,
});
export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setToken(state, token) {
    state.token = token;
  },
  setError(state, error) {
    state.error = error;
  },
  setIsAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
};

export const actions = {
  login({ commit }, payload) {
    commit("setIsAuthenticated", true);
  },
  logout({ commit }) {
    commit("setUser", null);
    commit("setToken", null);
    commit("setIsAuthenticated", false);
    commit("setError", "");
    commit("setLoading", false);
  }
};

export const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
  user: (state) => state.user,
};
