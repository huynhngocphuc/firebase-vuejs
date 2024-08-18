<template>
  <div>
    <h1>Home page</h1>
    <button>
      <nuxt-link to="/cars">List Cars</nuxt-link>
    </button>
    <button v-if="isAuthenticated" @click="handlerLogout">logout</button>
   
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("loading", ["isLoading"]),
  },
  methods: {
    ...mapActions("auth", ["logout", "getUserLocalStorage"]),
    handlerLogout() {
      this.logout()
        .then(() => {
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  computed: {
    ...mapGetters("auth", ["user", "isAuthenticated"]),
  },
};
</script>

<style>
</style>