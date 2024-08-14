<template>
  <div>
    <Navbar/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'IndexPage',
  components:{
    Navbar
  },
  computed: {
    ...mapState('modules/auth',['user'])
  }
}
</script>
