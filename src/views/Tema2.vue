<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Viabilidad y sostenibilidad financiera
    
    .row.justify-content-center.align-items.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src="@/assets/curso/tema2/1.png", alt="alt")
      .col-lg-1.d-none.d-lg-block
        img(src="@/assets/curso/tema2/2.svg", alt="alt")
      .col-lg-6.ps-lg-0
        p.mb-0 El objetivo de este capítulo es que el aprendiz desarrolle la capacidad de cuantificar la inversión requerida y proyectar la salud financiera del proyecto a lo largo de su vida útil (generalmente entre 20 y 25 años). Para ello, se analizan los principales componentes económicos que intervienen en la formulación de un proyecto energético rural, considerando no solo los costos iniciales de implementación, sino también los gastos asociados a la operación, el mantenimiento y la reposición de equipos. Asimismo, se introducen conceptos fundamentales de evaluación financiera que permiten estimar la rentabilidad y la sostenibilidad del proyecto en el tiempo, tales como el análisis de costos, la proyección de flujos de caja y la identificación de riesgos financieros. Esta evaluación resulta esencial para garantizar que la solución energética sea viable, financiable y capaz de mantenerse operativa a largo plazo, especialmente en contextos rurales y en las Zonas No Interconectadas (ZNI).

    .bl1(data-aos="fade-right") 
      .bloque-texto-a.color-acento-contenido.p-lg-5.p-4.mb-lg-5.mb-4
        .row.m-0.align-items-center.justify-content-center  
          .col-lg-8.mb-0.col-texto
            .bloque-texto-a__texto.p-lg-5.p-4
              p.mb-0(data-aos="fade-left") En este sentido, se profundiza en la estructuración de un presupuesto detallado del proyecto, incorporando variables como los costos de ingeniería y diseño, adquisición de equipos, transporte, instalación, permisos, interventoría y provisiones para contingencias. De igual manera, se examinan las fuentes de financiación disponibles, tales como recursos públicos, aportes comunitarios, cooperación internacional o esquemas de inversión privada, evaluando sus condiciones, plazos y costos de capital. Esta aproximación integral permite estimar con mayor precisión el monto total de la inversión requerida y definir estrategias financieras acordes con las características del territorio y la capacidad de pago de los usuarios.
          .col-lg-4.col-md-6.mb-0
            img.enc.img-a(src='@/assets/curso/tema2/3.png', alt='')

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-left")
      .col-lg-9
        .row.mb-4
          .col-lg-6.pe-lg-0.col-md-7.col-10.mb-lg-0.mb-4
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/4.svg', alt='')
          .col-lg-6.ps-lg-0.pe-lg-0.mb-0
            .bg81.p-4
              p.mb-0.mx-lg-3.mb-lg-1.mt-lg-1 Adicionalmente, se abordan indicadores financieros que facilitan la toma de decisiones, como el valor presente neto, la tasa interna de retorno y el período de recuperación de la inversión, los cuales permiten comparar alternativas tecnológicas y distintos escenarios de operación. También se incorporan análisis de sensibilidad y escenarios prospectivos para evaluar el impacto de variaciones en variables críticas, tales como la demanda energética, los costos de mantenimiento o las tasas de interés. De esta manera, se promueve una planificación financiera rigurosa que contribuya a la sostenibilidad económica del proyecto y a la continuidad del servicio energético en contextos rurales y en las Zonas No Interconectadas.
        p.mb-0 En la prefactibilidad, debemos diferenciar claramente estos dos tipos de gastos: 
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema2/5.png', alt='')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        TabsC.color-primario
          .bg8.p-lg-5.p-4(titulo="CAPEX <br>(<em>capital expenditure</em> - inversión inicial)")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                ul.lista-ul.mb-4
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Equipos:] paneles, baterías, inversores, estructuras, pueden representar del 60 al 70 % de los costos.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Logística:] transporte a zonas de difícil acceso (lanchas, mulas, helicóptero), representan cerca del 15 al 20 %.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Mano de obra:] instalación y puesta en marcha.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Permisos:] costos legales y certificaciones (RETIE / UPME / IPSE).
                .row.justify-content-center.align-items-center.mb-4
                  .col-lg-12
                    .titulo-sexto.mb-4
                      h5 Tabla 2.
                      | Estimaciones costos de inversión
                    .tabla-a.tab2
                      table
                        thead
                          tr
                            th Categoría
                            th Concepto
                            th % Estimado del proyecto
                            th Riesgo asociado
                        tbody
                          tr.bgr
                            td #[b Equipos]
                            td Paneles, baterías, inversor.
                            td 50 % - 60 %
                            td Variación TRM (dólar).
                          tr.bgw
                            td #[b Instalación]
                            td Mano de obra y viáticos.
                            td 10 % - 15 %
                            td Clima y orden público.
                          tr.bgr
                            td #[b Logística]
                            td Transporte y carga.
                            td 10 % - 20 %
                            td Geografía difícil.
                          tr.bgw
                            td #[b Certificación]
                            td RETIE y avales.
                            td 5 %
                            td Retrasos administrativos.
                p.mb-0 #[b Tip de prefactibilidad:] si el costo de llevar los materiales (logística) supera el 25 % del valor de los equipos, el aprendiz debe evaluar si es mejor una solución alternativa o si el proyecto requiere un subsidio estatal mayor para ser viable.
          .bg8.p-lg-5.p-4(titulo="<em>OPEX</em> <br>(<em>operational expenditure</em> - gastos operativos)")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                ol.lista-ol--cuadro.mb-5
                  li.d-flex.mb-3 
                    .lista-ol--cuadro__vineta
                      span a
                    p.mb-0 #[b Mantenimiento preventivo:] limpieza de paneles, revisión de conexiones.
                  li.d-flex.mb-3 
                    .lista-ol--cuadro__vineta
                      span b
                    p.mb-0 #[b Reposición de activos:] las baterías y el inversor suelen cambiarse cada 5 a 10 años (según tecnología).
                  li.d-flex.mb-0
                    .lista-ol--cuadro__vineta
                      span c
                    p.mb-0 #[b Administración:] costos de recaudo y gestión comunitaria.
                img(src='@/assets/curso/tema2/6.png', alt='')


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Fuentes de financiación

    p.mb-5(data-aos="fade-left") Existen diferentes "bolsas" de dinero dependiendo de la ubicación del proyecto y del tipo de beneficiario. No es lo mismo financiar una escuela rural que una planta de transformación de café.
    
    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Fondos públicos específicos (administrados por el Ministerio de Minas)

    p.mb-5(data-aos="fade-left") Son las fuentes principales para proyectos de electrificación en Colombia:

    AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items.p-0(titulo="FAZNI (Fondo para la Energización de las Zonas No Interconectadas)")
        .col-lg-11.mb-0
          .row.justify-content-center.align-items-start.mb-0
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Es el fondo estrella para proyectos en áreas donde no llega la red eléctrica nacional. Prioriza soluciones con fuentes renovables.
            .col-lg-6.col-md-10.col-10
              img(src='@/assets/curso/tema2/7.png', alt='')
      .row.justify-content-center.align-items.p-0(titulo="FAER (Fondo de Apoyo Financiero para la Energización de las Zonas Rurales Interconectadas)")
        .col-lg-11.mb-0
          .row.justify-content-center.align-items-start.mb-0
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Se usa cuando la vivienda o comunidad está en el Sistema Interconectado Nacional (SIN) pero es de difícil acceso y requiere una extensión de red o una solución aislada por costos.
            .col-lg-6.col-md-10.col-10
              img(src='@/assets/curso/tema2/8.png', alt='')
      .row.justify-content-center.align-items.p-0(titulo="PRONE (Programa de Normalización de Redes Eléctricas)")
        .col-lg-11.mb-0
          .row.justify-content-center.align-items-start.mb-0
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Enfocado en mejorar la infraestructura existente en barrios subnormales o zonas rurales con redes en mal estado.
            .col-lg-6.col-md-10.col-10
              img(src='@/assets/curso/tema2/9.png', alt='')
    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Sistema General de Regalías (SGR)

    p.mb-5(data-aos="fade-right") Es una de las fuentes más potentes actualmente. Los departamentos y municipios reciben dinero por la explotación de recursos minero-energéticos y deben invertir una parte en ciencia, tecnología e innovación o en proyectos de infraestructura.

    .bg9.p-lg-5.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.col-md-2.col-4
          img.mb-4.mb-md-0.mb-lg-0(alt="" src="@/assets/curso/tema2/10.svg")
        .col-lg-11.col-md-9.col-11
          p.mb-0 #[b Oportunidad:] estos proyectos se tramitan a través de la plataforma MGA (Metodología General Ajustada) para ser presentados ante los OCAD (Órganos Colegiados de Administración y Decisión).

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12 
        .tarjetaf.p-4.mb-0
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Mecanismo de “obras por impuestos” (ZOMAC)
                p.mb-4 Este es un incentivo para que las grandes empresas privadas inviertan directamente en el territorio:
                p.mb-4 Las empresas pueden destinar hasta el 50 % de su impuesto de renta para ejecutar directamente proyectos de energía en municipios clasificados como ZOMAC (Zonas Más Afectadas por el Conflicto Armado).
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Ventaja:] el flujo de recursos es más rápido que en los fondos públicos tradicionales porque la empresa privada gestiona la ejecución.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema2/11.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Cooperación internacional y créditos verdes
                p.mb-4 Para proyectos con alto componente de innovación o impacto social:
                ul.lista-ul.mb-0
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-0 #[b Banca Multilateral:] entidades como el BID (Banco Interamericano de Desarrollo) o el Banco Mundial ofrecen líneas de crédito con tasas de interés bajas para proyectos verdes.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Fondos de clima:] como el #[em Green Climate Fund], que busca reducir emisiones de CO#[sub 2] a través de la sustitución de plantas diésel por solar en zonas rurales. 
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema2/12.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Incentivos financieros de la banca comercial
                p.mb-4 Bancos locales (como Bancolombia, Davivienda o Banco de Bogotá) han creado las llamadas líneas verdes:
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Ofrecen tasas preferenciales y periodos de gracia para la compra de sistemas solares fotovoltaicos, apalancados en los beneficios de la Ley 1715 que vimos en el anterior numeral.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema2/13.png")

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Resumen para el aprendiz: ¿A qué fondo aplicar?
        .tabla-a.tab3
          table
            thead
              tr
                th Si el proyecto es para
                th La fuente ideal es
                th Requisito principal
            tbody
              tr.bgr
                td Una comunidad indígena aislada.
                td FAZNI / IPSE.
                td Aval de la comunidad y prediseño técnico.
              tr
                td Una vereda cerca de la red eléctrica.
                td FAER.
                td Certificado del operador de red local.
              tr.bgr
                td Una zona de posconflicto.
                td Obras por Impuestos.
                td Estar en el listado de municipios ZOMAC.
              tr
                td Un proceso productivo (Cacao, Café).
                td Líneas verdes / Bancoldex.
                td Demostrar capacidad de pago del crédito.        


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Indicadores de rentabilidad social y económica

    p.mb-5(data-aos="fade-right") Un estructurador de proyectos debe demostrar que la solución es eficiente y que los recursos asignados tendrán el mayor impacto posible. Para ello, utilizamos tres tipos de indicadores:

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Indicadores financieros tradicionales

    p.mb-5(data-aos="fade-right") Se usan cuando el proyecto busca ser un negocio o cuando se evalúa desde un inversionista privado:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="VAN (Valor Actual Neto)")
            .col-lg-12
              p.mb-4 Es el valor de todos los flujos de caja futuros (ahorros o ingresos) traídos al presente, restando la inversión inicial.
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Si el VAN > 0, el proyecto es financieramente atractivo.
          .row.align-items-center(titulo="TIR (Tasa Interna de Retorno)")
            .col-lg-12
              p.mb-4 Es la tasa de interés que iguala el VAN a cero. Representa la rentabilidad porcentual del proyecto.
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Se compara con la Tasa de Oportunidad (TCO). Si la TIR es mayor que la TCO, el proyecto se acepta.
          .row.align-items-center(titulo="<em>Payback</em> (Periodo de recuperación)")
            .col-lg-12
              p.mb-0 Tiempo que tarda el proyecto en recuperar la inversión inicial a través de los ahorros en la factura de energía o venta de excedentes.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/14.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema2/15.png')
        
    p.mb-5(data-aos="fade-left") En proyectos energéticos, el costo nivelado de la energía es uno de los indicadores más relevantes, ya que permite estimar el costo promedio de generación por unidad de energía (por ejemplo, $/kWh) a lo largo de la vida útil del sistema. Este indicador facilita la comparación entre alternativas tecnológicas, como la generación con diésel y los sistemas fotovoltaicos en una vereda, considerando un horizonte de evaluación de 20 años.

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-9
        p.mb-4 En cuanto a las variables, están correctamente definidas, pero hay un pequeño detalle técnico:
        .row.mb-0
          .col-lg-6.pe-lg-0.mb-lg-0.mb-4
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/16.svg', alt='')
          .col-lg-6.ps-lg-0.pe-lg-0.mb-0
            .bg811.p-4.p-lg-5
              p.mb-0
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-circle-check
                  p.mb-0 Normalmente #[b I#[sub t] no es inversión anual], sino que suele concentrarse en el año 0 (I#[sub 0]), aunque puede incluir reposiciones en años posteriores.
                li.d-flex.mb-2
                  i.fas.fa-circle-check
                  p.mb-0 F#[sub t] aplica principalmente a tecnologías con combustible (como diésel).
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Conviene aclarar que todos los valores se descuentan a valor presente.
      .col-lg-3.d-none.d-lg-block.mb-0
        img(src='@/assets/curso/tema2/17.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/18.png', alt='')
      .col-lg-7
        .bg10.p-4
          .row.justify-content-center.mb-0.mt-lg-1.mb-lg-0
            .col-lg-2
              img.img-t.img-a.mb-md-4.mb-lg-0.mb-4(src='@/assets/curso/tema2/19.svg', alt='')
            .col-lg-10
              p.mb-4 Donde:
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b I#[sub t]:] inversiones realizadas en el año #[em t] (#[em CAPEX]), incluyendo inversión inicial y reposiciones.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b M#[sub t]:] costos de operación y mantenimiento en el año t (#[em OPEX]).
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b F#[sub t]:] costos de combustible en el año t (si aplica).
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b E#[sub t]:] energía generada en el año t.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b r:] tasa de descuento.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b n:] vida útil del sistema (años).

    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Indicadores de sostenibilidad social y ambiental

    p.mb-5(data-aos="fade-left") Como muchos proyectos rurales son subsidiados, el éxito no se mide solo en pesos, sino en beneficios:

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg11.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema2/20.svg' alt='AvatarTop')
          .bg12.p-1.mb-4
            h4.text-center.mb-0.ps-3.pe-3 Costo por beneficiario
          p.mb-2 Inversión total / Número de familias atendidas. Esto ayuda a priorizar proyectos donde el impacto sea masivo.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg11.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema2/21.svg' alt='AvatarTop')
          .bg12.p-1.mb-4
            h4.text-center.mb-0.ps-3.pe-3 Relación beneficio y costo social
          p.mb-2 Mide el valor de las externalidades positivas (mejora en salud por no usar leña, horas extra de estudio para niños, refrigeración de vacunas).
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg11.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema2/22.svg' alt='AvatarTop')
          .bg12.p-1.mb-4
            h4.text-center.mb-0.ps-3.pe-3 Toneladas de CO#[sub 2] evitadas
          p.mb-2 Cálculo del impacto ambiental al desplazar fuentes fósiles (plantas diésel o lámparas de querosén).

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Análisis de sensibilidad

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-8
        p.mb-4 El aprendiz debe aprender que los números pueden cambiar. Se deben simular escenarios:
        .bg6.p-4
          .row.justify-content-center.align-items.mb-0.mt-lg-4.mb-lg-4
            .col-lg-2.d-none.d-lg-block
              img.img-t.img-a(src='@/assets/curso/tema2/23.svg' alt='AvatarTop')
            .col-lg-10
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 ¿Qué pasa si el costo de las baterías sube un 20 %?
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 ¿Qué pasa si la demanda de energía de la comunidad es mayor a la esperada?
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 ¿Qué pasa si el recaudo de la tarifa de mantenimiento es solo del 70 %?
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/24.png' alt='AvatarTop')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/25.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-md-4.p-4
            h4 Ejemplo para el aprendiz
            br
            br
            p.mb-0 #[b Caso de estudio:] una micro central hidroeléctrica rural tiene un LCOE de $0.15 USD/kWh, mientras que generar con diésel en esa misma zona cuesta $0.45 USD/kWh.
            br
            br
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 #[b Pregunta:] ¿es viable el proyecto aunque la inversión inicial sea 5 veces más alta que la de un motor diésel?


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
