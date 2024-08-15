export const state = () => ({
  notifications: [
    {
      content: "New car has been added to the inventory",
      time: "12:00 PM",
      isRead: false,
      idCar: "hf0WUKgosr8y5U4pBGN7",
    },
  ],
});

export const getters = {};

export const mutations = {
  ADD_NOTIFICATION(state, notification) {
    state.notifications.push(notification);
  },
  REMOVE_NOTIFICATION(state, index) {
    state.notifications.splice(index, 1);
  },
};

export const actions = {
  addNotification({ commit }, notification) {
    commit("ADD_NOTIFICATION", notification);
  },
  removeNotification({ commit }, index) {
    commit("REMOVE_NOTIFICATION", index);
  },
};
