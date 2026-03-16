<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Viabilidad ambiental y gestión de riesgos

    .bg3.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right"): img(src='@/assets/curso/tema4/1.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/2.svg', alt='')
            p.mb-0(data-aos="fade-left") La viabilidad ambiental y la gestión de riesgos constituyen componentes esenciales en la formulación de proyectos energéticos rurales, pues permiten anticipar, prevenir y minimizar impactos negativos sobre el entorno natural, al tiempo que garantizan la resiliencia de la infraestructura frente a eventos adversos. En esta sección se desarrollan los principios de evaluación ambiental aplicables a soluciones basadas en Fuentes No Convencionales de Energía Renovable (FNCER), así como la identificación de riesgos climáticos, técnicos, operativos y de seguridad que pueden incidir en el desempeño y la continuidad del sistema. Además, se incorporan herramientas como la caracterización ambiental, la gestión adecuada de residuos peligrosos y la elaboración de matrices de riesgo, las cuales facilitan la toma de decisiones preventivas y la implementación de medidas de mitigación y control.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema4/3.png')
    
    p.mb-5(data-aos="fade-left") Asimismo, se resalta la importancia de integrar criterios de sostenibilidad desde la etapa de diseño, considerando no solo la reducción de emisiones y la protección de los recursos hídricos y del suelo, sino también la conservación de la biodiversidad y el respeto por las dinámicas socioculturales de las comunidades rurales. La evaluación ambiental estratégica permite comparar alternativas tecnológicas y de localización, priorizando aquellas que generen mayores beneficios ambientales y sociales en el largo plazo. De este modo, se promueve una planificación integral que articule el desarrollo energético con la preservación del entorno y el fortalecimiento del tejido comunitario.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/4.png', alt='')
      .col-lg-7
        .bg1.p-4
          .row.justify-content-center.mb-0.mt-lg-1.mb-lg-1
            .col-lg-2
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema4/5.svg', alt='')
            .col-lg-10.ps-lg-0
              p.mb-0 Por su parte, la gestión de riesgos se concibe como un proceso continuo que comprende la identificación, el análisis, la valoración y el seguimiento de amenazas potenciales a lo largo del ciclo de vida del proyecto. Ello implica establecer protocolos de mantenimiento preventivo, planes de contingencia y mecanismos de capacitación dirigidos a los actores locales, con el propósito de asegurar una respuesta oportuna ante fallas técnicas, fenómenos climáticos extremos o incidentes de seguridad. La adopción de estándares técnicos y normativos vigentes, junto con sistemas de monitoreo y evaluación periódica, contribuye a garantizar la confiabilidad, eficiencia y sostenibilidad de las soluciones energéticas implementadas en contextos rurales.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Gestión de impactos ambientales 

    p.mb-5(data-aos="fade-right") Aunque las FNCER (Fuentes No Convencionales de Energía Renovable) son "limpias", su implementación genera retos ambientales específicos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Gestión de Residuos Peligrosos (RESPEL)")
            .col-lg-12
              p.mb-0 Es el punto más crítico. El material debe enfatizar qué hacer con las baterías (plomo o litio) al final de su vida útil. Se deben proponer convenios de "logística inversa" con los proveedores.
          .row.align-items-center(titulo="Impacto en el suelo y cobertura vegetal")
            .col-lg-12
              p.mb-0 Evaluación de la necesidad de descapote o tala para la instalación de paneles o postes. Se debe priorizar el uso de techos existentes o zonas ya intervenidas.
          .row.align-items-center(titulo="Afectación de fauna")
            .col-lg-12
              p.mb-0 En proyectos eólicos, el riesgo para las aves y murciélagos; en proyectos solares, el posible efecto "lago" (reflejo) que desorienta a algunas especies.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema4/6.png')

    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Adaptación al cambio climático y riesgos naturales

    p.mb-5(data-aos="fade-left") El diseño de prefactibilidad debe considerar la resiliencia de la infraestructura ante eventos extremos, muy comunes en Colombia:

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg13.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema4/14.png')
          h3.mb-4.text-center Riesgos de inundación
          p.mb-0 Elevación de las bancadas de baterías y equipos electrónicos sobre el nivel histórico de crecientes.
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg14.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema4/15.png')
          h3.mb-4.text-center Riesgos de remoción en masa (deslaves)
          p.mb-0 Análisis de la estabilidad del terreno donde se ubicarán las estructuras de soporte.
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-0
        .bg15.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema4/16.png')
          h3.mb-4.text-center Protección atmosférica
          p.mb-0 En zonas con alta actividad de rayos (como el Catatumbo o el Magdalena Medio), es obligatorio el diseño de sistemas de puesta a tierra (SPT) y pararrayos para proteger la inversión.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Gestión de riesgos técnicos y operativos
    
    p.mb-5(data-aos="fade-right") Factores que pueden degradar el sistema prematuramente:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/17.svg' alt='')
          .tarjeta.color-pr
            .p-4
              h4 Corrosión
              p En zonas costeras o selváticas con alta humedad, se deben especificar materiales resistentes (acero inoxidable o aluminio anodizado).
      .col-lg-6
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/18.svg' alt='')          
          .tarjeta.color-pr
            .p-4
              h4 Sombreado dinámico
              p Crecimiento de la vegetación circundante que puede tapar los paneles con el tiempo. El plan de mantenimiento debe incluir la poda controlada.

    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Riesgos sociales y de seguridad

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        p.mb-4 En el contexto rural colombiano, no se pueden ignorar estos factores:
        .bg6.p-4
          .row.justify-content-center.align-items-center.mb-0.mt-lg-3.mb-lg-3
            .col-lg-2
              img.img-t.img-a.mb-md-4.mb-lg-0.mb-4(src='@/assets/curso/tema2/23.svg' alt='AvatarTop')
            .col-lg-10
              ul.lista-ul.mb-0
                li.d-flex.mb-3
                  i.fas.fa-circle-check
                  p.mb-0 #[b Vandalismo o robo:] diseño de cerramientos perimetrales, iluminación de seguridad y sistemas de anclaje de paneles que dificulten su remoción.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Orden público:] evaluación de la facilidad de acceso para técnicos externos en caso de fallas graves y la seguridad de los activos en zonas de conflicto.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema4/19.png' alt='AvatarTop')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 7.
          | Matriz de riesgos en ZNI
        .tabla-a.tab4
          table
            thead
              tr
                th Riesgo
                th Probabilidad
                th Impacto
                th Medida de mitigación
            tbody
              tr.bgr
                td #[b Derrame de electrolito (baterías)]
                td Baja.
                td Alto.
                td Uso de bandejas de contención y capacitación en manejo.
              tr
                td #[b Descarga atmosférica (rayo)]
                td Alta.
                td Muy Alto.
                td Instalación de DPS (Dispositivos de Protección contra Sobretensiones).
              tr.bgr
                td #[b Robo de paneles]
                td Media.
                td Alto.
                td Tornillería de seguridad y vigilancia comunitaria.
              tr
                td #[b Sequía extrema (en PCH)]
                td Media.
                td Muy Alto.
                td Diseño basado en caudales mínimos históricos y respaldo solar.


</template>

<script>
export default {
  name: 'Tema4',
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
