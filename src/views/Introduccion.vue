<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5(data-aos="fade-right")         
      .col-lg-12
        img(src='@/assets/curso/intro/1.png' alt='AvatarTop')
    
    p.mb-lg-5.mb-4(data-aos="fade-left") Bienvenidos al componente virtual Prefactibilidad de proyecto energético rural. Este documento ha sido elaborado con el propósito de orientar de manera clara y estructurada el proceso formativo, brindando al aprendiz los fundamentos conceptuales, técnicos y metodológicos necesarios para la formulación y análisis de proyectos energéticos en contextos rurales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/2.png', alt='')
      .col-lg-7
        .bg1.p-4
          .row.justify-content.mt-lg-3.mb-lg-3
            .col-lg-2.col-md-2
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/intro/3.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 El acceso a la energía eléctrica constituye un catalizador fundamental para el desarrollo humano, la equidad social y la productividad en los territorios rurales de Colombia. Sin embargo, llevar soluciones energéticas a las Zonas No Interconectadas (ZNI) representa un desafío que trasciende lo meramente técnico, ya que no basta con la instalación de infraestructura; se requiere una planificación rigurosa que garantice la sostenibilidad técnica, financiera, social y ambiental de los sistemas en el tiempo.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .bg2.p-4
          p.mb-0 En este marco, el componente aborda de manera integral aspectos clave como el marco normativo y regulatorio vigente, los incentivos tributarios aplicables, la evaluación de la viabilidad financiera, los modelos de gestión y apropiación comunitaria, el cálculo detallado de costos y la identificación de riesgos. El objetivo es proporcionar herramientas que permitan transformar una necesidad básica insatisfecha en una propuesta de proyecto sólida, financiable y orientada a mejorar la calidad de vida de las comunidades rurales, mediante el uso responsable de las Fuentes No Convencionales de Energía Renovable (FNCER).

    .row.justify-content-center.align-items-center(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 


</template>

<script>
export default {
  name: 'Introduccion',
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
