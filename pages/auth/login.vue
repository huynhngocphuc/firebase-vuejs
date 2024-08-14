<template>
  <div class="container">
    <div class="form-login">
      <div>
        <label>username</label>
        <input type="text" v-model="username" />
      </div>
      <div>
        <label>password</label>
        <input type="password" v-model="password" />
      </div>
      <button @click="handlerLogin">Login</button>
    </div>

    <h1>{{ username }} {{ password }} hello</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";


export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    handlerLogin() {
      // Simulate login logic
      if (this.username === "admin" && this.password === "12345") {
        this.login({ username: this.username, password: this.password });
        this.$router.push("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    },
  },
};
</script>

<style>
</style>