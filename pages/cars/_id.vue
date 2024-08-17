<template>
  <div>
    <ButtonBack />
    <div class="container-content">
      <div class="layout-content">
        <p>
          Id:
          <strong>
            {{ car.id }}
          </strong>
        </p>
        <p>Name: <strong>{{ car.name }}</strong></p>
        <p>Price: <strong>{{ car.price }}</strong></p>
        <div class="layout-img">
          <img
            class="image-content"
            :src="`${car.image}`"
            alt="Fixed Size Image"
          />
        </div>
      </div>
    </div>
    <button @click="handleClick" >
      button test
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  middleware: "auth",
  asyncData({ params, store }) {
    const carId = params.id;
    console.log("🚀 ~ asyncData ~ carId:", carId)
    const car = { ...store.getters["cars/carById"](carId) };
    return { car };
  },
  data() {
    return { car: {} };
  },
  methods:{
    handleClick() {
      this.$router.push('/cars/uKq9mrYYtcPzzkZa8ijm')
    }
  }
};
</script>

<style scoped>
</style>