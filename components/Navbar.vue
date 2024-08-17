<template>
  <nav class="navigate-container">
    <div class="nav-main">
      <nuxt-link class="nav-link" to="/">Home</nuxt-link>
      <nuxt-link class="nav-link" to="/cars">List Cars</nuxt-link>
    </div>
    <div class="nav-auth">
      <NotificationModal />
      <nuxt-link v-if="!isAuthenticated" class="nav-link" to="/auth/login"
        >Login</nuxt-link
      >
      <a v-if="isAuthenticated" class="nav-link">{{ user.username }}</a>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import NotificationModal from "./NotificationModal.vue";
export default {
  components: { NotificationModal },
  data() {
    return {
      isGoBack: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapGetters("auth", ["user", "isAuthenticated"]),
  },
};
</script>

<style scoped>
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



</style>