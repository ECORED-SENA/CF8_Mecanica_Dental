<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipos de prótesis
    
    p.mb-5 Durante las últimas décadas han surgido algunos cambios importantes para los laboratorios dentales, y en el área de prótesis fija se encuentra,  por ejemplo, que con la ayuda de tecnología avanzada se pueden realizar prótesis  dentosoportadas e implantosoportadas.

    .bg_grad-05
      .row.mb-5
        .col-12.col-lg-3.mb-3.mb-lg-0
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/tema3/t3-1.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-9
          p Los dientes perdidos deben reemplazarse, esto es cuando la zona sin dientes está en la parte anterior y más visible de la boca, pero es igual de importante cuando ocurre en el sector posterior, donde se ejercen las fuerzas de masticación. La pérdida de dientes puede acarrear importantes consecuencias estéticas, si se trata de piezas de la zona anterior o problemas digestivos y dificultades en la estabilización de la mandíbula, en el caso de las piezas molares. Las prótesis fijas suelen estar indicadas en:
          ul.lista-ul--color.mb-3
            li.mb-0 
              i.fas.fa-circle.pst_5.clr_3
              span Reconstrucciones de dientes anteriores. La estética puede verse afectada con cambios de color y forma.
            li.mb-0 
              i.fas.fa-circle.pst_5.clr_3
              span Reemplazo del punto de contacto protésico.
            li.mb-0 
              i.fas.fa-circle.pst_5.clr_3
              span Ausencia parcial de dientes, con pilares lo suficientemente fuertes para soportar los dientes faltantes.
            li.mb-0 
              i.fas.fa-circle.pst_5.clr_3
              span Después de una endodoncia, donde la estructura dental se ha visto afectada.
          p Las ventajas de una prótesis fija frente a una removible son:
          ul.lista-ul--color.mb-3
            li.mb-0 
              i.fas.fa-circle.pst_5.clr_3
              span Mayor comodidad (sin necesidad de desmontarlos para limpiarlos).
            li.mb-0 
              i.fas.fa-circle.pst_5.clr_3
              span Mayor agarre.
            li.mb-0 
              i.fas.fa-circle.pst_5.clr_3
              span Mayor firmeza.
      
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Dentosoportada
    
    p.mb-5 La prótesis parcial fija dentosoportada es una restauración protésica fija, que reemplaza uno o varios dientes y va soportada de los dientes pilares o remanentes. En el siguiente video se puede conocer más de esta prótesis:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/X0Lx0AiAe6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Las prótesis dentosoportadas se clasifican en dos puentes y coronas. Los puentes son un tipo de prótesis fija que sustituye una edentación de más de un diente, para ello se tallan los dientes vecinos a la edentación y se elaboran dos coronas en los dientes pilares que sostienen al diente que se quiere reemplazar. Toman como pilares los dientes adyacentes a la brecha edéntula (sin dientes). Estos puentes a su vez se clasifican en:

    .row.mb-5.justify-content-center
      .col-sm-9.col-md-7.col-lg-5.col-xl-4.mb-3
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema3/t3-2.png' alt='AvatarTop')
          .tarjetas-up_card.bgr_5.p-4
            .title.d-flex.align-items-center.mb-4
              .bot.me-3
                i.fas.fa-angle-up.fa-lg.color-primario
                i.fas.fa-angle-down.fa-lg.color-primario
              h4.mb-0 El puente dental fijo tradicional 
            p Es aquel en el cual el odontólogo talla los dientes adyacentes al espacio edéntulo para colocar coronas en dichos pilares y en su parte media colocar la o las coronas que sustituyen los dientes perdidos.
      .col-sm-9.col-md-7.col-lg-5.col-xl-4.mb-3
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema3/t3-3.png' alt='AvatarTop')
          .tarjetas-up_card.bgr_5.p-4
            .title.d-flex.align-items-center.mb-4
              .bot.me-3
                i.fas.fa-angle-up.fa-lg.color-primario
                i.fas.fa-angle-down.fa-lg.color-primario
              h4.mb-0 El puente Maryland 
            p Es un tipo de puente dental fijo que sirve para sustituir la ausencia de una o dos piezas dentales en la boca de un paciente. Es una prótesis dental adhesiva, que se cementa en las caras posteriores de los dientes adyacentes al que se ha perdido.
      .col-sm-9.col-md-7.col-lg-5.col-xl-4.mb-3
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema3/t3-4.png' alt='AvatarTop')
          .tarjetas-up_card.bgr_5.p-4
            .title.d-flex.align-items-center.mb-4
              .bot.me-3
                i.fas.fa-angle-up.fa-lg.color-primario
                i.fas.fa-angle-down.fa-lg.color-primario
              h4.mb-0 El puente Cantiliver 
            p Es  el que tiene la pieza póntico anclada solo por un lado al diente pilar. En ocasiones esto implica tallar menos piezas, ya que solo una pieza pilar puede soportar un puente de dos.
 
    p.mb-5 <b>Corona:</b> es una restauración individual para una unidad dentaria en concreto. En ocasiones son llamadas “fundas”, sobre todo por el paciente que no las ve como una prótesis. Esto ocurre porque las coronas se colocan sobre el diente natural del paciente, que habrá sido previamente tallado, como si de una funda se tratara. En toda prótesis fija los dientes se  realizan  artesanalmente, personificados para cada paciente y ciñéndose a las necesidades de su anatomía dentobucal. Las coronas artificiales se diferencian, principalmente, por los materiales con las que han sido fabricadas. En este sentido, las más comunes son las siguientes:    

    .row
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-flip.color-primario.bgr_16(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/tema3/t3-5.png')})`}")
              .bgr.p-4.w-100.position-relative
                h4.mb-0.text-center Coronas de metal-porcelana  
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Coronas de metal-porcelana:
              p  Están fabricadas de metal (parte interior) y recubiertas de porcelana (parte exterior). Se suelen colocar en dientes posteriores para evitar que el metal pueda verse a través de las encías. Su principal ventaja es que son resistentes. 
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-flip.color-primario.bgr_16(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/tema3/t3-6.png')})`}")
              .bgr.p-4.w-100.position-relative
                h4.mb-0.text-center Coronas de circonio 
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Coronas de circonio:
              p  Al ser un material capaz de soportar el desgaste diario, son resistentes. Asimismo, ligeras y estéticas, ya que son translúcidas y reflejan la luz de la misma manera que un diente natural. 
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-flip.color-primario.bgr_16(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/tema3/t3-7.png')})`}")
              .bgr.p-4.w-100.position-relative
                h4.mb-0.text-center Coronas de porcelana  
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Coronas de porcelana:
              p  Se emplean para restaurar la estética de los dientes anteriores. Esta es la que proporciona la mejor combinación de colores naturales. No obstante, son más frágiles que las de metal-porcelana o circonio.  
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-flip.color-primario.bgr_16(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/tema3/t3-8.png')})`}")
              .bgr.p-4.w-100.position-relative
                h4.mb-0.text-center Coronas de resina  
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Coronas de resina:
              p  Al ser un material blando, se suelen utilizar de forma provisional, son ideales para proteger los dientes tallados en el periodo que transcurre entre las tomas de medidas y la cementación de la corona dental. 
    
    separador

    .bg_grad-06
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Implantosoporta
      
      p.mb-5 Es una restauración protésica fija, que reemplaza uno o varios dientes y va soportada de los implantes dentales. En el siguiente recurso se puede conocer más de esta prótesis: 

      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/8WY3E5u9HBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    p.mb-5 Existen dos tipos de implantes, estos son: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bgr.h-100.p-3.p-lg-5.mb-3.mb-lg-0
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/t3-10.png', alt='Texto que describa la imagen')
          .col-10
            ul.lista-ul--color.mb-0
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2.pst_4
                span.clr_4 <b>Implantes endostiales:</b> se implantan quirúrgicamente en forma directa en los huesos maxilares. Una vez que el tejido circundante ha cicatrizado, se requiere de una segunda cirugía para conectar un poste sobre el implante original. Finalmente, se coloca un diente artificial (o varios) sobre el poste. Los dientes serán individuales o estarán agrupados en un puente o prótesis fija.
      .col-md.tarjeta.bgr_5.h-100.p-3.p-lg-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/t3-11.png', alt='Texto que describa la imagen')
          .col-10
            ul.lista-ul--color.mb-0
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2.pst_4
                span.clr_4 <b>Implante subperiosteal:</b> estos consisten en una especie de montura que se coloca en los huesos maxilares justo debajo de la encía. Con la cicatrización de las encías la montura se fija al hueso maxilar. Los postes que se colocan en la montura sobresalen a través de las encías. Al igual que con los implantes endostiales, los dientes artificiales se colocan sobre esos postes.
    
    p Las ventajas de usar una prótesis implantosoportada se pueden observar en el siguiente recurso: 
    P.mb-5 Las prótesis implantosoportadas sobre implantes que brindan una estabilidad excepcional al comer y al hablar, y funcionan como los dientes naturales. Los beneficios de las prótesis proporcionadas  son que pueden ayudar a experimentar una mayor confianza y una mejor calidad de vida. 

    .row
      .col-12.col-lg-7.mb-3.mb-lg-0
        LineaTiempoD.color-primario
          .row.justify-content-center(numero="1" titulo="Preservación del tejido óseo")
            .col-md-10.mb-4.mb-md-0
              p Este   tipo   de   prótesis   es   una   de   las   mejores   técnicas   de mantenimiento preventivo en odontología, debido a que actúan como dientes naturales, ayudan a la estimulación y crecimiento óseo. De esta manera mantiene el ancho y la altura ósea siempre que   la   rehabilitación   permanezca   en   buen   estado.   
            .col-auto.col-md-2.pe-0
              figure
                img(src='@/assets/curso/tema3/t3-13.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(numero="2" titulo="Mejora la masticación")
            .col-md-10.mb-4.mb-md-0
              p La   habilidad   de   actividad masticatoria mejora dramáticamente. Mientras que una prótesis removible es solo un 30 % tan eficiente como los dientes naturales, las prótesis implantosoportadas pueden alcanzar hasta un 90 % de la eficiencia natural masticatoria.   
            .col-auto.col-md-2.pe-0
              figure
                img(src='@/assets/curso/tema3/t3-14.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(numero="3" titulo="Mejora la fonética")
            .col-md-10.mb-4.mb-md-0
              p Al tener mayor estabilidad las restauraciones sobre implantes, no se producen alteraciones de los músculos masticatorios, ni de los que intervienen en la expresión facial, eliminando toda posibilidad de alteración en la fonética.  
            .col-auto.col-md-2.pe-0
              figure
                img(src='@/assets/curso/tema3/t3-15.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(numero="4" titulo="Mejora la estética")
            .col-md-10.mb-4.mb-md-0
              p Se ven y se sienten como dientes naturales, es posible lograr una   morfología y  un  aspecto  facial óptimo  en   todos  los planos anatómicos.  
            .col-auto.col-md-2.pe-0
              figure
                img(src='@/assets/curso/tema3/t3-16.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(numero="5" titulo="Durabilidad")
            .col-md-10.mb-4.mb-md-0
              p Pueden durar muchos años con un buen mantenimiento, incluso toda la vida.   
            .col-auto.col-md-2.pe-0
              figure
                img(src='@/assets/curso/tema3/t3-17.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(numero="6" titulo="Mejora la confianza")
            .col-md-10.mb-4.mb-md-0
              p Una persona puede sentir plena confianza en que sus dientes no se moverán. Podrá realizar cualquier actividad regular sin ningún temor.   
            .col-auto.col-md-2.pe-0
              figure
                img(src='@/assets/curso/tema3/t3-18.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(numero="7" titulo="Efecto psicológico positivo")
            .col-md-10.mb-4.mb-md-0
              p El hecho de no tener que quitarse la prótesis aumenta la confianza en sí mismo.   
            .col-auto.col-md-2.pe-0
              figure
                img(src='@/assets/curso/tema3/t3-19.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(numero="8" titulo="Mayor comodidad y conveniencia")
            .col-md-10.mb-4.mb-md-0
              p Las prótesis removibles convencionales pueden causar llagas debajo de la dentadura durante el proceso de adaptación del paciente, no hay riesgo de laceraciones y no requiere utilizar cremas de adhesión.   
            .col-auto.col-md-2.pe-0
              figure
                img(src='@/assets/curso/tema3/t3-20.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-5
        figure
          img(src='@/assets/curso/tema3/t3-12.png', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema3',
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
