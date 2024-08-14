import {LIST_CARS} from "../constant/dummy";

export const state = () => ({
  cars: [],
});

export const getters = {
  allCars: (state) => state.cars,
  
  carById: (state) => (id) => {
    return state.cars.find((car) => car.id === id)},
};

export const mutations = {
  SET_CARS(state, cars) {
    state.cars = cars;
  },
  ADD_CAR(state, car) {
    state.cars.push(car);
  },
  REMOVE_CAR(state, carId) {
    state.cars = state.cars.filter((car) => car.id !== carId);
  },
  UPDATE_CAR(state, updatedCar) {
    const index = state.cars.findIndex((car) => car.id === updatedCar.id);
    if (index !== -1) {
      state.cars[index] = updatedCar;
    }
  },
};

export const actions = {
  async fetchCars({ commit }) {
    // Giả sử bạn có một API để lấy danh sách xe
    console.log("🚀 ~ fetchCars ~ LIST_CARS:", LIST_CARS)
    commit("SET_CARS", LIST_CARS);
  },
  async fetchCarById({ commit }, carId) {
    commit('SET_CAR', car);
  },
  async addCar({ commit }, car) {
    // Gửi yêu cầu thêm xe mới
    commit("ADD_CAR", car);
  },
  async removeCar({ commit }, carId) {
    // Gửi yêu cầu xóa xe
    commit("REMOVE_CAR", carId);
  },
  async updateCar({ commit }, updatedCar) {
    // Gửi yêu cầu cập nhật xe
    console.log("🚀 ~ updateCar ~ updatedCar:", updatedCar)
    
    commit("UPDATE_CAR", updatedCar);
  },
};
