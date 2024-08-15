<template>
  <div class="login-container">
    <div class="login-layout">
      <h1>Login your account</h1>
      <div class="form-login">
    </div>
      <div>
        <label>username</label>
        <input type="text" v-model="username" />
      </div>
      <div>
        <label>password</label>
        <input type="password" v-model="password" />
      </div>
      <button class="btn-primary" @click="handlerLogin">Login</button>
    </div>

    
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

<style scoped>

.login-container{
display: block;
text-align: center;

}
.login-layout{
  display: inline-block;
  border: 1px solid black;
  border-radius:10px ;
  margin: 20px;
}
.btn-primary{
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
}
.btn-primary:hover {
  cursor: pointer;
}
</style>