export default {
  global: {
    Name: 'Planeación organizacional y gestión de procesos participativos',
    Description:
      'El componente formativo desarrolla habilidades para reconocer, analizar y establecer modelos organizacionales mediante criterios técnicos, necesidades del entorno y procesos participativos. Aborda conceptos y herramientas de desarrollo rural, organización comunitaria, diagnóstico participativo y análisis organizacional. Además, fortalece capacidades para la identificación de actores, formulación de estrategias y planes de acción, gestión organizacional, articulación territorial y mejoramiento continuo en contextos agropecuarios y comunitarios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Desarrollo rural, organización comunitaria y marco normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Desarrollo rural, políticas agrarias y desarrollo territorial en Colombia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Organización comunitaria, asociatividad rural y Agricultura Campesina, Familiar y Comunitaria (ACFC)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Participación comunitaria y fortalecimiento organizacional',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Jerarquía normativa y marco legal del sector agropecuario',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Sistema Nacional de Innovación Agropecuaria (SNIA), Ley 1876 de 2017 y normatividad complementaria',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diagnóstico participativo y análisis organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Metodologías participativas y diagnóstico rural participativo (DRP)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Identificación de actores, población objetivo y caracterización del entorno',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Factores internos y externos de la organización',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Identificación, priorización y solución de problemáticas organizacionales',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Clasificación, registro de usuarios y manejo de información organizacional',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelo organizacional y trabajo participativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Concepto, tipos y características de los modelos organizacionales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Características de las organizaciones rurales y comunitarias',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Criterios técnicos, herramientas e indicadores para el análisis organizacional',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Trabajo en equipo, roles y responsabilidades organizacionales',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Liderazgo, comunicación y estrategias de participación colaborativa',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Planeación estratégica y formulación del plan de acción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto, características y tipos de planeación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Planeación estratégica y formulación de estrategias organizacionales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas e instrumentos para la planeación participativa',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Construcción y formulación del plan de acción',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Implementación, seguimiento y evaluación del plan de acción',
            hash: 't_4_5',
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'ACFC (Agricultura Campesina, Familiar y Comunitaria)',
      significado:
        'Modelo de producción agropecuaria desarrollado principalmente por familias y comunidades rurales, orientado a la seguridad alimentaria, la sostenibilidad y el desarrollo territorial.',
    },
    {
      termino: 'Actores territoriales',
      significado:
        'Personas, grupos, organizaciones o instituciones que influyen o participan en los procesos de desarrollo de un territorio.',
    },
    {
      termino: 'Análisis organizacional',
      significado:
        'Proceso mediante el cual se evalúan las características, fortalezas, debilidades, capacidades y necesidades de una organización para mejorar su funcionamiento.',
    },
    {
      termino: 'Asociatividad rural',
      significado:
        'Estrategia mediante la cual productores y comunidades rurales se organizan para alcanzar objetivos comunes y mejorar sus condiciones económicas y sociales.',
    },
    {
      termino: 'Caracterización',
      significado:
        'Proceso de identificación y descripción de las principales características de una población, organización o territorio.',
    },
    {
      termino: 'Criterios técnicos',
      significado:
        'Conjunto de parámetros, lineamientos e indicadores utilizados para analizar, evaluar o tomar decisiones dentro de una organización o proyecto.',
    },
    {
      termino: 'Diagnóstico Rural Participativo (<em>DRP</em>)',
      significado:
        'Metodología participativa que permite a las comunidades analizar su realidad, identificar necesidades y formular propuestas de desarrollo.',
    },
    {
      termino: 'Entorno organizacional',
      significado:
        'Conjunto de factores internos y externos que influyen en el funcionamiento y desempeño de una organización.',
    },
    {
      termino: 'Factores externos',
      significado:
        'Elementos del contexto social, económico, político, ambiental o cultural que pueden afectar positiva o negativamente a una organización.',
    },
    {
      termino: 'Factores internos',
      significado:
        'Recursos, capacidades, estructuras y procesos propios de una organización que determinan su desempeño.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'Capacidad de orientar, motivar y coordinar a un grupo de personas para alcanzar objetivos comunes.',
    },
    {
      termino: 'Modelo organizacional',
      significado:
        'Estructura que define la forma en que una organización distribuye funciones, responsabilidades y procesos para cumplir sus objetivos.',
    },
    {
      termino: 'Participación comunitaria',
      significado:
        'Proceso mediante el cual las personas intervienen activamente en la identificación de necesidades, la toma de decisiones y la ejecución de acciones colectivas.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'Herramienta de gestión que organiza las actividades, responsables, recursos y tiempos necesarios para alcanzar objetivos previamente establecidos.',
    },
    {
      termino: 'Planeación estratégica',
      significado:
        'Proceso de definición de objetivos, metas y estrategias que orientan el desarrollo de una organización en el mediano y largo plazo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia de Desarrollo Rural (ADR). (2023). <em>Perfil de proyectos de extensión agropecuaria</em>. Agencia de Desarrollo Rural.',
      link:
        'https://www.adr.gov.co/wp-content/uploads/2023/03/Perfil-de-Proyectos-de-Extension-Agropecuaria_-Agencia-de-Desarrollo-Rural_2023.pdf',
    },
    {
      referencia:
        'Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR). (2024, agosto). <em>Herramienta para el diagnóstico participativo</em>. ACNUR.',
      link:
        'https://www.acnur.org/sites/default/files/2025-02/herramienta-para-el-diagnostico-participativo-es.pdf',
    },
    {
      referencia:
        'Corporación Colombiana de Investigación Agropecuaria (AGROSAVIA). (2021). <em>Capacidad científica y tecnológica del Sistema Nacional de Innovación Agropecuaria (SNIA) en Colombia</em>. Editorial AGROSAVIA.',
      link:
        'https://editorial.agrosavia.co/index.php/publicaciones/catalog/view/212/194/1312-1',
    },
    {
      referencia:
        'Food and Agriculture Organization de las Naciones Unidas (FAO). (2021). <em>Documentación de experiencias de sistemas territoriales de innovación agropecuaria en Colombia</em>. FAO.',
      link:
        'https://sembrandocapacidades.fao.org.co/documentos/documentacion-experiencias-de-sistemas-territoriales-de-innovacion-agropecuaria-en-colombia/',
    },
    {
      referencia:
        'Liderazgo Empresarial. (s. f.). <em>¿Cuáles son las principales características de los modelos participativos?</em>',
      link:
        'https://liderazgoempresarial.info/cuales-son-las-principales-caracteristicas-de-los-modelos-participativos/',
    },
    {
      referencia:
        'Web y Empresas. (s. f.). <em>Principio de las premisas de planeación</em>. Web y Empresas.',
      link:
        'https://www.webyempresas.com/principio-de-las-premisas-de-planeacion/',
    },
    {
      referencia:
        'Zona Económica. (s. f.). <em>Planeación estratégica</em>. Zona Económica.',
      link: 'https://www.zonaeconomica.com/planeacion-estrategica',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Nacional Ecosistema de Recursos Educativos Digitales (RED) - Profesional 06',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto Temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
