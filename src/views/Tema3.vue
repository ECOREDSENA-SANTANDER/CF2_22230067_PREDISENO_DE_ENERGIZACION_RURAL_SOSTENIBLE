<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión social y apropiación comunitaria
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        p.mb-4 El objetivo de este capítulo es que el aprendiz comprenda la relevancia de la dimensión social como eje transversal en la formulación y sostenibilidad de los proyectos energéticos rurales. En este apartado se desarrollan los principios de participación comunitaria, gobernanza local y corresponsabilidad, reconociendo que el éxito de una solución energética no depende únicamente de su desempeño técnico o financiero, sino también de la capacidad de la comunidad para apropiarse del sistema, intervenir en la toma de decisiones y garantizar su operación y mantenimiento a lo largo del tiempo. Asimismo, se examinan herramientas como la consulta previa, los procesos de cocreación, la definición de modelos de gestión y los esquemas de recaudo, orientados a fortalecer la organización comunitaria y la sostenibilidad social del proyecto.
        .bg6.p-4
          .row.mb-0
            .col-lg-2.ps-lg-0
              img.img-t.img-a.d-none.d-lg-block(src='@/assets/curso/tema3/2.svg', alt='')
            .col-lg-10.ps-lg-0
              p.mb-0 En este contexto, se destaca que la dimensión social implica reconocer las particularidades culturales, económicas y organizativas de cada territorio, promoviendo procesos de diálogo intercultural y construcción colectiva de acuerdos. La identificación de actores clave, el análisis de las dinámicas de poder y la comprensión de las necesidades energéticas reales permiten diseñar soluciones pertinentes, inclusivas y equitativas. De esta manera, se impulsa la participación de grupos históricamente marginados, como mujeres, jóvenes y comunidades étnicas, asegurando que los beneficios del proyecto se distribuyan de forma justa y contribuyan efectivamente al desarrollo local.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/1.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/3.png', alt='')
      .col-lg-8
        .row.justify-content-center.mb-0
          .col-lg-2
            img.img-t.img-a.my-2.d-none.d-lg-block(src='@/assets/curso/tema3/4.svg', alt='')
          .col-lg-10.ps-lg-0
            p.mb-0 Adicionalmente, se enfatiza la necesidad de fortalecer las capacidades locales mediante procesos de formación técnica y organizativa que promuevan la autonomía en la gestión del sistema energético. La implementación de mecanismos transparentes de administración y rendición de cuentas favorece la confianza comunitaria y la sostenibilidad en el largo plazo. En consecuencia, la articulación entre instituciones públicas, organizaciones sociales y actores privados se configura como un elemento estratégico para consolidar modelos de gobernanza participativa que respalden la continuidad, el mantenimiento y la eventual expansión de las iniciativas energéticas rurales.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema3/5.png', alt='Texto que describa la imagen')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.bg16.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Podcast: Gestión social y apropiación comunitaria."
                :audio="require('@/assets/actividad/audio/screen-change.mp3')"
            )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Estrategias de socialización: cómo involucrar a la comunidad desde la prefactibilidad

    p.mb-5(data-aos="fade-right") La gestión social debe empezar desde la prefactibilidad, no cuando los paneles ya están llegando en la mula.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items.p-0(titulo="La consulta previa y el diálogo intercultural")
            .col-lg-11.mb-0
              .row.justify-content-center.align-items-start.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 Cuando el proyecto se ubica en resguardos indígenas, consejos comunitarios afrodescendientes o territorios ROM, el estructurador debe aplicar el marco del convenio 169 de la OIT:
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b No es negociable:] es un derecho fundamental. El aprendiz debe presupuestar tiempo (meses) y recursos para este proceso.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Protocolos:] se debe respetar la jerarquía de la comunidad (gobernadores, mayores, Capitanes) y realizar las reuniones en su lengua nativa si es necesario.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Acuerdos de beneficio:] definir cómo el proyecto respeta sus usos y costumbres (ejemplo: no ubicar paneles en sitios sagrados).
                .col-lg-6.col-md-10.col-10
                  img(src='@/assets/curso/tema3/7.png', alt='')
          .row.justify-content-center.align-items.p-0(titulo="Mapeo de actores y análisis de poder (<em>Stakeholder Mapping</em>)")
            .col-lg-11.mb-0
              .row.justify-content-center.align-items-start.mb-4
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 Resulta fundamental identificar los liderazgos y roles dentro de la comunidad. Es necesario precisar que el liderazgo visible no siempre coincide con la autoridad real en la toma de decisiones:
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Líderes formales:] Juntas de Acción Comunal (JAC), alcaldías, asociaciones locales.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Líderes informales:] el dueño de la tienda (donde todos se reúnen), la partera o el médico tradicional, el profesor de la escuela.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Grupos de interés:] jóvenes (quienes suelen aprender más rápido la técnica) y mujeres (quienes suelen liderar el ahorro y la economía del hogar).
                .col-lg-6.col-md-10.col-10
                  img(src='@/assets/curso/tema3/8.png', alt='')
              .titulo-sexto.mb-4
                h5 Tabla 4.
                | Herramienta para el aprendiz: matriz de compromisos comunitarios
              .tabla-a.tab6
                table
                  thead
                    tr
                      th Actor social
                      th Rol en el proyecto
                      th Compromiso clave
                  tbody
                    tr.bgr
                      td #[b Líder de la Junta]
                      td Supervisión política.
                      td Garantizar el orden en las asambleas.
                    tr.bgw
                      td #[b Técnico Local]
                      td Operación básica.
                      td Limpieza de paneles y reporte mensual.
                    tr.bgr
                      td #[b Tesorería]
                      td Gestión financiera.
                      td Recaudo de cuotas y reporte de morosos.
                    tr.bgw
                      td #[b Familias]
                      td Usuarios finales.
                      td Uso eficiente y protección de la infraestructura.
          .row.justify-content-center.align-items.p-0(titulo="Etapas del plan de socialización en prefactibilidad")
            .col-lg-11.mb-0
              .row.justify-content-center.align-items-start.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 Para que sea pedagógico, el material de formación debe proponer esta ruta:
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Avanzada de reconocimiento:] visita inicial para explicar el propósito y medir el interés.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Diagnóstico participativo:] uso de herramientas como la cartografía social, donde la comunidad dibuja su territorio e identifica dónde necesitan más la energía (escuelas, pozos de agua, alumbrado).
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Talleres de imaginarios:] preguntar a la comunidad: "¿Cómo se imaginan su vereda con luz?". Esto ayuda a alinear las expectativas reales con las capacidades técnicas del sistema.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Conformación del comité energético:] elegir a un grupo de personas que vigilarán la prefactibilidad y servirán de enlace con los ingenieros.
                .col-lg-6.col-md-10.col-10
                  img(src='@/assets/curso/tema3/9.png', alt='')
          .row.justify-content-center.align-items.p-0(titulo="Comunicación asertiva y manejo de expectativas")
            .col-lg-11.mb-0
              .row.justify-content-center.align-items-start.mb-4
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 Uno de los mayores riesgos es generar falsas expectativas. El aprendiz debe ser claro en:
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Limitaciones técnicas:] no se pueden conectar 10 planchas al mismo tiempo porque el sistema se apaga.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Tiempos:] diferenciar entre la fase de prefactibilidad (estudios) y la fase de construcción (obra).
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Corresponsabilidad:] la energía es un derecho, pero su sostenibilidad es un deber compartido.
                .col-lg-6.col-md-10.col-10
                  img(src='@/assets/curso/tema3/10.png', alt='')
              .titulo-sexto.mb-4
                h5 Tabla 5.
                | Herramienta práctica: el "semáforo social" de prefactibilidad
              .tabla-a.tab7
                table
                  thead
                    tr
                      th Color
                      th Estado social
                      th Acción requerida
                  tbody
                    tr.bgr
                      td #[b Verde]
                      td Comunidad organizada, interés alto, JAC activa.
                      td Proceder a la firma de cartas de intención y diseño.
                    tr.bgw
                      td #[b Amarillo]
                      td Dudas sobre el costo, conflictos internos en la vereda.
                      td Realizar talleres de sensibilización y clarificación de costos.
                    tr.bgr
                      td #[b Rojo]
                      td Rechazo al proyecto, desconfianza por promesas previas fallidas.
                      td Detener el diseño técnico y priorizar el diálogo y la transparencia.
              

    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Modelos de gestión y sostenibilidad
    
    p.mb-5(data-aos="fade-right") En este apartado, el aprendiz aprenderá a proponer un esquema de gobernanza. No existe un modelo único; la elección depende de la capacidad organizativa de la comunidad y del tamaño del proyecto.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12 
        .tarjetaf.p-4.mb-0
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 El modelo de autogestión comunitaria (juntas y cooperativas)
                p.mb-4 Es el más común en pequeñas soluciones aisladas (viviendas dispersas o pequeñas veredas).
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Cómo funciona:] la comunidad se organiza bajo una figura legal (junta de acción comunal o asociación de usuarios).
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Responsabilidades:] ellos mismos definen la cuota de mantenimiento, recaudan el dinero y supervisan al técnico local.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Ventajas:] alta apropiación social y costos administrativos bajos.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Riesgos:] si hay conflictos internos en la vereda, el servicio se ve afectado. Requiere mucho apoyo en capacitación contable.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema3/11.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Modelo de operador externo (Empresa de Servicios Públicos - ESP)
                p.mb-4 Se utiliza generalmente en proyectos de mayor escala o micro-redes financiados por el estado.
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Cómo funciona:] una empresa constituida (pública, privada o mixta) asume la responsabilidad total ante la Superintendencia de Servicios Públicos. 
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Responsabilidades:] mantenimiento especializado, facturación profesional y cumplimiento de indicadores de calidad.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Ventajas:] garantiza personal profesional y equipos de repuesto inmediatos.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Riesgos:] la tarifa suele ser más alta y la comunidad puede sentir el proyecto como algo “ajeno”.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema3/11.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 El modelo de comunidades energéticas (Decreto 2236 de 2023)
                p.mb-4 Es la apuesta actual del gobierno colombiano para democratizar la energía.
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Concepto:] la comunidad no es solo usuaria, es socia generadora.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Sostenibilidad:] el excedente de energía que no se consume en las casas se puede vender o usar en un proyecto productivo comunitario (ejemplo: una despulpadora de fruta), y esas ganancias financian el mantenimiento del sistema.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema3/11.png")

    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Matriz de selección del modelo de gestión

    p.mb-5(data-aos="fade-left") Para ayudar al aprendiz a decidir en su documento de prefactibilidad, proponemos esta matriz:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 6.
          | Matriz de selección modelo de gestión
        .tabla-a.tab8
          table
            thead
              tr
                th Factor de decisión
                th Autogestión (Junta)
                th Operador externo (ESP)
                th Comunidad energética
            tbody
              tr.bgr
                td #[b Capacidad técnica Local]
                td Baja / Media.
                td Alta.
                td Media (con asesoría).
              tr.bgw
                td #[b Complejidad del sistema]
                td Baja (sistemas individuales).
                td Alta (micro - redes).
                td Media (proyectos productivos).
              tr.bgr
                td #[b Sentido de pertenencia]
                td Muy Alto.
                td Bajo / medio.
                td Máximo.
              tr.bgw
                td #[b Costo para el usuario]
                td Mínimo (solo costos OPEX).
                td Regulado (tarifa CREG).
                td Variable (según ingresos extra).

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 El operador local: La pieza clave

    p.mb-5(data-aos="fade-right") Independientemente del modelo, el diseño de prefactibilidad debe contemplar la figura del operador Local.

    .bg9.p-lg-5.p-4.mb-0(data-aos="fade-left")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.col-md-2.col-4
          img.mb-4.mb-lg-0.mb-md-0(alt="" src="@/assets/curso/tema3/14.svg")
        .col-lg-11.col-md-9.col-11
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Es un habitante de la zona capacitado por el proyecto.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Realiza el “mantenimiento de primer nivel” (limpieza de paneles, revisión de niveles de batería).
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Es el primer respondiente ante fallas y el enlace con el soporte técnico de nivel superior.


    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Esquemas de recaudo y fondo de reposición:
    
    p.mb-4(data-aos="fade-right") El diseño de prefactibilidad debe ser honesto: la energía "gratis" no existe, aunque el sol no pasa factura, los equipos sí se desgastan. El aprendiz debe aprender a estructurar el flujo de dinero comunitario.
    p.mb-4(data-aos="fade-left") Existen varias formas de recolectar el dinero para el mantenimiento (OPEX), y la elección depende de la cultura local:

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-4.h-100.mb-0
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.mx-3 
            b Cuota fija mensual (tarifa llana)
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Cada familia paga lo mismo (ejemplo: $15.000 COP al mes).
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Pros:] fácil de administrar para una junta.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Contras:] no incentiva el ahorro; ya que quien consume más paga lo mismo que quien tiene un consumo mínimo.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.mx-3  
            b Pago por consumo (medición)
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Se instalan medidores y se cobra por kWh consumido.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Pros:] es lo más justo y promueve la eficiencia energética.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Contras:] requiere inversión inicial en medidores y una gestión contable más compleja.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-4.h-100.mb-0
          .tarjeta-numerada__numero
            .h2 3
          p.text-center.mx-3  
            b Sistemas de prepago (energía por códigos)
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 El usuario compra una tarjeta o un código en la tienda de la vereda y lo ingresa al medidor.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Pros:] elimina la morosidad y permite al usuario controlar su gasto según sus ingresos semanales.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.hh.p-4.h-100.mb-0
          .tarjeta-numerada__numero
            .h2 4
          p.text-center.mx-3  
            b Contribución en especie o trabajo:
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 En comunidades muy pobres, una parte del pago puede ser mano de obra (limpieza de la zona, vigilancia) o productos locales, aunque esto es difícil de convertir en dinero para repuestos técnicos.
  
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 El fondo de reposición 

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-9
        p.mb-4 Este es el concepto más importante que se debe transmitir a la comunidad. El dinero recaudado no debe gastarse todo en el técnico local; debe dividirse en dos "bolsillos":
        .row.mb-0
          .col-lg-6.pe-lg-0.col-md-7.col-10.mb-lg-0.mb-4
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema3/19.png', alt='')
          .col-lg-6.ps-lg-0.pe-lg-0.mb-0
            .bg833.p-4
              p.mb-0.mx-lg-2 
              ul.lista-ul.mb-0
                li.d-flex.mb-4
                  i.fas.fa-circle-check
                  p.mb-0 #[b Bolsillo de operación (gasto diario):] para el pago del operador local, artículos de limpieza y pequeñas reparaciones.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Bolsillo de reposición (ahorro a largo plazo):] dinero "sagrado" que se guarda en una cuenta bancaria o caja fuerte para comprar las baterías nuevas en el año 5 o 7, y el inversor en el año 10.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/15.png', alt='')

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Estrategias contra la morosidad

    p.mb-4(data-aos="fade-right") El proyecto de prefactibilidad debe prever qué pasará si alguien no paga:

    .row.mb-5(data-aos="fade-left")
      .col-lg-12
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 #[b Sanciones sociales:] acuerdos en asamblea (ejemplo: no poder usar la despulpadora comunitaria).
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 #[b Corte del servicio:] procedimiento técnico para desconectar al usuario moroso.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 #[b Fondo de solidaridad:] un pequeño excedente en la tarifa de los que más tienen para cubrir emergencias de familias en pobreza extrema.

    .row.mb-5(data-aos="fade-right")         
      .col-lg-12
        img(src='@/assets/curso/tema3/16.svg' alt='AvatarTop')

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Transparencia y rendición de cuentas

    p.mb-4(data-aos="fade-right") Para que la gente pague, debe confiar. El esquema debe incluir:

    .row.justify-content-center.align-items-stretch.mb-0(data-aos="fade-left") 
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg4.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/17.png')
          h3.mb-4.text-center.text-white Cartelera pública
          p.mb-0.text-white Donde se anote mensualmente cuánto se recogió y en qué se gastó.
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg5.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/18.png')
          h3.mb-4.text-center Auditoría social
          p.mb-lg-4 Un comité de vigilancia elegido por la comunidad que revise las cuentas cada 3 meses.


</template>

<script>
export default {
  name: 'Tema3',
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
