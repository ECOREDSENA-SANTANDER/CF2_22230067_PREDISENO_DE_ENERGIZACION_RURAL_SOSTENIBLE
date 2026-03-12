export default {
  global: {
    Name: 'Prefactibilidad de proyecto energético rural',
    Description:
      'La estructuración de proyectos de energización rural sostenible integra requisitos legales y normativos vigentes en Colombia, junto con la evaluación de viabilidad financiera mediante indicadores de rentabilidad y sostenibilidad. Asimismo, incorpora gestión social y apropiación comunitaria como pilares fundamentales, articulando estrategias de mitigación de riesgos ambientales y esquemas de monitoreo tecnológico para garantizar eficiencia operativa sostenible a largo plazo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco normativo y regulatorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Regulación en Zonas No Interconectadas (ZNI): El papel de la CREG y el IPSE',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Estándares técnicos: RETIE y normativas específicas para FNCER',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Viabilidad y sostenibilidad financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fuentes de financiación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Indicadores de rentabilidad social y económica',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión social y apropiación comunitaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Modelos de gestión y sostenibilidad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Esquemas de recaudo y fondo de reposición:',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Viabilidad ambiental y gestión de riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Monitoreo, control y evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Subtema 1',
            hash: 't_1_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'CAPEX',
      significado:
        'inversión inicial de capital necesaria para adquirir los activos del proyecto (equipos, transporte y trámites).',
    },
    {
      termino: 'Comunidades energéticas',
      significado:
        'figura jurídica donde los usuarios se asocian para generar, gestionar y comercializar su propia energía renovable.',
    },
    {
      termino: 'Consulta previa',
      significado:
        'proceso obligatorio de diálogo con comunidades étnicas cuando se planean proyectos en sus territorios.',
    },
    {
      termino: 'FNCER',
      significado:
        'fuentes No Convencionales de Energía Renovable (solar, eólica, biomasa, pequeña hidro, geotermia).',
    },
    {
      termino: 'HSP (Horas Solares Pico)',
      significado:
        'medida de radiación solar que equivale a una hora de sol con una intensidad constante de $1000 W / m^2$.',
    },
    {
      termino: 'Inversor',
      significado:
        'equipo que convierte la corriente continua (DC) de los paneles/baterías en corriente alterna (AC) para uso doméstico.',
    },
    {
      termino: 'LCOE',
      significado:
        'costo nivelado de la energía; el costo promedio por cada unidad de energía generada durante toda la vida útil del sistema.',
    },
    {
      termino: 'Logística inversa',
      significado:
        'planificación del retorno de residuos peligrosos (como baterías usadas) al fabricante para su reciclaje.',
    },
    {
      termino: 'OPEX',
      significado:
        'gastos operativos mensuales o anuales necesarios para el mantenimiento y funcionamiento del proyecto.',
    },
    {
      termino: '<em>Payback</em>',
      significado:
        'tiempo estimado en el que los ahorros o beneficios del proyecto cubren el valor de la inversión inicial.',
    },
    {
      termino: 'RETIE',
      significado:
        'Reglamento Técnico de Instalaciones Eléctricas; norma obligatoria de seguridad eléctrica en Colombia.',
    },
    {
      termino: '<em>SoH (State of Health)</em>',
      significado:
        'estado de salud de la batería; porcentaje de capacidad de almacenamiento que le queda frente a su estado original.',
    },
    {
      termino: 'ZNI',
      significado:
        'Zonas No Interconectadas; territorios que no están conectados a la red eléctrica nacional de Colombia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2021). Ley 2099 de 2021: Por medio de la cual se dictan disposiciones para la Transición Energética, la dinamización del Mercado Energético, la reactivación económica del país y se dictan otras disposiciones. Diario Oficial No. 51.738.',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (DNP). (2022). Plan Nacional de Desarrollo 2022-2026: Colombia Potencia Mundial de la Vida. (Capítulo sobre Transición Energética).',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (s.f.). Funcionamiento del Sector.',
    },
    {
      referencia:
        'Semana. (2024, Julio 16). En pleno siglo XXI, 8,4 millones de colombianos se alumbran con vela: resultados del Índice de Pobreza Energética. Revista Semana.',
    },
    {
      referencia:
        'Redacción El País. (2023, 20 de Octubre). De la protesta a la propuesta: campesinos crean la primera escuela de energías limpias de Colombia. El País.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gianmarco Serrano Cabarcas',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
