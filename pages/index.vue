<template>
  <div>
    <h1>page</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '../components/Navbar.vue'
import Layout from '../layouts/default.vue'

export default {
  name: 'IndexPage',
  components:{
    Layout
  },
  computed: {
    ...mapState('auth',['user'])
  }
}
</script>
