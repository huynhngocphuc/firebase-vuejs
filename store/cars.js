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
    commit("SET_CARS", data);
  },
  async fetchCarById({ commit }, carId) {
    commit("SET_CAR", car);
  },
  async addCar({ commit, dispatch }, car) {
    // Gửi yêu cầu thêm xe mới
    try {
      // add firebase
      const docRef = await addDoc(collection(db, "cars"), car);
      const newCar = { id: docRef.id, ...car };
      // add Notification
      await dispatch(
        "notify/addNotification",
        { content: "New Car", time: Date.now(), idCar: docRef.id },
        { root: true }
      );
      // update state
      commit("ADD_CAR", newCar);
      await window.alert("Added car successfully");
    } catch (error) {
      console.log("🚀 ~ addCar ~ error:", error);
    }
  },
  async removeCar({ commit, dispatch }, carId) {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this task?"
      );
      if (confirmed) {
        // delete firebase
        await deleteDoc(doc(db, "cars", carId));

        // add notification
        await dispatch(
          "notify/addNotification",
          {
            content: "Delete car",
            time: Date.now(),
            idCar: carId,
          },
          { root: true }
        );
        // update state
        commit("REMOVE_CAR", carId);
      }
    } catch (error) {
      console.log("🚀 ~ removeCar ~ error:", error);
    }
  },
  async updateCar({ commit, dispatch }, updatedCar) {
    try {
      // update firebase
      const carRef = doc(db, "cars", updatedCar.id);
      await updateDoc(carRef, updatedCar);

      // add Notification
      await dispatch(
        "notify/addNotification",
        {
          content: "Update car",
          time: Date.now(),
          idCar: updatedCar.id,
        },
        { root: true }
      );
      commit("UPDATE_CAR", updatedCar);
      await window.alert("Updated car successfully");
    } catch (error) {
      console.log("🚀 ~ updateCar ~ error:", error);
    }
  },
};
