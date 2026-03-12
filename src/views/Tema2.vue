<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Viabilidad y sostenibilidad financiera
  
    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Fuentes de financiación


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Indicadores de rentabilidad social y económica

      





      
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
