<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Anatomía y morfología
    
    p.mb-5 Los dientes son estructuras anatómicas utilizadas durante la masticación. Cada diente se compone de corona, cuello y raíz.  La corona es la parte visible en la boca, mientras la raíz es la parte insertada en el hueso maxilar. El cuello corresponde al límite entre la corona y la raíz. Los dientes se insertan en una serie de cuencas o alvéolos presentes en el hueso de la mandíbula al interior de los cuales se encuentra un tipo de hueso, denominado hueso alveolar. 

    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.modf.mb-5
          .tarjeta-avatar-b__img
            img.img80(src='@/assets/curso/tema5/t5-1.svg' alt='AvatarTop')
          .tarjeta.bgr
            .p-4
              p.mb-0 El <b>proceso alveolar (hueso alveolar)</b> incluye la cresta gruesa de hueso que contiene las cavidades del diente en los huesos de la mandíbula que sostienen los dientes. Los huesos que contienen dientes son el maxilar y la mandíbula. La porción curva de cada proceso alveolar en la mandíbula se denomina arco alveolar. En la siguiente infografía se presenta su función: 
    
    ul.lista-ul--color
      li.mb-0.bg_grad-03 
        i.fas.fa-tooth.clr_2.ms-3.pst_2
        h3.clr_2 Hueso alveolar

    p El hueso alveolar, también llamado proceso alveolar, es la parte de la mandíbula que sostiene los dientes. El hueso sostiene las raíces de los dientes y los mantiene en su lugar. El hueso alveolar propiamente dicho es el área del hueso que entra en contacto directo con la raíz de un diente o el revestimiento del alvéolo. El hueso alveolar es un hueso duro y compacto y no un hueso blando y esponjoso. Cuando se coloca un implante dental entra en contacto directo con el hueso alveolar. 
    
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema5/t5-2.png', alt='Texto que describa la imagen')
      .tarjeta.bgr_10.p-3(x="13%" y="59%" numero="1")
        p En el maxilar, el proceso alveolar es una cresta que se encuentra en la superficie inferior. 
        p.mb-0 En la mandíbula, es una cresta en la superficie superior. Esto constituye la parte más gruesa de los maxilares.
      .tarjeta.bgr_10.p-3(x="24.5%" y="88%" numero="2")
        p Después de perder el diente o después de una extracción dental, este hueso  va desapareciendo de manera gradual reabsorbiéndose.
        p.mb-0 <b>El hueso alveolar tarda 45 días en regenerarse después de una extracción</b>, gracias a los osteoblastos.
      .tarjeta.bgr_10.p-3(x="61.5%" y="87%" numero="3")
        p.mb-0 El proceso alveolar contiene una región de hueso compacto adyacente al ligamento periodontal, está unida al cemento de las raíces por el ligamento periodontal y es uniformemente más ligera. 
      .tarjeta.bgr_10.p-3(x="73%" y="61%" numero="4")
        p.mb-0 El proceso alveolar incluye un hueso de soporte, que incluye los siguientes componentes: fibras, nervios, células, vasos sanguíneos, sustancias intercelulares y linfáticos.
    
    p.mb-5 La estrecha relación entre el diente y la apófisis alveolar continúa durante toda la vida. La Ley de Wolf determina que el hueso se remodela en función de las fuerzas aplicadas. Cada vez que se modifica la función del hueso se produce un cambio definido en la arquitectura interna y en la configuración externa. El hueso necesita de estimulación para mantener su forma y densidad. Los dientes transmiten las fuerzas de compresión y tracción al hueso subyacente. Se han medido estas fuerzas como efecto piezoeléctrico en los cristales imperfectos de durapatita que componen la porción inorgánica del hueso. 

    .row.bgr.justify-content-center.mb-5
      .col-12.col-lg-6.d-flex.align-items-center.mb-3.mb-lg-0
        div
          p Cuando se pierde un diente, la falta de estimulación del hueso residual origina una disminución de las trabéculas y de la densidad ósea en dicha zona, con pérdida de la anchura externa y luego de la altura del volumen óseo. La anchura del hueso disminuye en un 25 % durante el primer año después de la pérdida dentaria, y un total de 4 mm de altura durante este primer año, posterior a las extracciones realizadas para colocar una prótesis inmediata. 
          p.mb-0 Es necesario un diente para el desarrollo del hueso alveolar, y se requiere la estimulación de este hueso para mantener su densidad y volumen. Una prótesis removible (completa o parcial) no estimula, ni mantiene el hueso, sino que acelera la pérdida ósea. La carga masticatoria se transfiere solo a la superficie ósea, no a todo el hueso. Como resultado de ello, se reduce el aporte sanguíneo y se produce la pérdida del volumen óseo total.
      .col-12.col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema5/t5-3.png', alt='Texto que describa la imagen') 
    
    p La pérdida ósea se acelera aún más cuando el paciente lleva una prótesis soportada por los tejidos blandos con mal ajuste. No obstante, los pacientes no comprenden que el hueso se pierda con el tiempo y en mayor medida bajo las prótesis mal ajustadas. 



</template>

<script>
export default {
  name: 'Tema5',
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
