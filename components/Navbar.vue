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
          <h2>Notifications</h2>
        </div>
      </div>
      <nuxt-link class="nav-link" to="/auth/login">Login</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isGoBack: false,
      isModalVisible: true,
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
/* .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
} */
.modal-content {
  position: absolute;
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-height: 80vh;
  top: 17px;
  right: 30px;
}
</style>