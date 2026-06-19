<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 El componente formativo Planeación organizacional y gestión de procesos participativos orienta al fortalecimiento de las competencias técnicas, organizacionales y metodológicas necesarias para reconocer, analizar y establecer modelos organizacionales acordes con las necesidades del entorno rural y comunitario. En el marco del programa proyectos agropecuarios comunitarios, este componente busca que el aprendiz adquiera herramientas que le permitan participar en procesos de organización, diagnóstico, planeación y formulación de acciones orientadas al fortalecimiento de las organizaciones rurales.

    .row.justify-content-center.align-items-start.mb-4
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-right")
        figure
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid").mb-3
      .col-12.col-lg-9.mb-0(data-aos="flip-left")
        .cajon.color-secundario.p-4(data-aos="zoom-in-right")
          p.mb-0 La planeación organizacional y la gestión participativa constituyen elementos fundamentales para promover el desarrollo comunitario, la articulación territorial y el fortalecimiento de las capacidades colectivas, ya que permiten identificar necesidades, analizar problemáticas y construir estrategias de manera conjunta con los actores del territorio. En este sentido, el componente aborda herramientas relacionadas con el diagnóstico rural participativo, el análisis de factores internos y externos, la identificación de actores, la caracterización organizacional y la formulación de planes de acción, facilitando la recolección, análisis e interpretación de información relevante para la toma de decisiones.
    
    .row.justify-content-center.align-items-start.mb-0
      .col-12.col-lg-8.mb-0(data-aos="flip-left")
        p.mb-3 Asimismo, el componente integra estrategias orientadas al trabajo colaborativo, la participación comunitaria y la formulación de procesos organizacionales que contribuyan al fortalecimiento institucional y comunitario. De igual manera, se promueve la aplicación de criterios técnicos, herramientas de planeación y mecanismos de seguimiento que favorezcan la organización, coordinación y gestión de iniciativas rurales y agropecuarias.
        .cajon.color-acento-contenido.p-4(data-aos="zoom-in-right").mb-3
          p.mb-0 Desde una perspectiva pedagógica, el módulo promueve el desarrollo de capacidades para analizar contextos organizacionales, interpretar información y formular propuestas participativas que contribuyan al fortalecimiento de los procesos comunitarios. De esta manera, se busca que el aprendiz aporte al desarrollo rural mediante la consolidación de organizaciones más participativas, articuladas y sostenibles en beneficio de las comunidades rurales. 
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-right")
        figure
          img(src='@/assets/curso/introduccion/img_2.png', class="img-fluid")
        
    
</template>

<script>
export default {
  name: 'Introduccion',
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
