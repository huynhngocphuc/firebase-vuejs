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
import { mapActions, mapGetters } from "vuex";
export default {
  middleware: "auth",
  created() {
    this.car = { ...this.selectedCar };
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
  computed: {
    ...mapGetters("cars/editCar", ["selectedCar"]),
  },
  methods: {
    ...mapActions("cars", ["updateCar"]),
    handlerUpdateCar() {
      this.updateCar({...this.car});
    },
  },
};
</script>