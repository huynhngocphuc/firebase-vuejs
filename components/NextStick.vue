<template>
    <div>
      <button @click="updateValue">Cập nhật giá trị</button>
      <p ref="content">{{ value }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        value: 'Ban đầu'
      };
    },
    methods: {
      updateValue() {
        // Thay đổi giá trị data
        this.value = 'Giá trị mới';
        
        // Sử dụng nextTick để đảm bảo việc truy cập DOM diễn ra sau khi DOM đã được cập nhật
        this.$nextTick(() => {
          // Đây là thời điểm Vue đã cập nhật DOM, bạn có thể truy cập DOM thông qua $refs
          console.log(this.$refs.content.textContent); // "Giá trị mới"
        });
      }
    }
  }
  </script>
  