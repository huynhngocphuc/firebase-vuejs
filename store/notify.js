export const state = () => ({
  notifications: [
    {
      content: "New car has been added to the inventory",
      time: "12:00 PM",
      isRead: false,
      idCar: "LmnDi9Wx13gS24UelvIX",
    },
    {
      content: "New car has been added to the inventory",
      time: "12:00 PM",
      isRead: false,
      idCar: "LmnDi9Wx13gS24UelvIX",
    },
    {
      content: "New car has been added to the inventory",
      time: "12:00 PM",
      isRead: false,
      idCar: "LmnDi9Wx13gS24UelvIX",
    },
    {
      content: "New car has been added to the inventory",
      time: "12:00 PM",
      isRead: false,
      idCar: "LmnDi9Wx13gS24UelvIX",
    },
  ],
});

export const getters = {
  allNotifications: (state) => state.notifications,
  unreadNotifications: (state) =>
    state.notifications.filter((notification) =>!notification.isRead),
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
};

export const actions = {
  addNotification({ commit }, notification) {
    commit("ADD_NOTIFICATION", notification);
  },
  removeNotification({ commit }, index) {
    commit("REMOVE_NOTIFICATION", index);
  },
};
