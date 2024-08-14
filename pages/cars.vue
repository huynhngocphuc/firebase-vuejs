<template>
  <h1>listcar</h1>
</template>

<script>
import {mapState} from 'vuex'
export default {
computed:{
    ...mapState('modules/cars',['listCar'])
}
}
</script>

<style>

</style>