<template>
  <nav class="navigate-container">
    <div class="nav-main">
      <nuxt-link class="nav-link" to="/">Home</nuxt-link>

      <nuxt-link class="nav-link" to="/cars">List Cars</nuxt-link>
    </div>
    <div class="nav-auth">
      <div class="notification-button">
        <button @click="toggleModal">Notifications</button>
        <span class="badge">10</span>
        <div v-if="isModalVisible" class="modal-content">
          <p>Notifications</p>
          <div
            class="notify-item_layout"
            v-for="(notification, index) in allNotifications"
            :key="index"
          >
            <div class="notify-item_content">
              <nuxt-link :to="`/cars/${notification.idCar}`">
                {{ notification.content }}
                <span>{{ notification.time }}</span>
              </nuxt-link>
            </div>
          </div>
          <!-- <h1>{{allNotifications}}</h1> -->
        </div>
      </div>
      <nuxt-link class="nav-link" to="/auth/login">Login</nuxt-link>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      isGoBack: false,
      isModalVisible: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
  },
  computed: {
    ...mapGetters("notify", ["allNotifications"]),
  },
};
</script>

<style>
.navigate-container {
  background-color: black;
  display: flex;
  justify-content: space-between;
  height: 45px;
  align-items: center;
  border-radius: 2px;
  padding: 0 20px;
}
.nav-main {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-auth {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  border-radius: 2px;
}

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
  padding: 2px
}
.notify-item_layout {
  background-color: #ccc;
  height: 30px;
  margin-bottom: 5px;
  align-items: center;
  display: flex;
  border-radius:2px;
  border: 1px solid #000;
}
.notify-item_content {
  padding: 0 10px;
}
</style>