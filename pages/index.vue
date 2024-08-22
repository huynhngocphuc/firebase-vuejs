<template>
  <div>
    <h1>Home page</h1>
    <button>
      <nuxt-link to="/cars">List Cars</nuxt-link>
    </button>
    <button v-if="isAuthenticated" @click="handlerLogout">logout</button>
    <div>
      <button @click="currentTab = 'addForm'">Form 1</button>
      <button @click="currentTab = 'formLogin'">Form 2</button>
      <keep-alive>
        <component :is="currentTab"></component>
      </keep-alive>
    </div>
    <NextStick/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import addForm from "../pages/cars/components/add.vue";
import formLogin from "../pages/auth/login.vue";
import NextStick from "../components/NextStick.vue"

export default {
  components: { addForm, formLogin ,NextStick},
  computed: {
    ...mapGetters("loading", ["isLoading"]),
    ...mapGetters("auth", ["user", "isAuthenticated"]),
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
  data() {
    return { currentTab: "addForm" };
  },
};
</script>

<style>
</style>