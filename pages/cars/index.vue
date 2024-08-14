<template>
  <div class="list-cars">
    <h1>listcar</h1>
    <button @click="addCar()">
      <nuxt-link to="/cars/addCar"> Add new Car</nuxt-link>
    </button>
    <ul>
      <li v-for="car in allCars" :key="car.id">
        {{ car.id }}
        {{ car.name }}
        {{ car.price }}
        <button @click="removeCar(car.id)">Remove</button>
        <button>
          <nuxt-link :to="`/cars/editCar/${car.id}`">
            Update
          </nuxt-link>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// console.log("🚀 ~ this.allCars:", allCars)
export default {
  asyncData ( {store}){
    store.dispatch('cars/fetchCars')
  },
  computed: {
    ...mapGetters("cars", ["allCars"]),
  },
  methods: {
    ...mapActions("cars", ["fetchCars","removeCar","updateCar"]),
  },
};
</script>

<style>
</style>