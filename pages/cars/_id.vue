<template>
  <div class="container-content">
    <div class="layout-content">
      <p>id: {{ car.id }}</p>
      <p>name: {{ car.name }}</p>
      <p>Price: {{ car.price }}</p>
      <div class="layout-img">
        <img
          class="image-content"
          :src="`${car.image}`"
          alt="Fixed Size Image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params, store }) {
    const carId = params.id;
    console.log("🚀 ~ asyncData ~ carId:", carId);
    const car = { ...store.getters["cars/carById"](carId) };
    console.log("🚀 ~ asyncData ~ car:", car);
    return { car };
  },
  data() {
    return { car: {} };
  },
};
</script>

<style scoped>
.image-content {
}
</style>