<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Manejo de equipos
    
    p.mb-5 Un laboratorio dental es un espacio físico que cuenta con los equipos y máquinas necesarios, donde el técnico dental fabrica o repara los distintos tipos de prótesis dentales existentes. A continuación se presentan los equipos  de los que se dispone hoy en día para la fabricación de la prótesis fija:

    .bg_grad-01
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .bgr_3.p-3
          img.mb-3(src='@/assets/curso/tema7/t7-1.png' alt='AvatarTop')
          p <b>Mezcladora de vacío programable, batidora de vacío:</b> para elaborar fácilmente revestimientos, escayolas y mezclas afines.
        .bgr_4.p-3
          img.mb-3(src='@/assets/curso/tema7/t7-2.png' alt='AvatarTop')
          p <b>Estación de pulido gorbea con motor mini:</b> máquina ideal para el pulido en entornos dentales.
        .bgr_3.p-3
          img.mb-3(src='@/assets/curso/tema7/t7-3.png' alt='AvatarTop')
          p <b>Trampa de yeso:</b> para conseguir una rápida y sencilla limpieza, quedando la suciedad recogida en una bolsa de plástico.
        .bgr_4.p-3
          img.mb-3(src='@/assets/curso/tema7/t7-4.png' alt='AvatarTop')
          p <b>Centrífuga para colados dentales:</b> el brazo de la centrífuga es articulado, lo que favorece el colado de materiales de alto grado de fusión.
        .bgr_3.p-3
          img.mb-3(src='@/assets/curso/tema7/t7-5.png' alt='AvatarTop')
          p <b>Ruteadora  para laboratorio:</b> labores de recorte en el laboratorio dental.
        .bgr_4.p-3
          img.mb-3(src='@/assets/curso/tema7/t7-6.png' alt='AvatarTop')
          p <b>Prensa hidráulica:</b> instrumento utilizado en los laboratorios de odontología para facilitar la tarea de empaquetado de muflas.
        .bgr_3.p-3
          img.mb-3(src='@/assets/curso/tema7/t7-7.png' alt='AvatarTop')
          p <b>Paralelómetro:</b> usado para determinar las relaciones de paralelismo de las superficies dentales.
        .bgr_4.p-3
          img.mb-3(src='@/assets/curso/tema7/t7-8.png' alt='AvatarTop')
          p <b>Dosificadora de agua y yeso para el laboratorio dental:</b> una dosificadora es una máquina que se utiliza en el laboratorio de odontología para almacenar el material y como su mismo nombre lo indica, dosificar el yeso en polvo que al salir se mezclará con agua para realizar la solución.
        .bgr_3.p-3
          img.mb-3(src='@/assets/curso/tema7/t7-9.png' alt='AvatarTop')
          p <b>Martillo neumático:</b> para trabajos de limpieza y apertura de muflas, revestimientos de fundido, escayola, etc. Trabaja con presión de 2 a 8 bares.
        .bgr_4.p-3
          img.mb-3(src='@/assets/curso/tema7/t7-10.png' alt='AvatarTop')
          p <b>Balanza:</b> se utiliza para medir y ajustar las gomas de las ortodoncias y para otras aplicaciones similares en los laboratorios dentales.
        .bgr_3.p-3
          img.mb-3(src='@/assets/curso/tema7/t7-11.png' alt='AvatarTop')
          p <b>Calibrador de coronas:</b> para medir el grosor de dispositivos dentales, por ejemplo, coronas y alambres para ortodoncia.
        .bgr_4.p-3
          img.mb-3(src='@/assets/curso/tema7/t7-12.png' alt='AvatarTop')
          p <b>Arenador:</b> utilizado en los laboratorios dentales para la eliminación de revestimiento, preparación de superficies para la aplicación de composites, limpieza de elementos y operaciones de acabado.
      
      p.mb-5 En el siguiente video se explica la funcionalidad de los equipos. 

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/CUYQLoLcLjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
 



</template>

<script>
export default {
  name: 'Tema7',
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
