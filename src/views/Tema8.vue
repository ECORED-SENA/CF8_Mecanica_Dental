<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Prescripción clínica
    
    p Es la indicación dada por un profesional en odontología a partir del diagnóstico establecido a un paciente sobre el tipo y características del dispositivo médico sobre medida bucal que requiere ser fabricado.

    p.mb-5 La prescripción deberá estar sustentada en una evaluación previa del paciente, se realizará en idioma español, en forma escrita, sea manuscrita, mecanográfica, en medio electromagnético o computarizada. No podrá contener enmendaduras o tachaduras, siglas, claves, abreviaturas o símbolos, diferentes a los estipulados en Lex - Artis o convenciones internacionales y, contendrá la siguiente información:

    .row.bgr
      .col-12.col-lg-5
        figure
          img(src='@/assets/curso/tema8/t8-1.png', alt='Texto que describa la imagen')
      .col-12.col-lg-6.pt-5
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.bgr_2
              span 1
            | Nombre legible del prestador de servicios de salud, dirección, número telefónico o dirección electrónica, número del registro profesional de quien prescribe.
          li 
            .lista-ol--cuadro__vineta.bgr_2
              span 2
            | Lugar y fecha de la prescripción.
          li 
            .lista-ol--cuadro__vineta.bgr_2
              span 3
            | Nombre del paciente y documento de identificación.
          li 
            .lista-ol--cuadro__vineta.bgr_2
              span 4
            | Número de la historia clínica.
          li 
            .lista-ol--cuadro__vineta.bgr_2
              span 5
            | Nombre del dispositivo médico sobre medida prescrito con sus características.
          li 
            .lista-ol--cuadro__vineta.bgr_2
              span 6
            | Indicaciones que a su juicio considere el prescriptor (consideraciones anatómicas, fisiológicas, etc.).
          li 
            .lista-ol--cuadro__vineta.bgr_2
              span 7
            | Vigencia de la prescripción. La prescripción del dispositivo médico sobre medida bucal vence en seis  meses. Una vez transcurrido este tiempo, y al no haber concluido el trabajo, es necesario una nueva valoración del paciente y con fundamento en lo cual se determinará iniciar nuevamente el proceso de fabricación. 
          li 
            .lista-ol--cuadro__vineta.bgr_2
              span 8
            | Firma del odontólogo tratante.
         



</template>

<script>
export default {
  name: 'Tema8',
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
