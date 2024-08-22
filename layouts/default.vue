<template>
  <div>
    <HeaderContainer />
    <!-- <Navbar />
    <div class="layout-content">
      <Nuxt />
    </div>
    <Loading /> -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import HeaderContainer from "../components/Header.vue";
import Loading from "../components/Loading.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Navbar,
    Loading,
    HeaderContainer
  },
  created() {
    this.getUserLocalStorage();
  },
  methods: {
    ...mapActions("auth", ["getUserLocalStorage"]),
  }
};
</script>

<style scoped>
.layout-content {
  background-color: antiquewhite;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>