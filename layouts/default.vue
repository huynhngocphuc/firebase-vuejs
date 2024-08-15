<template>
  <div>
    <Navbar />
    <div class="layout-content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.layout-content {
  background-color: antiquewhite;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>