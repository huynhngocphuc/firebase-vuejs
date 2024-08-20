export const state = () => ({
  user: null,
  token: null,
  error: "",
  isAuthenticated: false,
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
  async login({ commit, dispatch }, payload) {
    dispatch("loading/startLoading", {}, { root: true });
    commit("setUser", payload);
    commit("setIsAuthenticated", true);
    await dispatch("saveUserLocalStorage", payload);
    await dispatch("fetchInitData");
    dispatch("loading/stopLoading", {}, { root: true });
  },
  logout({ commit }) {
    commit("setUser", null);
    commit("setToken", null);
    commit("setIsAuthenticated", false);
    commit("setError", "");
    commit("setLoading", false);
    localStorage.clear();
  },
  saveUserLocalStorage({}, user) {
    localStorage.setItem("user", JSON.stringify(user));
  },
  getUserLocalStorage({ commit,dispatch }) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      commit("setUser", user);
      commit("setIsAuthenticated", true);
      dispatch("fetchInitData",user);
    }
  },
  async fetchInitData({ dispatch }, payload) {
    await dispatch("notify/fetchNotification", payload, { root: true });
    await dispatch("cars/fetchCars", payload, { root: true });
  },
};

export const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
  user: (state) => state.user,
};
