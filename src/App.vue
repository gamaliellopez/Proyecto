<template>
  <div id="app" class="container">
    <div id="nav">
      <!-- <router-link to="/servicios">Servicios</router-link> -->
       <nab/>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import {mapGetters } from 'vuex'
import nab from '../src/views/Nab'
export default {
  components:{
    nab
  },
  methods:{
    // ...mapActions(['cerrarSesion'])
  },
  computed:{
    // ...mapGetters(['existeUsuario'])
  }
}
</script>