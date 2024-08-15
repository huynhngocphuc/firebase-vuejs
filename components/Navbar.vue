<template>
  <nav class="navigate-container">
    <div class="nav-main">
      <nuxt-link class="nav-link" to="/">Home</nuxt-link>

      <nuxt-link class="nav-link" to="/cars">List Cars</nuxt-link>
    </div>
    <div class="nav-auth">
      <nuxt-link class="nav-link" to="/auth/login">Login</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
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
};
</script>

<style>
.navigate-container {
 background-color: black;
 color: white;
 display: flex;
 justify-content: space-between;
 height: 45px;
 align-items: center;
 border-radius: 2px;
 padding: 0 20px;
}
.nav-main{
  display: flex;
  gap:30px;
  align-items: center;
}

.nav-auth{
  /* margin-right: 20px; */
}

.nav-link{
  color:white;
  text-decoration: none;
  border-radius: 2px;
}
</style>