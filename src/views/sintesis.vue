<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El componente de formación se concibe como un eje estratégico orientado al fortalecimiento de capacidades técnicas, normativas, financieras, sociales y ambientales necesarias para la adecuada formulación, implementación, monitoreo y sostenibilidad de proyectos energéticos, especialmente en contextos de Zonas No Interconectadas (ZNI). A través del desarrollo de contenidos relacionados con el marco regulatorio vigente, la viabilidad financiera, la gestión social y comunitaria, la evaluación ambiental y los mecanismos de seguimiento y control, este componente proporciona una visión integral que respalda la toma de decisiones informadas y promueve la apropiación comunitaria, la gestión responsable de los recursos y la continuidad operativa de las soluciones energéticas en el territorio.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre la prefactibilidad de un proyecto energético rural, que presenta cinco ejes: marco legal y normativo, viabilidad financiera, gestión social, gestión social y apropiación comunitaria, y monitoreo, control y evaluación, destacando incentivos normativos, análisis financiero, participación comunitaria, gestión de riesgos y seguimiento del impacto ambiental y social.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
