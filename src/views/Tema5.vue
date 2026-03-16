<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Monitoreo, control y evaluación

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El monitoreo, control y evaluación constituyen procesos estratégicos para garantizar el adecuado desempeño técnico, la sostenibilidad operativa y el impacto social de los proyectos energéticos rurales durante toda su vida útil. En este marco, se destaca la importancia de definir indicadores claros y medibles relacionados con la generación de energía, la continuidad del servicio, la eficiencia del sistema y la reducción de fallas. Estos indicadores permiten realizar un seguimiento sistemático del funcionamiento del proyecto, facilitando la detección temprana de desviaciones, la implementación de acciones correctivas y la optimización permanente de los recursos disponibles.

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-left")
      .col-lg-9
        .row.mb-0
          .col-lg-6.pe-lg-0.col-md-7.col-10.mb-lg-0.mb-4
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema5/2.svg', alt='')
          .col-lg-6.ps-lg-0.pe-lg-0.mb-0
            .bg83.p-lg-2.p-4
              p.mb-0.mx-lg-3 La incorporación de tecnologías de supervisión fortalece significativamente estos procesos, mediante el uso de sistemas de monitoreo remoto, dispositivos de adquisición de datos, sensores inteligentes y plataformas digitales que permiten visualizar en tiempo real variables críticas como voltaje, corriente, estado de baterías, consumo energético y condiciones ambientales. Estas herramientas no solo mejoran la capacidad de respuesta ante incidentes técnicos, sino que también reducen costos asociados a desplazamientos y mantenimiento correctivo, especialmente en zonas rurales de difícil acceso. La integración de soluciones basadas en conectividad y análisis de datos contribuye a una gestión más eficiente, transparente y basada en evidencia.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema5/3.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema5/4.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-0.mt-lg-1.mb-lg-1
          .col-lg-2
            img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema5/5.svg', alt='')
          .col-lg-10.ps-lg-0
            p.mb-0 Además del componente técnico, la evaluación contempla el análisis de indicadores ambientales y sociales que permitan medir el impacto del proyecto en la calidad de vida de la comunidad. Entre estos se incluyen la disminución del uso de combustibles fósiles, la reducción de emisiones contaminantes, el acceso a servicios básicos, el fortalecimiento de actividades productivas y la mejora en condiciones educativas y de salud. Este enfoque integral promueve una visión de mejora continua, en la que la información recopilada se convierte en insumo fundamental para la toma de decisiones, la rendición de cuentas y la consolidación de proyectos energéticos sostenibles y resilientes en contextos rurales.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Indicadores de desempeño técnico (#[em KPIs])

    p.mb-4(data-aos="fade-right") Para saber si el sistema es eficiente, se deben monitorear variables técnicas clave. En la prefactibilidad se deben proponer los siguientes indicadores:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8.mb-lg-0.mb-4
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
    
    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Monitoreo remoto y tecnologías digitales

    p.mb-4(data-aos="fade-left") Dado que los proyectos rurales suelen estar en lugares alejados, el material debe enseñar el uso de herramientas modernas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema5/7.png', alt='')
      .col-lg-7
        .bg10.p-4
          .row.justify-content-center.mb-0.mt-lg-1.mb-lg-1
            .col-lg-2
              img.img-a.img-t.mb-lg-0.mb-4(src='@/assets/curso/tema5/9.svg', alt='')
            .col-lg-10
              ul.lista-ul.mb-0
                li.d-flex.mb-4
                  i.fas.fa-circle-check
                  p.mb-0 #[b Sistemas #[em SCADA] o plataformas #[em cloud]:] uso de dataloggers que envían información vía satelital o red celular (GPRS) para ver el estado del sistema desde una ciudad principal.
                li.d-flex.mb-4
                  i.fas.fa-circle-check
                  p.mb-0 #[b Internet de las cosas (#[em IoT]):] sensores que alertan automáticamente si un inversor falla o si una batería alcanza una temperatura peligrosa.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Apps para la comunidad:] herramientas simples donde el líder local reporta el estado diario del sistema a través de un smartphone.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Evaluación del impacto socioeconómico

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-9
        p.mb-0.mb-lg-4 No basta con que los bombillos prendan; el aprendiz debe evaluar si el proyecto cambió vidas:
        .row.mb-0
          .col-lg-6.pe-lg-0.col-md-7.col-10.mb-lg-0.mb-4
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema5/12.svg', alt='')
          .col-lg-6.ps-lg-0.pe-lg-0.mb-0
            .bg84.p-lg-5.p-4
              ul.lista-ul.mb-0.mx-lg-2
                li.d-flex.mb-3
                  i.fas.fa-circle-check
                  p.mb-0 #[b Uso productivo de la energía:] ¿Cuántos nuevos negocios o procesos de transformación se crearon gracias a la energía?
                li.d-flex.mb-3
                  i.fas.fa-circle-check
                  p.mb-0 #[b Ahorro familiar:] diferencia entre el gasto previo en velas/diésel y la nueva cuota de mantenimiento.
                li.d-flex.mb-2
                  i.fas.fa-circle-check
                  p.mb-0 #[b Impacto educativo:] aumento de horas de estudio o acceso a herramientas digitales en la escuela local.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema5/8.png', alt='')

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Planes de mejoramiento y retroalimentación

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema5/10.png', alt='')
      .col-lg-8
        p.mb-4 El monitoreo debe generar acciones. El documento de prefactibilidad debe contemplar:
        .bg6.p-4
          .row.justify-content
            .col-lg-2.col-md-2
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema5/11.svg', alt='')
            .col-lg-10.col-md-10
              ul.lista-ul.mb-0
                li.d-flex.mb-3
                  i.fas.fa-circle-check
                  p.mb-0 #[b Auditorías técnicas anuales:] visitas de expertos para verificar el estado de la infraestructura.
                li.d-flex.mb-3
                  i.fas.fa-circle-check
                  p.mb-0 #[b Encuestas de satisfacción del usuario:] para detectar problemas en el modelo de gestión o en el esquema de recaudo.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Ajuste de carga:] si la comunidad crece más rápido de lo previsto, el plan de monitoreo debe disparar una alerta para planear una expansión del sistema (añadir más paneles o baterías).

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 8.
          | Herramienta práctica: el cuadro de mando energético
        .tabla-a.tab5
          table
            thead
              tr
                th Variable a medir
                th Frecuencia
                th Responsable
                th Herramienta
            tbody
              tr.bgr
                td Limpieza de paneles.
                td Semanal.
                td Operador local.
                td Bitácora física.
              tr
                td Voltaje de baterías.
                td Diario.
                td Operador local / #[em App].
                td Multímetro / monitor.
              tr.bgr
                td Recaudo mensual.
                td Mensual.
                td Tesorero de la junta.
                td Libro contable.
              tr
                td Emisiones evitadas.
                td Anual.
                td Ingeniero supervisor.
                td Cálculo de #[em software].

                
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
