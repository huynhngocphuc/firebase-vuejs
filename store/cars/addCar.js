export const state = () => ({
  isOpenModalAdd: false,
});

export const getters = {
  isOpenModalAdd: (state) => state.isOpenModalAdd,
};

export const mutations = {
  TOGGLE_MODAL_ADD(state) {
    state.isOpenModalAdd = !state.isOpenModalAdd;
  },
};

export const actions = {
  toggleModalAdd({ commit }) {
    commit("TOGGLE_MODAL_ADD");
  },
};
