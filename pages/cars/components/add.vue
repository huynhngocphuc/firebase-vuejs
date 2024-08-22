<template>
  <div class="container-content">
    <div class="layout-content">
      <h1>New car</h1>
      <form @submit.prevent="submitForm">
        <div class="layout-input">
          <label class="label-input" for="name">Car Name:</label>
          <input
            class="input-content"
            type="text"
            v-model="car.name"
            id="name"
            required
          />
        </div>
        <div class="layout-input">
          <label class="label-input" for="price">Price:</label>
          <input
            class="input-content"
            type="number"
            v-model="car.price"
            id="price"
            required
          />
        </div>
        <div class="layout-input">
          <label class="label-input" for="image">Image URL:</label>
          <input
            class="input-content"
            type="text"
            v-model="car.image"
            id="image"
          />
        </div>
        <button class="btn-primary" type="submit">Add Car</button>
      </form>
    </div>
  </div>
</template>
  
  <script>
import { mapActions } from "vuex";
export default {
  middleware: "auth",
  data() {
    return {
      car: {
        name: "",
        price: "",
        image: "",
      },
    };
  },
  methods: {
    ...mapActions("cars", ["addCar"]),
    submitForm() {
      this.car;
      this.addCar({ ...this.car });
    },
  }
};
</script>
  
  <style>
</style>