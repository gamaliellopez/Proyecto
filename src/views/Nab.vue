<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
      
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <img src="../assets/images/perro.png" alt="" width="60px" />
      <a class="navbar-brand" href="/">MyMascota</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
           <li class="nav-item active">
            <router-link class="nav-link" to="dog">Raza de perros<span class="sr-only">(current)</span></router-link>
          </li>
           <li class="nav-item active">
            <router-link class="nav-link" to="gat">Raza de gatos<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" href="#">informacion<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Enlace 
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="dropdown-item" to="file">Action</router-link>
              <a class="dropdown-item" href="filee">Another action</a>
              <router-link class="dropdown-item" to="login">Something else here</router-link>
            </div>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-link"
              @click="signOut"
              v-if="existeUsuario"
            >
              Cerrar sesion
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "Nab",
  components: {},
  data() {
    return {};
  },
  methods: {
    // ...mapActions(["signOut"]),
  },
  computed: {
    // ...mapGetters(["existeUsuario"]),
  },
};
</script>

<style scoped>
#nav {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
    }
</style>