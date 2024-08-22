<template>
  <div v-if="show" class="modal-overlay" @click="close">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="close">&times;</button>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    close() {
      this.$emit("close");
    },
  },
  created() {
    console.log("Component MODAL created");
  },
  mounted() {
    console.log("Component MODAL mounted");
  },
  beforeDestroy() {
    console.log("Component MODAL about to be destroyed");
  },
  beforeUnmount() {
    console.log("Component MODAL about to be unmounted");
  },
  activated() {
    console.log("Component MODAL activated from cache");
  },
  deactivated() {
    console.log("Component MODAL deactivated to cache");
  },
};
</script>
  
  <style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 500px;
  width: 100%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-body {
  margin-top: 20px;
}
</style>
  