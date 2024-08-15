<template>
  <div class="list-cars">
    <h1>List car</h1>
    <button class="btn-primary">
        <nuxt-link to="/cars/addCar">Add new Car</nuxt-link>
    
    </button>
    <div class="cars-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="car in allCars" :key="car.id">
            <td>{{ car.id }}</td>
            <td>{{ car.name }}</td>
            <td>{{ car.price }}</td>
            <td>
              <button @click="removeCar(car.id)">Remove</button>
              <button>
                <nuxt-link :to="`/cars/editCar/${car.id}`"> Update </nuxt-link>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <ul>
        <li v-for="car in allCars" :key="car.id">
          {{ car.id }}
          {{ car.name }}
          {{ car.price }}
          <button @click="removeCar(car.id)">Remove</button>
          <button>
            <nuxt-link :to="`/cars/editCar/${car.id}`"> Update </nuxt-link>
          </button>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// console.log("🚀 ~ this.allCars:", allCars)
export default {
  asyncData({ store }) {
    store.dispatch("cars/fetchCars");
  },
  computed: {
    ...mapGetters("cars", ["allCars"]),
  },
  methods: {
    ...mapActions("cars", ["fetchCars", "removeCar", "updateCar"]),
  },
};
</script>

<style scoped>
.cars-container {
  background-color: white;
  border: 2px solid #000;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>