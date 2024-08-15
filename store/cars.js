import { LIST_CARS } from "../constant/dummy";
import { db } from "~/plugins/firebase";
import {
  doc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const state = () => ({
  cars: [],
});

export const getters = {
  allCars: (state) => state.cars,

  carById: (state) => (id) => {
    return state.cars.find((car) => car.id === id);
  },
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
    const querySnapshot = await getDocs(collection(db, "cars"));
    const data = querySnapshot.docs.map((doc) => {
      // doc.data() is never undefined for query doc snapshots
      return { id: doc.id, ...doc.data() };
    });
    console.log("🚀 ~ fetchCars ~ LIST_CARS:", data);
    commit("SET_CARS", data);
  },
  async fetchCarById({ commit }, carId) {
    commit("SET_CAR", car);
  },
  async addCar({ commit }, car) {
    // Gửi yêu cầu thêm xe mới
    try {
      const docRef = await addDoc(collection(db, "cars"), car);
      const newCar = { id: docRef.id, ...car };
      commit("ADD_CAR", newCar);
    } catch (error) {
      console.log("🚀 ~ addCar ~ error:", error);
    }
  },
  async removeCar({ commit }, carId) {
    // Gửi yêu cầu xóa xe
    try {
      await deleteDoc(doc(db, "cars", carId));
      commit("REMOVE_CAR", carId);
    } catch (error) {
      console.log("🚀 ~ removeCar ~ error:", error);
    }
  },
  async updateCar({ commit }, updatedCar) {
    // Gửi yêu cầu cập nhật xe
    try {
      const carRef = doc(db, "cars", updatedCar.id);
      await updateDoc(carRef, updatedCar);
      commit("UPDATE_CAR", updatedCar);
    } catch (error) {
      console.log("🚀 ~ updateCar ~ error:", error);
    }
  },
};
