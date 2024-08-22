<template>
  <div class="tabs">
    <div class="tab-headers">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = tab"
        :class="{ active: selectedTab === tab }"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tab-content">
      <slot :name="selectedTab"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["tab1", "tab2", "tab3"],
      selectedTab: "tab1",
    };
  },
};
</script>
<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
}

.tab-headers {
  display: flex;
  margin-bottom: 10px;
}

button {
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
}

button.active {
  font-weight: bold;
  border-bottom: 2px solid blue;
}

.tab-content {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>