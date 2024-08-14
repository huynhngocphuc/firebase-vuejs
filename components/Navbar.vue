<template>
  <nav>
    <ul>
      <li>
        <button v-if="isGoBack" @click="goBack">back</button>
      </li>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/auth/login">Login</nuxt-link>
      </li>
      <!-- <li>
        <nuxt-link to="/auth/register">Register</nuxt-link>
      </li> -->
      <li>
        <nuxt-link to="/dashboard">Dashboard</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/cars">List Cars</nuxt-link>
      </li>
      
    </ul>
  </nav>
</template>

<script>
export default {
  created(){
    this.checkCanGoBack();
  },
  data(){
    return {
      isGoBack: false
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>