const ordenes = [
  {
    id: "1",
    userID: "9b09b087-cf40-41f4-a375-8dc75843a8d1",
    status: "NEW",
    createdAt: "2022-04-16T18:56:21.890Z",
    updatedAt: "2022-04-16T18:56:21.890Z",
    orderLabId: "7d7965f7-1b33-4b8c-9bac-0c22bc905030",
    fechaEntregado: "12-02-22",
    estudios: [
      {
        id: "1",
        titulo: "Prueba COVID PCR en tiempo real",
        category: "covid",
        imagen:
          "https://imagenesrutalab.s3.amazonaws.com/sanmateo/servicios/PCR.jpg",
        precio: 1500,
        oldPrice: 1800,
        descripcionLarga:
          "Método específico para determinar la presencia del virus. Idealmente se utiliza en pacientes que presentan síntomas agudos para confirmar la enfermedad. Es recomendada si el paciente tuvo contacto con una persona diagnosticada, incluso si no presenta síntomas. Se requiere la recolección de células infectadas de la nasofaringe y orofaringe del paciente mediante un hisopo. Se requiere ayuno de 4- 5 horas.",
        descripcioncorta: "Crees tener COVID-19 y tienes o no síntomas.",
        resultados: "RESULTADOS EN 24 a 48 horas",
        comentarios:
          "Prueba más confiable para detectar VIRUS COVID-19. Es la prueba solicitada para fines de viajes e intervenciones médicas, entre otras.",
        tipoMuestra: "Muestra de nariz y garganta",
        requerimiento: "Ninguno",
        creadoPorPrueba: "LUZ MARIA",
        Resultado: {
          id: "124",
          estudioID: "7d7965f7-1b33-4b8c-9bac-0c22bc9052",
          resultado: "Positivo",
          valorReferencia: "Negativo",
        },
      },
    ],
  },
  {
    id: "2",
    userID: "9b09b087-cf40-41f4-a375-8dc75843a8d1",
    status: "NEW",
    createdAt: "2022-04-16T18:56:21.890Z",
    updatedAt: "2022-04-16T18:56:21.890Z",
    orderLabId: "7d7965f7-1b33-4b8c-9bac-0c22bc905030",
    fechaEntregado: "12-10-21",
    estudios: [
      {
        id: "11",
        titulo: "Biometría Hemática",
        imagen:
          "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
        precio: 110,
        oldPrice: 120,
        descripcion:
          "Este examen se hace a la sangre e inspecciona las células que la componen y están presentes en ella como los glóbulos rojos, encargados de transportar oxígeno; los glóbulos blancos, que combaten infecciones, y las plaquetas, que detienen hemorragias mediante la formación de coágulos.",
        resultados: "RESULTADOS EN el mismo día",
        comentarios:
          "La biometría hemática es un auxiliar en el diagnostico y seguimiento de anemias, leucemias, pacientes con quimioterapias, síndrome febril e infecciones.",
        tipoMuestra: "Muestra sanguínea",
        requerimiento: "Ayuno mínimo de 8 horas y máximo de 10 horas",
        Resultado: {
          id: "134",
          estudioID: "7d7965f7-1b33-4b8c-9bac-0c22bc9052",
          resultado: "Positivo",
          valorReferencia: "Negativo",
        },
      },
      {
        id: "1",
        titulo: "Prueba COVID PCR en tiempo real",
        category: "covid",
        imagen:
          "https://imagenesrutalab.s3.amazonaws.com/sanmateo/servicios/PCR.jpg",
        precio: 1500,
        oldPrice: 1800,
        descripcionLarga:
          "Método específico para determinar la presencia del virus. Idealmente se utiliza en pacientes que presentan síntomas agudos para confirmar la enfermedad. Es recomendada si el paciente tuvo contacto con una persona diagnosticada, incluso si no presenta síntomas. Se requiere la recolección de células infectadas de la nasofaringe y orofaringe del paciente mediante un hisopo. Se requiere ayuno de 4- 5 horas.",
        descripcioncorta: "Crees tener COVID-19 y tienes o no síntomas.",
        resultados: "RESULTADOS EN 24 a 48 horas",
        comentarios:
          "Prueba más confiable para detectar VIRUS COVID-19. Es la prueba solicitada para fines de viajes e intervenciones médicas, entre otras.",
        tipoMuestra: "Muestra de nariz y garganta",
        requerimiento: "Ninguno",
        creadoPorPrueba: "LUZ MARIA",
        Resultado: {
          id: "167",
          estudioID: "7d7965f7-1b33-4b8c-9bac-0c22bc9052",
          resultado: "Positivo",
          valorReferencia: "Negativo",
        },
      },
      {
        id: "13",
        titulo: "Química Sanguínea 6 elementos",
        imagen:
          "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
        precio: 600,
        oldPrice: 700,
        descripcion:
          "“La química sanguínea es un análisis de la sangre realizado en el laboratorio para medir cantidades de ciertas sustancias en el organismo como sales, enzimas, grasas o lípidos, hormonas, azúcar o glucosa, proteínas, vitaminas y minerales.",
        descripcioncorta: "Química sanguínea básica",
        resultados: "RESULTADOS EN el mismo día",
        comentarios:
          "Esta prueba ayuda a diagnosticar ciertos problemas de salud. Si los resultados son anormales, puede apuntar a un problema que necesite ser tratado a la brevedad.",
        tipoMuestra: "Muestra sanguínea",
        requerimiento: "Ayuno mínimo de 8 horas y máximo de 10 horas",
        Resultado: {
          id: "127",
          estudioID: "7d7965f7-1b33-4b8c-9bac-0c22bc9052",
          resultado: "Positivo",
          valorReferencia: "Negativo",
        },
      },
    ],
  },
];

export default ordenes;
