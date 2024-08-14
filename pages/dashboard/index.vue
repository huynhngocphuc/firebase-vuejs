<template>
  <div>
    <h1>dashboard</h1>
    <button>
      <nuxt-link to="/cars">List Cars</nuxt-link>
    </button>
    <button @click="handlerLogout">logout</button>
  </div>
</template>

<script>
console.log("🚀 ~ dashboard running....");
import { mapActions } from "vuex";
export default {
  middleware: "auth",
  computed: {},
  methods: {
    ...mapActions("modules/auth", ["logout"]),
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
};
</script>

<style>
</style>