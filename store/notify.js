import { db } from "~/plugins/firebase";
import {
  doc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
export const namespaced = true;
export const state = () => ({
  notifications: [],
  isShowNotifications: false,
});

export const getters = {
  allNotifications: (state) => state.notifications,
  unreadNotifications: (state) =>
    state.notifications.filter((notification) => !notification.isRead),
  getNotificationById: (state) => (id) =>
    state.notifications.find((notification) => notification.idCar === id),
};

export const mutations = {
  ADD_NOTIFICATION(state, notification) {
    state.notifications.push(notification);
  },
  REMOVE_NOTIFICATION(state, index) {
    state.notifications.splice(index, 1);
  },
  SET_NOTIFICATION(state, notifications) {
    state.notifications = notifications;
  },
};

export const actions = {
  async fetchNotification({ commit }) {
    try {
      const querySnapshot = await getDocs(collection(db, "notify"));
      const data = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      commit("SET_NOTIFICATION", data);
    } catch (error) {
      console.log("🚀 ~ fetchNotification ~ error:", error);
    }
  },
  async addNotification({ commit }, notification) {
    // add firebase
    const docRef = await addDoc(collection(db, "notify"), notification);
    commit("ADD_NOTIFICATION", { id: docRef.id, ...notification });
  },
  removeNotification({ commit }, index) {
    commit("REMOVE_NOTIFICATION", index);
  },
};
