<template>
  <button class="btn-primary" @click="goBack">Back</button>
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
  }
};
</script>

<style>
</style>