<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Protocolo de elaboración
    
    p.mb-5 En la actualidad, se dispone para la elaboración de coronas dentales no solo de forma analógica sino de muchos sistemas para hacer restauraciones indirectas libres de metal, la mayor actualidad y uso es el denominado CAD-CAM, cuyo diseño y elaboración es asistida por un computador. Para la elaboración de una restauración por este método se deben seguir tres fases: 

    .tarjeta--container.row.mb-5
      .col-md-4.tarjeta.bgr_5.h-100.p-4.p-lg-5.mb-3.mb-md-0
        figure.d-flex.justify-content-center.mb-3
          img.img80(src='@/assets/curso/tema6/t6-1.svg', alt='Texto que describa la imagen')
        p.mb-0 <b>Digitalización</b> de la preparación dental obtenida por medio de un escáner.
      .col-md-4.tarjeta.bgr.h-100.p-4.p-lg-5.mb-3.mb-md-0
        figure.d-flex.justify-content-center.mb-3
          img.img80(src='@/assets/curso/tema6/t6-2.svg', alt='Texto que describa la imagen')
        p.mb-0 <b>Diseño</b> de la restauración lograda mediante un programa de computador.
      .col-md-4.tarjeta.bgr_5.p-4.p-lg-5
        figure.d-flex.justify-content-center.mb-3
          img.img80(src='@/assets/curso/tema6/t6-3.svg', alt='Texto que describa la imagen')
        p.mb-0 <b>Maquinado</b> de un bloque cerámico del cual se obtiene la restauración.
    
    .row.justify-content-center.mb-3
      .col-auto.d-flex.align-items-center
        figure
          img.d-none.d-lg-flex(src='@/assets/curso/tema6/puntos.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-9
        p.mb-0 El lugar donde se hace la producción de las restauraciones determina el procedimiento y protocolo de su fabricación. Esta técnica combina la resistencia de los nuevos materiales cerámicos con la estética que ofrece, actualmente existe gran variedad de materiales que permiten ser maquinados. Están disponibles para este sistema desde cerámicas vítreas para restauraciones con contornos completos, hasta cerámicas cristalinas para estructuras.
    
    .row.justify-content-center.mb-5
      .col-12.col-lg-10
        p Las impresoras 3D permiten a los laboratorios y consultorios dentales crear coronas sólidas y precisas para sus pacientes. El flujo de trabajo es fácil de aprender y adoptar. Aquí el proceso se divide en cuatro pasos:
    
    .row
      .col-12.col-lg-4.mb-3.mb-lg-0
        .bgr_6.p-4.p-lg-5.mb-3
          h4 1. Escanear
          p.mb-0 El dentista recopila datos anatómicos de la boca del paciente mediante el uso de un escáner intraoral. El dentista envía el archivo a un laboratorio dental o lo carga en su sistema interno.
        .bgr_8.p-4.p-lg-5
          h4 3. Imprimir
          p.mb-0 El técnico prepara la impresora insertando el tanque de resina, el cartucho de resina y la plataforma de construcción. Comienzan a imprimir seleccionando el archivo apropiado en el menú de la impresora, siguiendo una serie de indicaciones y cuadros de diálogo la impresora comenzará automáticamente a construir la corona.
      .col-12.col-lg-4.mb-3.mb-lg-0
        figure.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema6/t6-4.png', alt='Texto que describa la imagen') 
      .col-12.col-lg-4
        .bgr_9.p-4.p-lg-5.mb-3
          h4 2. Diseñar
          p.mb-0 Un técnico importa el escaneo al <em>software</em>, lo recorta para eliminar datos innecesarios y selecciona la parte que imprimirá. Luego, el técnico genera puntos de soporte para el modelo y exporta el archivo a la impresora.
        .bgr_7.p-4.p-lg-5
          h4 4. Preparar
          p.mb-0 Después de que se imprime la corona, el técnico retira la plataforma de construcción y la coloca en un lavado. Después de una cantidad de tiempo especificada por el fabricante, el técnico inspecciona las piezas en busca de resina sin curar en la superficie. Si queda algo de resina entre los soportes y las balsas, el técnico usa una botella exprimible llena de alcohol isopropílico y un cepillo para eliminarla.     




</template>

<script>
export default {
  name: 'Tema6',
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
