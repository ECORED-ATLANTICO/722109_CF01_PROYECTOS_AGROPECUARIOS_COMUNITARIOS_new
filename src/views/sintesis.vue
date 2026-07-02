<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-3 El componente formativo Planeación organizacional y gestión de procesos participativos aborda los fundamentos conceptuales, metodológicos y técnicos necesarios para reconocer, analizar y estructurar modelos organizacionales en contextos rurales y comunitarios. Su propósito es fortalecer las capacidades de los aprendices para comprender el funcionamiento de las organizaciones, identificar las características del entorno y formular estrategias que contribuyan al desarrollo organizacional y territorial. En este componente se estudian conceptos relacionados con el desarrollo rural, la organización comunitaria, la asociatividad y el marco normativo que orienta los procesos de extensión agropecuaria y fortalecimiento organizacional. Asimismo, se analizan herramientas de diagnóstico participativo que permiten identificar actores, caracterizar el entorno, reconocer necesidades y analizar problemáticas mediante metodologías participativas que favorecen la construcción colectiva de información y la toma de decisiones.
    p.mb-3 De igual manera, el componente aborda los diferentes modelos organizacionales, sus características y formas de aplicación en organizaciones rurales y comunitarias. Se estudian criterios técnicos, herramientas e indicadores que facilitan el análisis organizacional, así como elementos relacionados con el trabajo en equipo, la definición de roles y responsabilidades, el liderazgo, la comunicación y las estrategias de participación colaborativa orientadas al fortalecimiento de los procesos organizativos. Finalmente, se desarrollan contenidos asociados a la planeación estratégica y la formulación de planes de acción, incluyendo la definición de objetivos, metas, estrategias, actividades e indicadores de seguimiento. Asimismo, se promueve la utilización de técnicas e instrumentos de planeación participativa que permitan articular las necesidades del territorio con los procesos organizacionales, fortaleciendo la capacidad de gestión, la participación comunitaria y la sostenibilidad de las iniciativas rurales y comunitarias.
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
