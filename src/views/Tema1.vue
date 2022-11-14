<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normativa nacional para los laboratorios de mecánica dental
    
    p.mb-5 A partir de diciembre de 2021 en Colombia empieza a regir la normativa para los técnicos y los laboratorios dentales, a cargo del Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). La entidad que regula a nivel nacional es el Ministerio de Salud y Protección Social, a partir de sus facultades legales, en especial a las conferidas por los Artículos 245 de la Ley 100 de 1993,numeral 8 de la Ley 1618 de 2013, 1° parágrafo del Decreto 4725 de 2005 y el Artículo 45 de la Ley 1437 de 2011 en los que se menciona la información que se presenta en el siguiente recurso: 
  
    .row.mb-5.justify-content-center
      .col-auto.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/t1-1.svg', alt='Texto que describa la imagen') 
      .col-12.col-lg-9
        p.text-bold Normativa nacional para laboratorios de mecánica dental
        p.mb-0 Se presenta la  normatividad  colombiana que regula  los principios para laboratorios de  mecánica dental, se  establecen los requisitos sanitarios que deben cumplir los dispositivos médicos sobre medida bucal y los requisitos para la apertura y funcionamiento de los establecimientos ubicados en el territorio nacional, en donde se fabrican, reparan, dispensan y adaptan, con el fin de proteger la vida y la salud de las personas, así como adoptar los instrumentos para su verificación.
    
    AcordionA(tipo="b" clase-tarjeta="tarjeta bgr_11")
      .row(titulo="Decreto 4725 de 2005")
        .col-lg-7.mb-4.mb-lg-0.d-flex.align-items-center
          div
            p.mb-5 Se reglamenta el régimen de <b>registros sanitarios, permiso de comercialización y vigilancia sanitaria de los dispositivos médicos para uso humano y faculta a este Ministerio</b> establecer los requisitos que deberán cumplir los dispositivos médicos sobre medida, entre los cuales se encuentran los bucales, para su uso, prescripción, elaboración, adaptación y comercialización.
            .tarjeta.color-primario.p-3
              .row.justify-content-between.align-items-center
                .col-lg-7.mb-3.mb-sm-0
                  p.mb-0 Para profundizar sobre el Decreto 4725 de 2005 puede ingresar a:  
                .col-sm-auto
                  a.boton.color-acento-botones.clr(:href="obtenerLink('downloads/dec-4725-2005.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download.clr 
        .col-lg-5
          figure
            img(src='@/assets/curso/tema1/t1-2.png', alt='Texto que describa la imagen')
      .row(titulo="Ley 1618 de 2013")
        .col-lg-7.mb-4.mb-lg-0.d-flex.align-items-center
          div
            p.mb-5 <b>Artículo 9°</b> señaló que las personas con discapacidad tienen derecho a acceder a los procesos de <b>habilitación y rehabilitación integral</b>, respetando sus necesidades y posibilidades específicas, con el objetivo de lograr y mantener la máxima autonomía e independencia en su capacidad física, mental y vocacional, así como la inclusión y participación plena en todos los aspectos de la vida. 
            .tarjeta.color-primario.p-3
              .row.justify-content-between.align-items-center
                .col-lg-7.mb-3.mb-sm-0
                  p.mb-0 Para profundizar sobre la Ley 1618 de 2013 puede ingresar a:  
                .col-sm-auto
                  a.boton.color-acento-botones.clr(:href="obtenerLink('downloads/bal-1618-2013-240517.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download.clr 
        .col-lg-5
          figure
            img(src='@/assets/curso/tema1/t1-3.png', alt='Texto que describa la imagen')
      .row(titulo="Ley 1618 de 2013")
        .col-lg-7.mb-4.mb-lg-0.d-flex.align-items-center
          div
            p.mb-0 Dispuso regular la <b>dotación, fabricación, mantenimiento o distribución de prótesis</b>, y otras ayudas técnicas y tecnológicas, que suplan o compensen las deficiencias de las personas con discapacidad, sin ninguna exclusión, en aras de garantizar a la población el derecho a acceder a estos procedimientos, productos y tecnologías en mención.  
        .col-lg-5
          figure
            img(src='@/assets/curso/tema1/t1-4.png', alt='Texto que describa la imagen')
      .row(titulo="Resolución 2113 del 16 de diciembre de 2021")
        .col-lg-7.mb-4.mb-lg-0.d-flex.align-items-center
          div
            p.mb-5 Los requisitos sanitarios que deben cumplir los dispositivos médicos sobre medida bucal y los establecimientos que los fabrican, reparan, dispensan y adaptan, y se adoptan las guías de verificación, que tuvo en cuenta algunas definiciones de la literatura internacional en la materia como en las normas ISO, ACTM, ANSI, GMDN, la FDA y la Unión Europea, entre otras. 
            .tarjeta.color-primario.p-3
              .row.justify-content-between.align-items-center
                .col-lg-7.mb-3.mb-sm-0
                  p.mb-0 Para profundizar en  la Resolución 2113 de 2021 puede ingresar a:  
                .col-sm-auto
                  a.boton.color-acento-botones.clr(:href="obtenerLink('downloads/Resol-2113-2021.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download.clr 
        .col-lg-5
          figure
            img(src='@/assets/curso/tema1/t1-5.png', alt='Texto que describa la imagen')
      .row(titulo="Normatividad")
        .col-lg-7.mb-4.mb-lg-0.d-flex.align-items-center
          div
            p.mb-0 Esto parte del mejoramiento de la <b>calidad, oportunidad e integralidad</b> en la prestación de los servicios en el área de la salud oral; es importante la reglamentación que contenga las buenas prácticas de manufactura para la elaboración y reparación de los <b>dispositivos médicos</b> sobre medida bucal y los requisitos sanitarios para los establecimientos en donde se fabriquen y reparen estos.  
        .col-lg-5
          figure
            img(src='@/assets/curso/tema1/t1-6.png', alt='Texto que describa la imagen')

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Lineamientos para su funcionamiento 
    
    p.mb-5 Los establecimientos interesados en fabricar y reparar los dispositivos médicos sobre medida bucal, una vez inscritos deberán solicitar la autorización de apertura y funcionamiento ante el INVIMA, quien verificará el cumplimiento de los requisitos sanitarios establecidos.

    .bg_grad-02
      .row.pst.mb-5
        .col-12.col-lg-4.mb-3.mb-lg-0
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/tema1/t1-7.png', alt='Texto que describa la imagen')
        .col-12.col-lg-8
          p.text-bold Los establecimientos que fabrican y reparan dispositivos médicos sobre medida bucal deben contar con los siguientes procedimientos generales y sus registros: 
          ul.lista-ul--color
            li 
              i.fas.fa-circle.pst_5.clr_2
              span Procedimiento de recepción, limpieza y desinfección de modelos o impresiones y material enviado por el prestador de salud.
            li 
              i.fas.fa-circle.pst_5.clr_2
              span Procedimiento de alistamiento y despacho del dispositivo médico terminado al odontólogo tratante.
            li 
              i.fas.fa-circle.pst_5.clr_2
              | Procedimiento general para el manejo y el almacenamiento de materias primas y del dispositivo médico, que incluye recepción, calificación del estado de calidad y destino de las materias primas y del dispositivo médico terminado, y la eliminación de dispositivos que no cumplan con los requisitos de calidad.
            li 
              i.fas.fa-circle.pst_5.clr_2
              | Procedimiento para la capacitación del personal y su evaluación periódica.
            li 
              i.fas.fa-circle.pst_5.clr_2
              | Procedimiento relacionado con el aseo y la limpieza del establecimiento, control de plagas y roedores.
            li 
              i.fas.fa-circle.pst_5.clr_2
              | Procedimiento para el manejo integral de los residuos sólidos y líquidos, cumpliendo con la normatividad vigente para la materia.
            li 
              i.fas.fa-circle.pst_5.clr_2
              | Procedimiento para el mantenimiento preventivo de equipos, máquinas y herramientas.
            li 
              i.fas.fa-circle.pst_5.clr_2
              | Procedimiento relacionado con el tratamiento de quejas, reclamos y notificaciones de eventos adversos acorde al programa de tecnovigilancia.
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Equipamiento  
    
    p.mb-5 Dentro de las condiciones generales de las instalaciones es necesario tener en cuenta el nivel de equipamiento con el que cuenta cada laboratorio para identificar quiénes cuentan con la tecnología básica o la tecnología avanzada.

    .row.mb-5.justify-content-center
      .col-12.col-md-6.col-lg-5.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/t1-8.svg' alt='AvatarTop')
          .tarjeta.bgr
            .p-4
              h4.text-center Tecnología básica
              p Conjunto de conocimientos científicos y técnicos utilizados para el diseño y fabricación de dispositivos médicos sobre medida bucal acordes a las necesidades de las personas.
      .col-12.col-md-6.col-lg-5.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/t1-9.svg' alt='AvatarTop')
          .tarjeta.bgr_5
            .p-4
              h4.text-center Tecnología avanzada
              p Hace referencia al conjunto de conocimientos científicos y técnicos utilizados para el diseño y fabricación de dispositivos médicos sobre medida bucal, que se traducen en la innovación permanente de los procesos, técnicas y materiales.
    
    p Los equipos y herramientas se ajustarán a las siguientes condiciones: 

    .titulo-sexto.color-acento-contenido
      h5 Equipamiento.
      span Los equipos del laboratorio deben tener un mantenimiento y un seguimiento para su funcionamiento.  
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .bgr_3
        img(src='@/assets/curso/tema1/t1-10.png' alt='AvatarTop')
        div.p-3
          h4 Calibrar
          p.mb-0 Estar sometidos de manera periódica a mantenimiento preventivo y calibración si fuere el caso, estableciendo procedimientos y cronogramas para su funcionamiento confiable, lo cual deberá quedar registrado en su hoja de vida, a fin de minimizar el riesgo de accidente del personal que los opera y asegurar la calidad del dispositivo médico.
      .bgr_4
        img(src='@/assets/curso/tema1/t1-11.png' alt='AvatarTop')
        div.p-3
          h4 Mantenimiento
          p.mb-0 El mantenimiento preventivo puede ser propio o contratado con terceros; debe contener procedimientos escritos incluyendo forma, periodicidad, trabajos realizados y arreglos eventuales de los equipos.
      .bgr_3
        img(src='@/assets/curso/tema1/t1-12.png' alt='AvatarTop')
        div.p-3
          h4 Limpieza
          p.mb-0 Contar con registros de limpieza, los cuales deben ser fechados y firmados por los responsables y, formarán parte de la documentación.
      .bgr_4
        img(src='@/assets/curso/tema1/t1-13.png' alt='AvatarTop')
        div.p-3
          h4 Vetar
          p.mb-0 Cuando los equipos originen ruido o calor excesivo se adoptarán las medidas necesarias que garanticen la salud del talento humano que los utiliza. Los equipos defectuosos o en desuso deben ser retirados del establecimiento.
      .bgr_3
        img(src='@/assets/curso/tema1/t1-14.png' alt='AvatarTop')
        div.p-3
          h4 Vetar
          p.mb-0 Queda prohibido para el establecimiento que fabrica y repara dispositivos médicos sobre medida bucal tener en sus instalaciones medicamentos, material médico quirúrgico, instrumental quirúrgico, elementos y unidades de odontología propios de los consultorios odontológicos.
    
    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Equipamiento 
    
    p.mb-5 Los establecimientos deberán contar con un director técnico y con personal técnico, quienes deben hacer uso de los elementos de seguridad en el trabajo en concordancia con el Sistema de gestión de salud y seguridad en el trabajo. A continuación se mencionan los perfiles y las responsabilidades.

    .bgr.p-4.p-lg-0
      .row.justify-content-center
        .col-12.col-lg-10.mt-5
          ul.lista-ul--color
            li.mb-0.bg_grad-03 
              i.fas.fa-tooth.clr_2.ms-3.pst_2
              h3.clr_2 Director técnico
          p Deberá acreditar como mínimo formación de tecnólogo en mecánica dental,  de técnico profesional en mecánica dental o de técnico laboral en mecánica dental, con experiencia de tres años en la fabricación y la reparación de dispositivos médicos sobre medida bucal obtenida dentro de un establecimiento de mecánica dental.
      .row.justify-content-center  
        .col-12.col-lg-8.mb-3.mb-lg-0
          .bgr_10.p-4
            p.text-bold Responsabilidades del director técnico:
            ul.lista-ul--color
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Aprobar la ficha técnica del producto.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Dar información requerida por la autoridad sanitaria competente.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Elaborar y verificar el cumplimiento del proceso, procedimientos generales y específicos según líneas de fabricación.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Garantizar que los equipos para la fabricación y la reparación de dispositivos médicos sobre medida bucal se encuentren en buen estado, se utilicen de manera adecuada, tengan mantenimiento y cuando sea el caso estén calibrados, monitoreando y gestionando a partir del récord de las hojas de vida.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Seleccionar y autorizar las materias primas.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Garantizar el correcto almacenamiento de los dispositivos médicos terminados y de las materias primas.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Responder ante la documentación técnica generada, la cual debe ser válida y estar completa.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Garantizar que la información del dispositivo médico sobre medida bucal para la trazabilidad esté completa, entre otros, que se adjunte la copia del registro de verificación del estado del dispositivo médico, realizada por el odontólogo tratante en el control del paciente postadaptación.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Realizar el control de calidad del dispositivo médico durante la fabricación y la reparación, teniendo en cuenta los puntos críticos según la línea de fabricación.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Realizar el control de calidad de los productos proveídos por terceros.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Auditar las actividades de los terceros contratados para proveer productos o servicios.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Emitir concepto de calidad y autorizar la salida al dispositivo médico terminado del área de fabricación para el despacho al odontólogo tratante.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Las demás propias de su actividad y que garanticen la calidad del dispositivo médico.
        .col-12.col-lg-2.d-flex.align-items-end
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/tema1/t1-15.svg', alt='Texto que describa la imagen')

      .row.justify-content-center
        .col-12.col-lg-10.mt-5
          ul.lista-ul--color
            li.mb-0.bg_grad-03 
              i.fas.fa-tooth.clr_2.ms-3.pst_2
              h3.clr_2 Personal técnico.
          p Técnico en mecánica dental quien participa en la fabricación del dispositivo médico, siguiendo procedimientos establecidos para el proceso de fabricación y bajo la supervisión del director técnico. 
      
      .row.justify-content-center
        .col-12.col-lg-3.mb-3.mb-lg-0
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/tema1/t1-16.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.mb-3.mb-lg-0 
          .bgr_10.p-4.mb-5
            p.text-bold Responsabilidades del personal técnico:
            ul.lista-ul--color.mb-0
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Ejecutar los procedimientos establecidos bajo la supervisión del director técnico para la fabricación y la reparación de los dispositivos médicos sobre medida bucal.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Responder por el cuidado y uso racional de materias primas, cuidado de las máquinas, los equipos, las herramientas e instrumentos dados para realizar su labor.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Informar al director técnico oportunamente acerca de los desperfectos de las máquinas, de los equipos de medición, de las herramientas e instrumentos.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Hacer uso de los elementos de seguridad en el trabajo en concordancia al Sistema de gestión de salud y seguridad en el trabajo.
              li.mb-0 
                i.fas.fa-circle.pst_5.clr_2
                span Las demás, propias de su actividad y que garanticen la calidad del dispositivo médico.
            




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
