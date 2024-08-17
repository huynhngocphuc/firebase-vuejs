<template>
  <div v-if="isAuthenticated" class="notification-button">
    <button @click="toggleModal">Notifications</button>
    <span class="badge" v-if="allNotifications.length">{{
      allNotifications.length
    }}</span>
    <div v-if="isModalVisible" class="modal-content">
      <p>Notifications</p>
      <div
        class="notify-item_layout"
        v-for="(notification, index) in allNotifications"
        :key="index"
      >
        <div class="notify-item_content">
          <a @click="handleRedirect(notification.idCar)" class="notify-item_link">
            <strong>{{ notification.content }}</strong>
            <span>{{ notification.idCar }}</span>
            <span>{{ new Date(notification.time) }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    toggleModal() {
      console.log("🚀 ~ toggleModal ~ toggleModal:");

      this.isModalVisible = !this.isModalVisible;
    },
    handleRedirect(idCar) {
      this.$router.push(`/${idCar}`);
      // this.toggleModal();
    },
  },
  computed: {
    ...mapGetters("notify", ["allNotifications"]),
    ...mapGetters("auth", ["user", "isAuthenticated"]),
  },
};
</script>

<style scoped>
.notification-button {
  position: relative;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

.badge {
  position: absolute;
  top: -12px;
  right: -8px;
  background: rgb(237, 1, 1);
  color: white;
  border-radius: 50%;
  font-weight: bold;
  text-align: center;
  padding: 2px 5px;
}
.modal-content {
  position: absolute;
  background: white;
  border-radius: 8px;
  width: 400px;
  top: 17px;
  right: 30px;
  display: block;
  padding: 2px;
}

.notify-item_layout {
  background-color: #ccc;
  height: 30px;
  margin-bottom: 5px;
  align-items: center;
  display: flex;
  border-radius: 2px;
  border: 1px solid #000;
  padding: 10px 0;
}
.notify-item_content {
  padding:0 10px;
}
.notify-item_link{
}
</style>