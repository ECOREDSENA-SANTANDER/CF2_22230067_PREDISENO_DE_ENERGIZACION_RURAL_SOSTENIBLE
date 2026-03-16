<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Marco normativo y regulatorio 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-md-4.p-4
            p.mb-0 En la planificación de proyectos energéticos, resulta fundamental incorporar criterios de eficiencia económica en la selección de la tecnología, evaluando no solo el costo inicial de los equipos, sino además su vida útil, rendimiento, disponibilidad de repuestos y los costos asociados a su disposición final. El análisis del costo nivelado de la energía se presenta como una herramienta clave para estimar el costo real de generación por kilovatio hora a lo largo del tiempo, lo que facilita la comparación entre distintas alternativas energéticas. Este enfoque permite identificar opciones que, aunque requieran una mayor inversión inicial, ofrezcan mejores resultados financieros y operativos durante el horizonte de evaluación del proyecto.

    p.mb-5(data-aos="fade-right") Asimismo, se subraya la importancia de diseñar estructuras tarifarias sostenibles que permitan cubrir los costos de operación y mantenimiento sin afectar de manera significativa la capacidad de pago de los usuarios. La creación de fondos de reposición, esquemas de subsidio y mecanismos de ahorro programado contribuye a reducir el riesgo de desfinanciamiento y a garantizar la sustitución oportuna de componentes esenciales. En consecuencia, la gestión financiera se concibe como un proceso continuo de monitoreo, evaluación y ajuste, orientado a asegurar la estabilidad económica y la permanencia del servicio energético en el largo plazo.

    .bg3.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right"): img(src='@/assets/curso/tema1/2.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/3.svg', alt='')
            p.mb-0(data-aos="fade-left") Colombia ha evolucionado su marco normativo para priorizar las energías limpias, consolidando un enfoque orientado a la diversificación de la matriz energética, la reducción de emisiones y el fomento de la inversión en fuentes renovables no convencionales. En este contexto, los dos pilares fundamentales que el formulador debe conocer son, en primer lugar, el conjunto de incentivos económicos y tributarios que buscan mejorar la viabilidad financiera de los proyectos mediante beneficios fiscales y facilidades para la importación de tecnologías; y, en segundo lugar, el fortalecimiento institucional y regulatorio que promueve la integración eficiente de estas fuentes al sistema energético nacional. Ambos ejes permiten crear un entorno más competitivo y estable, facilitando la estructuración técnica, económica y financiera de iniciativas sostenibles en el largo plazo.

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-0(data-aos="fade-right") 
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg4.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/3.png')
          h3.mb-4.text-center.text-white Ley 1715 de 2014
          p.mb-0.text-white es la "ley madre" de las Fuentes No Convencionales de Energía Renovable (FNCER). Establece los incentivos tributarios (exclusión de IVA, exención de aranceles, deducción de renta y depreciación acelerada) para proyectos de autogeneración y generación a pequeña escala.
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg5.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/4.png')
          h3.mb-4.text-center Ley 2099 de 2021 (Ley de transición energética)
          p.mb-lg-4 moderniza la anterior, agilizando trámites y extendiendo los beneficios a nuevas tecnologías como el hidrógeno verde y el almacenamiento de energía a gran escala. Fortalece los fondos para la energización rural.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/5.png', alt='')
      .col-lg-8
        p.mb-4 El nuevo modelo de comunidades energéticas, establecido mediante el Decreto 2236 de 2023, constituye un eje fundamental en la estructuración actual de los proyectos de energización rural, dado que redefine los esquemas tradicionales de acceso, gestión y aprovechamiento de la energía.
        .bg6.p-4
          .row.justify-content
            .col-lg-2.col-md-2
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema1/6.svg', alt='')
            .col-lg-10.col-md-10
              ol.lista-ol--cuadro.mb-0
                li.d-flex.mb-4
                  .lista-ol--cuadro__vineta
                    span a
                  p.mb-0 #[b Definición:] corresponde a grupos de usuarios que se asocian para generar, comercializar o utilizar de manera eficiente la energía, principalmente a partir de Fuentes No Convencionales de Energía Renovable (FNCER).
                li.d-flex.mb-2
                  .lista-ol--cuadro__vineta
                    span b
                  p.mb-0 #[b Impacto social:] permite que las comunidades trasciendan el rol de simples beneficiarias y se consoliden como propietarias y gestoras de su propia infraestructura energética, fortaleciendo la autonomía, la sostenibilidad y la apropiación social de los proyectos.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Licenciamiento ambiental y permisos menores

    p.mb-5 No todos los proyectos rurales requieren una licencia ambiental completa (que es costosa y lenta), pero el aprendiz debe saber distinguir:

    .row
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/7.svg' alt='')
          .tarjeta.color-pr
            .p-4
              h4 Proyectos de pequeña escala
              p Generalmente requieren un Plan de Manejo Ambiental (PMA) ante la Corporación Autónoma Regional (CAR) local.
      .col-lg-6
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/8.svg' alt='')          
          .tarjeta.color-pr
            .p-4
              h4 Permisos de aprovechamiento
              p Si el proyecto requiere poda de árboles, uso de fuentes hídricas (microcentrales) o intervención de suelos, se deben tramitar permisos específicos de vertimientos o concesiones de agua.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Regulación en Zonas No Interconectadas (ZNI): El papel de la CREG y el IPSE
    
    p.mb-5 Dado que la mayoría de los proyectos rurales se ubican en zonas donde no llega la red nacional, es vital entender el rol de estas instituciones:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Entidades participantes en ZNI
        .tabla-a.tab1
          table
            thead
              tr
                th Entidad
                th Función principal en el proyecto
            tbody
              tr.bgr
                td #[b Ministerio de Minas y Energía (MME)]
                td Define la política pública y prioriza las zonas a intervenir.
              tr
                td #[b CREG (Comisión de Regulación de Energía y Gas)]
                td Establece las tarifas que se pueden cobrar y las reglas de juego para la prestación del servicio.
              tr.bgr
                td #[b IPSE (Instituto de Planificación y Promoción de Soluciones Energéticas)]
                td Estructura, implementa y hace seguimiento a soluciones energéticas en las ZNI.
              tr
                td #[b UPME (Unidad de Planeación Minero Energética)]
                td Encargada de los planes de expansión y de certificar los proyectos para acceder a beneficios tributarios.
    
    
    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Estándares técnicos: RETIE y normativas específicas para FNCER
  
    p.mb-5 No basta con que el proyecto sea legal; debe ser seguro y de alta calidad técnica para evitar fallos prematuros en entornos rurales difíciles.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-11.offset-lg-0
        .row.justify-content-center.align-items-end
          .col-lg-8.ps-lg-0
            .crd.crd--avatarHorizontal.crd--first.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema1/9.svg", alt="alt")
                .col
                  h4.mb-2 RETIE (Reglamento Técnico de Instalaciones Eléctricas)
                  p.mb-0 Es de cumplimiento obligatorio en Colombia. Todo prediseño debe asegurar que los materiales y la instalación minimicen riesgos para las personas y el entorno.
            .crd.crd--avatarHorizontal.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema1/10.svg", alt="alt")
                .col
                  h4.mb-2 RETILAP (Reglamento Técnico de Iluminación y Alumbrado Público)
                  p.mb-0 Crucial si el proyecto incluye iluminación de espacios comunes o escuelas rurales.
            .crd.crd--avatarHorizontal.crd--last.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema1/11.svg", alt="alt")
                .col
                  h4.mb-2 Normas NTC / IEC
                  p.mb-0 Referencias internacionales para la calidad de paneles solares, inversores y baterías (ejemplo: NTC 4564 para sistemas fotovoltaicos).
          .col-lg-5.sob1.d-none.d-lg-block
            img.img-t(src="@/assets/curso/tema1/12.svg", alt="alt")
    
    p.mb-5 No siempre la energía solar es la mejor opción. El aprendiz debe evaluar la fuente según el recurso disponible:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-3
        img.img-t(src="@/assets/curso/tema1/13.png", alt="alt")
      .col-lg-9
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b2.p-2.p-lg-3.p-md-3
            .row.justify-content-center.align-items-center.mb-4.mt-lg-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/14.svg' alt='AvatarTop')
            .bg7.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-2.pe-2 Solar fotovoltaica
            p.mb-2 Ideal para la mayoría de regiones en Colombia (especialmente caribe, orinoquía y zonas andinas). Ventaja: Bajo mantenimiento y escalabilidad.
          .tarjeta.tarjeta--slyder.b2.p-2.p-lg-3.p-md-3
            .row.justify-content-center.align-items-center.mb-4.mt-lg-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/15.svg' alt='AvatarTop')
            .bg7.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-2.pe-2 Eólica de pequeña escala
            p.mb-2 Recomendada para zonas con velocidades de viento promedio superiores a 5 m/s (ejemplo: la Guajira). Requiere estudios de viento más complejos.
          .tarjeta.tarjeta--slyder.b2.p-2.p-lg-3.p-md-3
            .row.justify-content-center.align-items-center.mb-4.mt-lg-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/16.svg' alt='AvatarTop')
            .bg7.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-2.pe-2 Micro centrales Hidráulicas (PCH) 
            p.mb-2 Excelente para zonas con ríos caudalosos y pendientes (Andes y Pacífico). Proporcionan energía constante (24/7).
          .tarjeta.tarjeta--slyder.b2.p-2.p-lg-3.p-md-3
            .row.justify-content-center.align-items-center.mb-4.mt-lg-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/17.svg' alt='AvatarTop')
            .bg7.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-2.pe-2 Sistemas híbridos
            p.mb-2 Combinación de fuentes (ejemplo: solar y generador diésel de respaldo) para garantizar la confiabilidad en centros de salud o escuelas.
            
      
</template>

<script>
export default {
  name: 'Tema1',
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
