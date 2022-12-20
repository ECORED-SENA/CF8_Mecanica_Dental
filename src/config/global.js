export default {
  global: {
    componenteFormativo: 'Análisis de la prótesis fija',
    descripcionCurso:
      'En la elaboración de la prótesis fija es importante tener presente el uso de las buenas prácticas en la confección de los dispositivos, de esta manera poder dar cumplimiento en la fabricación de dispositivos, garantizando así el cumplimiento de las necesidades del mercado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normativa nacional para los laboratorios de mecánica dental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Lineamientos para su funcionamiento',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Equipamiento',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Talento humano',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Prótesis',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios de la prótesis fija',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Evolución de la prótesis fija',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Función de la prótesis fija',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Indicaciones y precauciones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de prótesis',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Dentosoportada',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Implantosoportada',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Biomateriales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Clasificación',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Cerámicas',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Metales',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Manipulación',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Anatomía y morfología',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Protocolo de elaboración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Manejo de equipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Prescripción clínica',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
      tema: 'Prótesis',
      referencia:
        'Odontoespecialistas. (2019). Qué son las prótesis fijas / Odontoespecialistas',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=MB1OxBZmwRQ&ab_channel=Odontoespecialistas ',
    },
    {
      tema: 'Cerámicas',
      referencia:
        'Vita. (2022). Cerámica dental de feldespato, un producto natural.',
      tipo: 'Ejemplo de fichas técnicas cerámicas ',
      link:
        'https://www.vita-zahnfabrik.com/es/VITA-Ceramica-dental-55913,157303.html',
    },
  ],
  glosario: [
    {
      termino: 'Alginato',
      significado:
        'Es un material elástico que sirve para la toma de impresiones dentales, teniendo como objetivo principal obtener una réplica exacta de los tejidos duros y blandos de la cavidad oral.',
    },
    {
      termino: 'Arenar',
      significado:
        'Consiste en quitar los excesos de revestimiento a las piezas, para ello se usa la máquina arenadora.',
    },
    {
      termino: 'Base',
      significado:
        'Parte de la prótesis que contiene los dientes artificiales y que encaja sobre la encía.',
    },
    {
      termino: 'CAD-CAM',
      significado:
        '(Computer-aid-design-computer aid manufacturing) programa informático de diseño y fabricación asistido por ordenador.',
    },
    {
      termino: 'Conector',
      significado: 'Es la estructura que une los retenedores con el póntico.',
    },
    {
      termino: 'Cubetas individuales',
      significado:
        'Son instrumentos que se realizan cuando las cubetas estándar no se adaptan bien al paciente para la toma del registro de la boca.',
    },
    {
      termino: 'Curva de compensación',
      significado:
        'Curvatura anteroposterior y lateral en el alineamiento de las superficies oclusales y los bordes incisales de los dientes artificiales, que se emplea para conseguir una oclusión equilibrada durante los movimientos mandibulares.',
    },
    {
      termino: 'Dientes pilares',
      significado:
        'Son los dientes remanentes que sirven de soporte al puente.',
    },
    {
      termino: 'Dientes remanentes',
      significado: 'Piezas que conserva el paciente.',
    },
    {
      termino: 'Estética',
      significado: 'Diseño, en cierta medida, de la cara del paciente.',
    },
    {
      termino: 'Estructura mecanizada presinterizada',
      significado:
        'Estructura fresada de zirconita aún no completamente endurecida de la manera indicada.',
    },
    {
      termino: 'Estructura mecanizada sinterizada',
      significado:
        'Estructura fresada que ya presenta la dureza y las características recomendadas.',
    },
    {
      termino: 'Fraguado',
      significado: 'Endurecimiento del revestimiento.',
    },
    {
      termino: 'Muñón',
      significado:
        'Superficie dentaria que queda tras el tallado y que es apta para recibir la corona artificial.',
    },
    {
      termino: 'Obturación',
      significado:
        'Es una restauración de algún diente que ha sido dañado por caries, comúnmente es conocido como empaste dental.',
    },
    {
      termino: 'Oclusión',
      significado: 'Contacto entre los dientes superiores e inferiores.',
    },
    {
      termino: 'Oclusión dentaria (Angle)',
      significado: 'Relación de las arcadas entre sí.',
    },
    {
      termino: 'Odontología',
      significado:
        'Es una de las ciencias de la salud que se encarga del diagnóstico, tratamiento y prevención de las enfermedades del aparato estomatognático, que incluye los dientes, el periodonto, la articulación temporomandibular, el sistema neuromuscular y todas las estructuras de la cavidad oral como la lengua, el paladar, la mucosa oral y las glándulas salivales.',
    },
    {
      termino: 'Pinza de mosquito',
      significado:
        'Instrumental que se usa para sujetar la pieza en la que se quiere  plicar el opaque por medio del jito.',
    },
    {
      termino: 'Pilar',
      significado:
        'El diente pilar es un punto fijado que se sitúa en el interior de la cavidad oral, y se emplea a fin de soportar un diente artificial o prótesis dental.',
    },
    {
      termino: 'Póntico',
      significado: 'Es el diente postizo que reemplaza al perdido.',
    },
    {
      termino: 'Posición dentaria',
      significado:
        'Es la “posición de equilibrio muscular”, donde los dientes se colocan en la posición donde exista un equilibrio.',
    },
    {
      termino: 'Prótesis dental',
      significado:
        'Es un elemento artificial destinado para suplir la ausencia dentaria, restaurando la anatomía de una o varias piezas.',
    },
    {
      termino: 'Prueba del bizcocho',
      significado:
        'Consiste en la colocación de la corona (no glaseada) en boca del paciente sobre el muñón, para poder comprobar que en el laboratorio han colocado la cerámica correctamente.',
    },
    {
      termino: 'Puente',
      significado: 'Prótesis que reemplaza uno o varios dientes ausentes.',
    },
    {
      termino: 'Pulido',
      significado:
        'Procedimiento superficial que consiste en un desgaste por frotación o abrasión para conseguir una prótesis totalmente lisa.',
    },
    {
      termino: 'Rebase',
      significado:
        'Método de reajuste de la prótesis que consiste en reemplazar parte del material de la base, consiguiendo el ajuste sin modificar la posición de los dientes.',
    },
    {
      termino: 'Rebordes marginales ',
      significado:
        'Elevación del esmalte que se encuentra en mesial y distal de la cara oclusal de premolares y molares, siendo la zona donde finalizan surcos secundarios.',
    },
    {
      termino: 'Restauración',
      significado:
        'Procedimiento que consiste en reemplazar por medios artificiales los dientes o parte de ellos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Carrerelo. (s.f.). ¿Por qué las prótesis fijas (Sistema Phibo) son la mejor opción para restaurar piezas dentales? Carrerelo',
      link:
        'https://dentalcarralero.com/tratamientos/protesis-fija-sistema-phibo',
    },
    {
      referencia:
        'Decreto 4725 de 2005. [Ministerio de la Protección Social]. Por el cual se reglamenta el régimen de registros sanitarios, permiso de comercialización y vigilancia sanitaria de los dispositivos médicos para uso humano. Diciembre 26 de 2005.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-4725-de-2005.pdf',
    },
    {
      referencia:
        'Esponda, R. (2019). Anatomía dental. Universidad Nacional Autónoma de México (UNAM).',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/187393',
    },
    {
      referencia:
        'García, V. (2017). La enseñanza bimodal en la asignatura "Dentaduras parciales removibles" y su incidencia en el rendimiento estudiantil. Universidad Central de Venezuela.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/112051',
    },
    {
      referencia:
        'Ley estatutaria 1618 de 2013. Por medio de la cual se establecen las disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad. Junio de 2017.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/PS/documento-balance-1618-2013-240517.pdf',
    },
    {
      referencia:
        'Matiz, J. (2014). Temas de rehabilitación oral: acrílicos dentales. 1. Clínica-laboratorio. Ecoe Ediciones.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/122433',
    },
    {
      referencia:
        'McCracken, M. (1999). Dental implant materials. Commercially pure titanium and titanium alloys. Journal  of prosthodontics  (8), p.40-43.',
    },
    {
      referencia:
        'Resolución 2113 de 2021. [Ministerio de Salud y Protección Social]. Por la cual se establecen los requisitos sanitarios que deben cumplir los dispositivos médicos sobre medida bucal y los establecimientos que los fabrican, reparan, dispensan y adaptan, y se adoptan las guías de verificación. Diciembre 16 de 2021.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.2113%20del%202021.pdf',
    },
    {
      referencia:
        'Riojas, M. (2014). Anatomía dental (2da. ed.). Editorial El Manual Moderno.',
      link:
        'https://www.academia.edu/36436803/Anatomia_Dental_Riojas_Garza_pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel L. Toro A.',
        cargo: 'Instructor',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Paola Alexandra Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Polanco',
        cargo: 'Validación diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Validación de maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Camila Ovalle Ospina',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
