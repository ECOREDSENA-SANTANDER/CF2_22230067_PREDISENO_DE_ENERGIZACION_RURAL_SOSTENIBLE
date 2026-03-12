<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Prefactibilidad de proyecto energético rural.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la introducción en un proyecto energético rural?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir únicamente el presupuesto del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presentar los costos de operación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Contextualizar el proyecto y exponer sus objetivos generales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Establecer las tarifas del servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'El marco normativo y regulatorio permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la demanda energética.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer reglas y lineamientos para la implementación del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar los costos de inversión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir el estudio técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'En las Zonas No Interconectadas (ZNI), la regulación busca principalmente:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la competencia internacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Privatizar todos los sistemas energéticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Garantizar la prestación eficiente y sostenible del servicio.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Eliminar subsidios.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'La CREG tiene como función principal:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar obras de infraestructura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar recursos comunitarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Regular los servicios públicos de energía.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Financiar proyectos privados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'El IPSE se encarga de:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Supervisar bancos internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Promover soluciones energéticas en zonas no interconectadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar normas ambientales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar impuestos municipales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'El RETIE establece:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tarifas de energía.', esCorrecta: false },
            { id: 'b', texto: 'Subsidios económicos.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'Requisitos técnicos para instalaciones eléctricas seguras.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Indicadores financieros.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'Las FNCER se caracterizan por:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Depender exclusivamente de combustibles fósiles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Provenir de fuentes renovables no convencionales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tener altos niveles de contaminación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser exclusivamente hidráulicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'La viabilidad financiera permite:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la gestión social.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar si el proyecto puede sostenerse económicamente en el tiempo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la evaluación ambiental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la demanda energética.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Prefactibilidad de proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'Una fuente de financiación puede ser:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente recursos privados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Recursos públicos, cooperación internacional o inversión privada.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Multas ambientales.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Donaciones informales sin control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'Un indicador de rentabilidad económica es:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nivel de participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cantidad de usuarios conectados.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Valor Presente Neto.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Número de reuniones sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'La gestión social busca principalmente:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir los costos técnicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fortalecer la apropiación comunitaria del proyecto.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Aumentar impuestos.', esCorrecta: false },
            { id: 'd', texto: 'Centralizar decisiones.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'La apropiación comunitaria contribuye a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la vida útil del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar la operación y mantenimiento en el tiempo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de capacitación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar controles financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'Un modelo de gestión adecuado debe:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Omitir procesos de recaudo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Depender solo del gobierno nacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir responsabilidades claras para la administración del sistema.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Excluir a la comunidad.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'El esquema de recaudo permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Financiar la operación y mantenimiento del sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Suspender el servicio periódicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los costos de reposición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la participación comunitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'El fondo de reposición tiene como objetivo:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar la sustitución de equipos al final de su vida útil.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Financiar campañas publicitarias.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Cubrir gastos personales.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Pagar salarios administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'La viabilidad ambiental busca:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la explotación de recursos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la participación social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Minimizar impactos negativos sobre el entorno natural.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar requisitos técnicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'La gestión de riesgos implica:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la evaluación financiera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir la normativa vigente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar, analizar y mitigar posibles amenazas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ignorar amenazas potenciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'El monitoreo y control permiten:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Suspender la operación.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Reducir la demanda energética.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar la rendición de cuentas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluar el desempeño del sistema y realizar ajustes oportunos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'La evaluación periódica contribuye a:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la eficiencia y sostenibilidad del proyecto.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Incrementar riesgos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de mantenimiento.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Disminuir la vida útil.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La sostenibilidad integral de un proyecto energético rural depende de:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo la tecnología instalada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente la inversión inicial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente la regulación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La articulación entre aspectos técnicos, financieros, sociales y ambientales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos relacionados con la prefactibilidad de un proyecto energético rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo “Prefactibilidad de proyecto energético rural”.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
