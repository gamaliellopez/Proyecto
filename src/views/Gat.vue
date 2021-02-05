<template>
    <div>
        <!--start intro-->
  <section id="intro" class="intro">
    <div id="slides">
      <div class="slides_container"> <img src="../images/banner1.jpg" width="960" height="300" alt=""></div>
    </div>
  </section>
  <!--end intro-->
  <!--start holder-->
  <div class="holder_content1">
    <section class="group5">
      <h1>Welcome</h1>
      <article>
        <h2>Douglas Adams: One of the problems of taking things apart and seeing how they work - supposing you're trying to find out how a cat works--you take that cat apart to see how it works, what you've got in your hands is a non-working cat. The cat wasn't a sort of clunky mechanism that was susceptible to our available tools of analysis. </h2>
      </article>
    </section>
  </div>
  <!--end holder-->
    </div>
</template>


<script>
export default {
  name: "Gat",
  components: {
    // vueDropzone: vue2Dropzone
  },
  data() {
    return {
      texto: "Te damos la bienvenida al portal canino, pensado para ser la página principal de aquellas personas interesadas y amantes de los perros y todo lo relacionado con estos animales.Si quieres colaborar, aquí podrás organizar tu trabajo.El perro es uno de los animales domésticos más antiguos del mundo y el mejor amigo del hombre. Su domesticación comienza cuando apenas era un pariente salvaje de los actuales lobos (Canis lupus), existiendo pruebas arqueológicas que confirman su existencia como animal doméstico. Toda la especie se refiere a la raza doméstica (Canis lupus familiaris)",
    };
  },
  methods: {},
};
</script>


<style scoped>
.intro{
  margin-top: 20px;
}
</style>