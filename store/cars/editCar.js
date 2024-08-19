export const state = () => ({
  selectedCar: null,
  isOpenModalEdit: false,
});

export const getters = {
  selectedCar: (state) => state.selectedCar,
  isOpenModalEdit: (state) => state.isOpenModalEdit,
};

export const mutations = {
  SET_SELECTED_CAR(state, car) {
    state.selectedCar = car;
  },
  TOGGLE_MODAL_EDIT(state) {
    state.isOpenModalEdit =!state.isOpenModalEdit;
  },
};

export const actions = {
  async setSelectedCar({ commit, rootState }, idCar) {
    const { cars } = rootState.cars;
    const carSelected =cars.find((car) => car.id === idCar);
    commit("SET_SELECTED_CAR", carSelected);
  },
  toggleModalEdit({ commit }) {
    commit("TOGGLE_MODAL_EDIT");
  },
};
