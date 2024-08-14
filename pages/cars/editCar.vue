<template>
  <div>
    <form @submit.prevent="handlerUpdateCar">
      <div>
        <label>Name:</label>
        <input v-model="car.name" type="text" id="name" />
      </div>
      <div>
        <label>Price:</label>
        <input v-model="car.price" type="text" id="price" />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" id="image" />
      </div>
      <button type="submit">Update Car</button>
    </form>

    <h1>{{ car }}</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  asyncData({ params, store }) {
    console.log("🚀 ~ asyncData ~ params:", params)
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
      console.log("🚀 ~ click updateCar ~ updateCar:",this.car)
      
      this.updateCar(this.car);
    },
  },
};
</script>

<style>
</style>