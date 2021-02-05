<template>
  <div class="container">
    <ul class="list-group mt-5">
      <li class="list-group-item">
        <a href="#" @click="changeURL()">Visualizar archivo</a>
        <div class="float-right">
        </div>
      </li>
      <li class="list-group-item">
        <a href="#" @click="changeURL2()">Visualizar archivo 2</a>
        <!-- <div class="float-right">
        </div> -->
      </li>
    </ul>
     <iframe
      id="container"
      ref="container"
      src=""
      width="100%"
      height="565px"
      frameborder="0"
    ></iframe>
  </div>
  
</template>

<script>
export default {
  name: "File",
  components: {
    // vueDropzone: vue2Dropzone
  },
  data() {
    return {
      nuevo: "https://view.officeapps.live.com/op/embed.aspx?src=https://we.tl/t-3ZOCuLT3Fv",
      // src: "https://view.officeapps.live.com/op/embed.aspx?src=",
      // ruta: "../file/usuario.xlsx",
      src:
        "https://view.officeapps.live.com/op/embed.aspx?src=" +
        "https://inndot.com/firma-empresarial/USUARIOS-INNDOT.xlsx"
      }
     
    },
  methods: {
    changeURL() {
      // this.valor == true
      // console.log (this.valor)
      const text = this.$refs.container;
      // var text = document.getElementById("container");
      text.setAttribute("src", this.src);
    },
    changeURL2() {
      const text = this.$refs.container;
      // var text = document.getElementById("container");
      text.setAttribute("src", this.nuevo);
    }
  }
};
</script>
