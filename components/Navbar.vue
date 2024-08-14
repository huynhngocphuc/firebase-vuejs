<template>
  <nav>
    <ul>
      <li>
        <button>back</button>
      </li>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/auth/login">Login</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/auth/register">Register</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dashboard">Dashboard</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>