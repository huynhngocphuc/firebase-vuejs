<template>
  <div>
    <h1>newcar</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Car Name:</label>
        <input type="text" v-model="car.name" id="name" required />
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" v-model="car.price" id="price" required />
      </div>
      <div>
        <label for="image">Image URL:</label>
        <input type="text" v-model="car.image" id="image" />
      </div>
      <button type="submit">Add Car</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
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
      this.addCar({...this.car});
    },
  },
};
</script>

<style>
</style>