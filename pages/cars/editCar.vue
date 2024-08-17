<template>
  <div>
    <ButtonBack />
    <div class="container-content">
      <div class="layout-content">
        <form @submit.prevent="handlerUpdateCar">
          <div class="layout-input">
            <label class="label-input">Name:</label>
            <input
              class="input-content"
              v-model="car.name"
              type="text"
              id="name"
            />
          </div>
          <div class="layout-input">
            <label class="label-input">Price:</label>
            <input
              class="input-content"
              v-model="car.price"
              type="text"
              id="price"
            />
          </div>
          <div class="layout-input">
            <label class="label-input">Image URL:</label>
            <input
              class="input-content"
              v-model="car.image"
              type="text"
              id="image"
            />
          </div>
          <button class="btn-primary" type="submit">Update Car</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  middleware: "auth",
  asyncData({ params, store }) {
    const carId = params.id;
    const car = { ...store.getters["cars/carById"](carId) };
    return { car };
  },
  data() {
    return {
      car: {
        id: "",
        name: "",
        price: "",
        image: "",
      },
    };
  },
  methods: {
    ...mapActions("cars", ["updateCar"]),
    handlerUpdateCar() {
      console.log("🚀 ~ click updateCar ~ updateCar:", this.car);

      this.updateCar(this.car);
    },
  },
};
</script>

<style>
</style>