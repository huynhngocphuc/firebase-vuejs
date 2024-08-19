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
            <th>image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="car in allCars"
            :key="car.id"
            class="item-car"
            @click="handleRedirect(car.id)"
          >
            <td>{{ car.id }}</td>
            <td>{{ car.name }}</td>
            <td>{{ car.price }}</td>
            <td>
              <div class="layout-img small-image">
                <img class="image-content" :src="car.image" alt="car-image" />
              </div>
            </td>
            <td>
              <button @click="removeCar(car.id)">Remove</button>
              <button @click.stop="handleUpdateCar(car.id)">
               Update <!-- <nuxt-link :to="`/cars/editCar/${car.id}`"> Update </nuxt-link> -->
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Modal :show="isOpenModalEdit" @close="toggleModalEdit">
      <EditForm />
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Modal from "~/components/Modal.vue";
import EditForm from "./components/edit.vue";
export default {
  components: { Modal, EditForm },
  middleware: "auth",
  asyncData({ store }) {
    store.dispatch("cars/fetchCars");
  },
  computed: {
    ...mapGetters("cars", ["allCars"]),
    ...mapGetters("loading", ["isLoading"]),
    ...mapGetters("cars/editCar", ["isOpenModalEdit"]),
  },
  methods: {
    ...mapActions("cars", ["fetchCars", "removeCar", "updateCar"]),
    ...mapActions("cars/editCar", ["toggleModalEdit", "setSelectedCar"]),

    handleRedirect(idCar) {
      this.$router.push(`/cars/${idCar}`);
      // this.toggleModal();
    },
    handleUpdateCar(idCar) {
      this.toggleModalEdit();
      this.setSelectedCar(idCar);
    },
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
.item-car:hover {
  cursor: pointer !important;
}
</style>