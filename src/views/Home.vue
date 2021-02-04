<template>
  <div class="container">
    <div class="container__carousel">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          caption="First slide"
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="http://placekitten.com/1600/600"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <div class="container__p">
        <h1>Portal mascotas </h1>
        <p class="text-justify">
            {{texto}}
        </p>
    </div>
    <iframe
      :src="nuevo +'/file/usuario.xlsx'"
      width="100%"
      height="565px"
      frameborder="0"
    ></iframe>
  <img src="../assets/images/perro.png" alt="" width="60px" />
  
    <iframe
      src="https://docs.google.com/spreadsheets/d/1lLrus-bkIBsNhrPLFQLc0XfWevogNgYP/edit?rtpof=true#gid=1457585737'"
      width="100%"
      height="565px"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    // vueDropzone: vue2Dropzone
  },
  data() {
    return {
      nuevo: "https://view.officeapps.live.com/op/embed.aspx?src=",
      texto: "Te damos la bienvenida al portal canino, pensado para ser la página principal de aquellas personas interesadas y amantes de los perros y todo lo relacionado con estos animales.Si quieres colaborar, aquí podrás organizar tu trabajo.El perro es uno de los animales domésticos más antiguos del mundo y el mejor amigo del hombre. Su domesticación comienza cuando apenas era un pariente salvaje de los actuales lobos (Canis lupus), existiendo pruebas arqueológicas que confirman su existencia como animal doméstico. Toda la especie se refiere a la raza doméstica (Canis lupus familiaris)",
    };
  },
  methods: {},
};
</script>

<style scoped>
.container__carousel {
    margin-top: 10px;
}
.container__p {
    margin-top: 30px;
}
</style>