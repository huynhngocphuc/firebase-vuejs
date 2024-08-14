export const state = () => ({
  listCar: [],
});

export const getters = {
    getListCar: (state) => state.listCar,
};

export const mutations = {
  setListCar(state, listNewCar) {
    state.listCar = listNewCar;
  },
};

export const actions = {};
