<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Monitoreo, control y evaluación

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El monitoreo, control y evaluación constituyen procesos estratégicos para garantizar el adecuado desempeño técnico, la sostenibilidad operativa y el impacto social de los proyectos energéticos rurales durante toda su vida útil. En este marco, se destaca la importancia de definir indicadores claros y medibles relacionados con la generación de energía, la continuidad del servicio, la eficiencia del sistema y la reducción de fallas. Estos indicadores permiten realizar un seguimiento sistemático del funcionamiento del proyecto, facilitando la detección temprana de desviaciones, la implementación de acciones correctivas y la optimización permanente de los recursos disponibles.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-9
        .row.justify-content-center.align-items-stretch.mb-0
          .col-lg-5.pe-lg-0.col-md-7.col-10.mb-lg-0.mb-4
            img.h-100(src='@/assets/curso/tema5/2.svg', alt='')
          .col-lg-7.ps-lg-0.mb-0
            .bg8.p-4.h-100
              p.mb-0 La incorporación de tecnologías de supervisión fortalece significativamente estos procesos, mediante el uso de sistemas de monitoreo remoto, dispositivos de adquisición de datos, sensores inteligentes y plataformas digitales que permiten visualizar en tiempo real variables críticas como voltaje, corriente, estado de baterías, consumo energético y condiciones ambientales. Estas herramientas no solo mejoran la capacidad de respuesta ante incidentes técnicos, sino que también reducen costos asociados a desplazamientos y mantenimiento correctivo, especialmente en zonas rurales de difícil acceso. La integración de soluciones basadas en conectividad y análisis de datos contribuye a una gestión más eficiente, transparente y basada en evidencia.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema5/3.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema5/4.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-0.mt-lg-1.mb-lg-1
          .col-lg-2
            img.img-t(src='@/assets/curso/tema5/5.svg', alt='')
          .col-lg-10.ps-lg-0
            p.mb-0 Además del componente técnico, la evaluación contempla el análisis de indicadores ambientales y sociales que permitan medir el impacto del proyecto en la calidad de vida de la comunidad. Entre estos se incluyen la disminución del uso de combustibles fósiles, la reducción de emisiones contaminantes, el acceso a servicios básicos, el fortalecimiento de actividades productivas y la mejora en condiciones educativas y de salud. Este enfoque integral promueve una visión de mejora continua, en la que la información recopilada se convierte en insumo fundamental para la toma de decisiones, la rendición de cuentas y la consolidación de proyectos energéticos sostenibles y resilientes en contextos rurales.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Indicadores de desempeño técnico (#[em KPIs])

    p.mb-4 Para saber si el sistema es eficiente, se deben monitorear variables técnicas clave. En la prefactibilidad se deben proponer los siguientes indicadores:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ul.lista-ul.mb-0
          li.d-flex.mb-1
            i.fas.fa-circle-check
            p.mb-0 #[b Disponibilidad del servicio:] porcentaje de tiempo que el sistema suministra energía sin interrupciones (meta ideal en zonas rurales: > 95 %).
          li.d-flex.mb-1
            i.fas.fa-circle-check
            p.mb-0 #[b Eficiencia de generación:] relación entre la energía producida y la irradiación recibida.
          li.d-flex.mb-1
            i.fas.fa-circle-check
            p.mb-0 #[b Estado de salud de baterías (#[em SoH]):] seguimiento de la degradación del banco de almacenamiento para prever el momento exacto del reemplazo.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 #[b Índice de fallas:] número de salidas de servicio por mes y tiempo promedio de reparación (#[em MTTR]).
      .col-lg-4
        img(src='@/assets/curso/tema5/6.svg', alt='')
      



      
</template>

<script>
export default {
  name: 'Tema5',
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
