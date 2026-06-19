<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Cuestionario de evaluación de conocimientos sobre planeación organizacional y gestión de procesos participativos.s',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el nivel de comprensión y apropiación de los conceptos, principios, herramientas y metodologías relacionados con el desarrollo rural, el diagnóstico participativo, los modelos organizacionales, el trabajo colaborativo y la planeación estratégica, con el fin de verificar la capacidad del aprendiz para reconocer, analizar y estructurar procesos organizacionales de acuerdo con las necesidades del entorno y los criterios técnicos establecidos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los propósitos principales del desarrollo rural?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar únicamente la producción agrícola.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejorar las condiciones económicas, sociales y ambientales de las comunidades rurales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir las organizaciones comunitarias por entidades privadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la participación de los productores rurales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 2,
          texto: 'La asociatividad rural se caracteriza por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La competencia entre productores de una misma región.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La eliminación de los procesos comunitarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La dependencia exclusiva de recursos externos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La organización colectiva para alcanzar objetivos comunes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 3,
          texto:
            'La Agricultura Campesina, Familiar y Comunitaria (ACFC) reconoce:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La producción industrial como único modelo de desarrollo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El papel de las familias rurales en la producción de alimentos y el desarrollo territorial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La sustitución de los saberes tradicionales por tecnología externa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La reducción de la participación comunitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 4,
          texto: 'La participación comunitaria permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Concentrar las decisiones en un solo líder.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Delegar todas las responsabilidades a entidades externas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Involucrar a las personas en la identificación de necesidades y toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar la intervención de los actores locales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 5,
          texto:
            'Dentro de la jerarquía normativa colombiana, la norma de mayor nivel es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La resolución.', esCorrecta: false },
            { id: 'b', texto: 'El decreto.', esCorrecta: false },
            {
              id: 'c',
              texto: 'La circular administrativa.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'La Constitución Política.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 6,
          texto:
            'El Sistema Nacional de Innovación Agropecuaria (SNIA) tiene como finalidad:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular exclusivamente la comercialización agrícola.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer los procesos de innovación y extensión agropecuaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Administrar los recursos tributarios municipales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Supervisar únicamente proyectos ambientales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 7,
          texto: 'El Diagnóstico Rural Participativo (DRP) se caracteriza por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser elaborado únicamente por expertos externos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Excluir a la comunidad de la toma de decisiones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Promover la participación activa de la comunidad en el análisis de su realidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Utilizar exclusivamente información estadística.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 8,
          texto: 'Una de las técnicas más utilizadas en el DRP es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La auditoría financiera.', esCorrecta: false },
            { id: 'b', texto: 'La cartografía social.', esCorrecta: true },
            { id: 'c', texto: 'El peritaje judicial.', esCorrecta: false },
            { id: 'd', texto: 'La licitación pública.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 9,
          texto: 'La identificación de actores permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reconocer las personas e instituciones que influyen en los procesos organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Determinar únicamente la cantidad de habitantes de una comunidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clasificar cultivos según su productividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer impuestos territoriales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 10,
          texto: 'Los factores internos de una organización incluyen:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Las políticas nacionales.', esCorrecta: false },
            { id: 'b', texto: 'El clima de la región.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Los recursos, capacidades y estructura organizativa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Las condiciones del mercado internacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 11,
          texto: 'La matriz DOFA es una herramienta utilizada para:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calcular costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar fortalezas, oportunidades, debilidades y amenazas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar presupuestos financieros.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Diseñar sistemas de riego.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 12,
          texto: 'Un modelo organizacional corresponde a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un documento legal de constitución empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un mecanismo de control tributario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una estrategia de comercialización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La estructura y forma de funcionamiento de una organización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 13,
          texto: '¿Cuál de los siguientes es un modelo organizacional?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Modelo participativo.', esCorrecta: true },
            { id: 'b', texto: 'Modelo tributario.', esCorrecta: false },
            { id: 'c', texto: 'Modelo presupuestal.', esCorrecta: false },
            { id: 'd', texto: 'Modelo contractual.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 14,
          texto:
            'Una característica de las organizaciones rurales y comunitarias es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La búsqueda de beneficios individuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La participación colectiva y el trabajo colaborativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La exclusión de actores territoriales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La dependencia exclusiva de entidades públicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 15,
          texto: 'Los indicadores organizacionales permiten:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir el desempeño y cumplimiento de objetivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir los procesos de planeación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar únicamente el número de integrantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 16,
          texto: 'El trabajo en equipo favorece:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La concentración de funciones en una sola persona.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La reducción de la participación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación de responsabilidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cooperación para alcanzar objetivos comunes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 17,
          texto: 'El liderazgo participativo se caracteriza por:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tomar decisiones sin consultar al grupo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Delegar todas las funciones a terceros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener una estructura exclusivamente vertical.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Promover la participación de los integrantes en la toma de decisiones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 18,
          texto: 'La planeación estratégica busca:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir el rumbo y los objetivos de la organización a mediano y largo plazo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Controlar únicamente los recursos financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar informes estadísticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir los procesos participativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 19,
          texto: 'Un plan de acción debe incluir:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Objetivos, actividades, responsables y recursos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente el presupuesto disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente las metas financieras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solamente los resultados esperados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
        {
          id: 20,
          texto: 'El seguimiento y evaluación del plan de acción permiten:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limitar la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar la ejecución de actividades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar avances, identificar dificultades y apoyar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de indicadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planeación organizacional y gestión de procesos participativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación organizacional y gestión de procesos participativos.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la planeación organizacional y gestión de procesos participativos.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
