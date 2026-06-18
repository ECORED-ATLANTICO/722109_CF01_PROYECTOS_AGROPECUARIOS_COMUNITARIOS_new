<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Planeación estratégica y formulación del plan de acción

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La planeación estratégica y la formulación del plan de acción constituyen procesos fundamentales para orientar el desarrollo y fortalecimiento de las organizaciones rurales y comunitarias. A través de la planeación es posible definir objetivos, organizar actividades, optimizar recursos y establecer estrategias que permitan responder de manera adecuada a las necesidades del entorno y a las dinámicas organizacionales.

    p.mb-4(data-aos="zoom-in-right") En las organizaciones comunitarias, la planeación facilita la toma de decisiones, fortalece la participación de los actores involucrados y contribuye al cumplimiento de metas institucionales y territoriales. Asimismo, permite anticipar dificultades, coordinar esfuerzos y promover procesos organizativos más eficientes y sostenibles.

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                p.mb-0 La formulación de planes de acción y estrategias organizacionales requiere la participación de la comunidad, el análisis de problemáticas y la utilización de herramientas técnicas que faciliten la organización de actividades y el seguimiento de resultados. De esta manera, las organizaciones pueden fortalecer sus capacidades de gestión y mejorar su impacto en el territorio.
              .bloque-enlace__accion

    .cajon.color-acento-contenido.p-4(data-aos="zoom-in-right")
      p.mb-0 El seguimiento y la evaluación también forman parte de los procesos de planeación, ya que permiten verificar el cumplimiento de las acciones programadas, analizar resultados y promover procesos de mejoramiento continuo dentro de la organización.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1 Concepto, características y tipos de planeación
    .mb-0 

    .bg_img_3.mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema4/img_3.png', class="img-fluid")
        .col-12.col-lg-8.mb-3.mb-lg-0
          p.mb-4(data-aos="zoom-in-right") La planeación es un proceso orientado a definir objetivos, estrategias y actividades necesarias para alcanzar resultados específicos dentro de una organización o comunidad. Este proceso permite organizar recursos, establecer prioridades y orientar las acciones hacia el cumplimiento de metas institucionales y comunitarias. La planeación facilita la toma de decisiones y contribuye a mejorar la coordinación de actividades, la gestión organizacional y el aprovechamiento de recursos disponibles. Además, permite anticipar dificultades y formular estrategias para enfrentar diferentes situaciones del entorno.
          p.mb-4(data-aos="zoom-in-right") Entre las principales características de la planeación se destacan:
          ul.list-unstyled.mb-0
            li.d-flex.align-items-baseline.mb-3(data-aos="zoom-in-right")
              i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
              span Definición de objetivos y metas.
            li.d-flex.align-items-baseline.mb-3(data-aos="zoom-in-right")
              i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
              span Organización de actividades y recursos.
            li.d-flex.align-items-baseline.mb-3(data-aos="zoom-in-right")
              i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
              span Toma de decisiones.
            li.d-flex.align-items-baseline.mb-3(data-aos="zoom-in-right")
              i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
              span Participación de los actores involucrados.
            li.d-flex.align-items-baseline.mb-3(data-aos="zoom-in-right")
              i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
              span Seguimiento y evaluación de resultados.
            li.d-flex.align-items-baseline.mb-0(data-aos="zoom-in-right")
              i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
              span Orientación hacia el mejoramiento organizacional.

    p.mb-4(data-aos="zoom-in-right") La planeación puede desarrollarse en diferentes niveles según las necesidades y objetivos de la organización; entre esos niveles tenemos los siguientes tipos de planeación:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center.align-items-center(titulo="Planeación estratégica")
        .col-12.col-lg-9.mb-3.mb-lg-0.order-2.order-lg-1
          p.mb-0 Define la visión, objetivos y proyección de la organización a mediano y largo plazo. Orienta las acciones de desarrollo, fortalece la toma de decisiones y contribuye a la construcción de una visión compartida sobre el futuro del territorio y de la organización.
        .col-12.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema4/img_4.png', class="img-fluid")
      .row.justify-content-center.align-items-center(titulo="Planeación táctica")
        .col-12.col-lg-9.mb-3.mb-lg-0.order-2.order-lg-1
          p.mb-0 Organiza acciones específicas para cumplir objetivos institucionales. Permite coordinar actividades productivas, comunitarias y organizacionales, asignar responsabilidades y establecer mecanismos de seguimiento para alcanzar los objetivos propuestos.
        .col-12.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema4/img_5.png', class="img-fluid")
      .row.justify-content-center.align-items-center(titulo="Planeación operativa")
        .col-12.col-lg-9.mb-3.mb-lg-0.order-2.order-lg-1
          p.mb-0 Define actividades concretas, tiempos y responsables. Facilita además la implementación de proyectos, la organización del trabajo diario y el cumplimiento eficiente de las metas establecidas.
        .col-12.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema4/img_6.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0(data-aos="flip-left") 
        .cajon.color-acento-botones.p-4(data-aos="zoom-in-right")
          p.mb-0 #[strong NOTA:] la articulación entre estos tipos de planeación permite mejorar la gestión organizacional y fortalecer el cumplimiento de objetivos comunitarios y territoriales.

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2 Planeación estratégica y formulación de estrategias organizacionales
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-3.mb-lg-0.order-2.order-lg-1
        p.mb-4(data-aos="zoom-in-right") La planeación estratégica es un proceso que permite definir el rumbo y la proyección de una organización a mediano y largo plazo. Mediante este proceso se establecen objetivos, metas y estrategias orientadas al fortalecimiento institucional y al mejoramiento de las capacidades organizacionales. La planeación estratégica facilita la identificación de prioridades y la formulación de acciones acordes con las necesidades y características del entorno. Asimismo, permite organizar recursos y orientar los esfuerzos de la organización hacia el cumplimiento de objetivos comunes.
        p.mb-4(data-aos="zoom-in-right") El proceso de planeación estratégica generalmente incluye:
        ul.list-unstyled.mb-0
          li.d-flex.align-items-baseline.mb-3(data-aos="zoom-in-right")
            i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
            span Análisis del entorno y de la organización.
          li.d-flex.align-items-baseline.mb-3(data-aos="zoom-in-right")
            i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
            span Identificación de necesidades y problemáticas.
          li.d-flex.align-items-baseline.mb-3(data-aos="zoom-in-right")
            i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
            span Definición de misión, visión y objetivos.
          li.d-flex.align-items-baseline.mb-3(data-aos="zoom-in-right")
            i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
            span Formulación de estrategias organizacionales.
          li.d-flex.align-items-baseline.mb-3(data-aos="zoom-in-right")
            i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
            span Definición de actividades y recursos.
          li.d-flex.align-items-baseline.mb-0(data-aos="zoom-in-right")
            i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
            span Seguimiento y evaluación de resultados.
      .col-12.col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema4/img_7.png', class="img-fluid")

    p.mb-4(data-aos="zoom-in-right") La formulación de estrategias organizacionales consiste en diseñar acciones orientadas al fortalecimiento institucional, la solución de problemáticas y el cumplimiento de objetivos comunitarios y territoriales. Las estrategias organizacionales pueden orientarse a diferentes aspectos. Dentro de su clasificación tenemos:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.mb-0(data-aos="flip-left") 
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 7.
          |  Estrategias organizacionales en la formulación
        .tabla-a.mb-0(data-aos="flip-left")
          table
            caption 
              p.mb-0 Nota. SENA, (2026).
            thead
              tr
                th.col-auto.col-lg-4 Tipo de estrategia
                th.col-auto.col-lg-auto Objetivo
            tbody
              tr
                td.text-start Estrategias de fortalecimiento organizacional
                td.text-start Mejorar la estructura, participación y gestión interna.
              tr.bg-table-01
                td.text-start Estrategias productivas
                td.text-start Fortalecer procesos agropecuarios y generación de ingresos.
              tr
                td.text-start Estrategias de participación comunitaria
                td.text-start Promover la integración y el trabajo colaborativo.
              tr.bg-table-01
                td.text-start Estrategias de capacitación 
                td.text-start Fortalecer conocimientos y capacidades de los integrantes.
              tr
                td.text-start Estrategias de articulación institucional
                td.text-start Mejorar relaciones con entidades y actores externos.

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                p.mb-0 La planeación estratégica contribuye al fortalecimiento de las organizaciones rurales, facilita la gestión de proyectos y mejora la capacidad de respuesta frente a las necesidades del territorio.
              .bloque-enlace__accion

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3 Técnicas e instrumentos para la planeación participativa
    .mb-0 

    p.mb-4(data-aos="zoom-in-right") La planeación participativa requiere el uso de técnicas e instrumentos que permitan integrar a los diferentes actores de la comunidad en los procesos de análisis, formulación de propuestas y toma de decisiones. Estas herramientas facilitan la construcción colectiva de soluciones, fortalecen la participación comunitaria y favorecen la apropiación de los procesos organizacionales. La participación de la comunidad en los procesos de planeación permite que las acciones propuestas respondan a las necesidades reales del territorio y fortalece el compromiso de los actores involucrados con el desarrollo de las actividades. 

    .tarjeta-numerada.tarjeta-numerada--vertical.color-primario-10.h-100.mb-5
      .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
        h1.mb-0 A
      p.mb-4(data-aos="zoom-in-right") Las técnicas participativas permiten recopilar información, identificar necesidades, priorizar problemáticas y definir acciones de manera concertada. Estas metodologías favorecen el diálogo, la integración comunitaria y la construcción colectiva de propuestas. Entre las principales técnicas participativas se encuentran:
      .tarjeta-numerada__contenido-wrapper
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
            figure
              img(src='@/assets/curso/tema4/img_8.png', class="img-fluid")       
          .col-12.col-lg-8.mb-3.mb-lg-0(data-aos="flip-left")
            .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
              SlyderF(columnas="col-12 col-sm-6 col-md-12 col-lg-6").p-2.rounded-3
                .tarjeta--white.h-100
                  .tarjeta--08.mb-4 
                  h5.mb-3.text-center Lluvia de ideas
                  p.mb-3 Es una técnica participativa que consiste en generar, de manera libre y espontánea, un conjunto de ideas, propuestas o alternativas sobre un tema específico. En los procesos comunitarios, facilita la construcción colectiva de iniciativas y la toma de decisiones participativas.
                .tarjeta--white.h-100
                  .tarjeta--09.mb-4 
                  h5.mb-3.text-center Talleres comunitarios
                  p.mb-3 Son espacios de encuentro y aprendizaje en los que los participantes analizan situaciones, comparten experiencias y construyen propuestas de manera conjunta. Los talleres combinan actividades prácticas, dinámicas grupales y ejercicios de reflexión para promover la participación de la comunidad.
                .tarjeta--white.h-100
                  .tarjeta--10.mb-4 
                  h5.mb-3.text-center Mesas de concertación
                  p.mb-3 Son escenarios de diálogo y negociación donde participan representantes de diferentes grupos, organizaciones e instituciones con el propósito de analizar problemáticas, construir acuerdos y coordinar acciones.
                .tarjeta--white.h-100
                  .tarjeta--11.mb-4 
                  h5.mb-3.text-center Entrevistas y encuestas
                  p.mb-3 Instrumentos utilizados para recopilar información sobre las características, necesidades, opiniones y expectativas de una población. Las entrevistas permiten obtener información detallada mediante conversaciones directas con los participantes, mientras que las encuestas facilitan la recolección de datos de un mayor número de personas a través de preguntas estructuradas.
                .tarjeta--white.h-100
                  .tarjeta--12.mb-4 
                  h5.mb-3.text-center Cartografía social
                  p.mb-3 Es una técnica participativa que permite representar gráficamente el territorio desde la perspectiva de la comunidad. A través de mapas construidos colectivamente, los participantes identifican recursos, problemáticas, actores, servicios, actividades productivas y dinámicas territoriales.
                .tarjeta--white.h-100
                  .tarjeta--13.mb-4 
                  h5.mb-3.text-center Grupos focales
                  p.mb-3 Consisten en reuniones dirigidas con un grupo reducido de personas que comparten características o intereses comunes. Su propósito es profundizar en la percepción, experiencias, opiniones y necesidades de los participantes respecto a un tema específico.
                .tarjeta--white.h-100
                  .tarjeta--14.mb-4 
                  h5.mb-3.text-center Observación participativa
                  p.mb-3 Es una técnica mediante la cual el facilitador o investigador se integra temporalmente a las actividades de la comunidad para conocer de manera directa sus dinámicas, prácticas, relaciones y formas de organización.

    .tarjeta-numerada.tarjeta-numerada--vertical.color-secundario-10.h-100.mb-5
      .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
        h1.mb-0 B
      p.mb-4(data-aos="zoom-in-right") Los instrumentos de planeación facilitan la organización y seguimiento de la información obtenida durante los procesos participativos. Estas herramientas permiten estructurar actividades, establecer prioridades y evaluar avances organizacionales.

      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
        h5 Tabla 7.
        |  Estrategias organizacionales en la formulación
      .tabla-a.mb-0(data-aos="flip-left")
        table
          caption 
            p.mb-0 Nota. SENA, (2026).
          thead
            tr
              th.col-auto.col-lg-4 Instrumento
              th.col-auto.col-lg-auto Aplicación
          tbody
            tr.bg-table-02
              td.text-start Matriz DOFA
              td.text-start Analizar fortalezas, oportunidades, debilidades y amenazas.
            tr.bg-table-01
              td.text-start Árbol de problemas y objetivos
              td.text-start Identificar causas, efectos y posibles soluciones.
            tr.bg-table-02
              td.text-start Cronogramas de actividades
              td.text-start Organizar actividades según tiempos y responsables.
            tr.bg-table-01
              td.text-start Planes operativos
              td.text-start Definir acciones específicas para la ejecución de actividades.
            tr.bg-table-02
              td.text-start Formatos de diagnóstico
              td.text-start Registrar información organizacional y territorial.
            tr.bg-table-01
              td.text-start Indicadores de seguimiento
              td.text-start Medir avances y cumplimiento de objetivos.
            tr.bg-table-02
              td.text-start Matrices de priorización
              td.text-start Establecer necesidades y problemas prioritarios.
      p.mb-0(data-aos="zoom-in-right") El uso adecuado de estas herramientas contribuye a fortalecer la transparencia, la comunicación y la participación comunitaria en los procesos organizacionales y territoriales.

    Separador

    #t_4_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.4 Construcción y formulación del plan de acción
    .mb-0 











    
    Separador

    #t_4_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.5 
    .mb-0 

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
