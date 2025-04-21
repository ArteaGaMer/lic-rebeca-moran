export default function ServicesPage() {
    const services = [
      {
        id: 1,
        title: "Terapia Cognitivo-Conductual (TCC)",
        description: "Intervención especializada basada en el modelo de Beck, con protocolos adaptados a cada caso. Eficacia demostrada en trastornos emocionales y del comportamiento (Hofmann et al., 2012; Beck Institute).",
        icon: "🧠",
        details: [
          "Evaluación cognitiva detallada",
          "Reestructuración cognitiva paso a paso",
          "Técnicas conductuales validadas",
          "Prevención de recaídas"
        ],
        benefits: [
          "Reducción significativa de síntomas en 12-20 sesiones",
          "Eficacia comparable o superior a medicación para ansiedad/depresión (APA Guidelines)",
          "Habilidades aplicables a largo plazo"
        ]
      },
      {
        id: 2,
        title: "Intervención en Crisis y Riesgo Suicida",
        description: "Aplicación del modelo ABC de Kanel (2015) con integración de protocolos de la OMS para manejo de crisis. Enfoque en reducción de riesgo y estabilización inmediata.",
        icon: "🆘",
        details: [
          "Evaluación de riesgo suicida con escalas validadas",
          "Plan de seguridad individualizado",
          "Técnicas de grounding y regulación emocional",
          "Seguimiento intensivo post-crisis"
        ],
        benefits: [
          "Contención emocional efectiva",
          "Reducción de reincidencia en conductas de riesgo",
          "Derivación adecuada cuando sea necesario"
        ]
      },
      {
        id: 3,
        title: "Terapia para Trastornos de Ansiedad",
        description: "Protocolos basados en exposición gradual (Foa et al.) y manejo de preocupación (Dugas). Combinación de TCC y técnicas de tercera generación.",
        icon: "😰",
        details: [
          "Jerarquías de exposición individualizadas",
          "Entrenamiento en relajación aplicada",
          "Técnicas de atención plena",
          "Prevención de respuesta"
        ],
        benefits: [
          "Reducción de síntomas en 75% de casos (NIMH)",
          "Mejora en funcionamiento diario",
          "Herramientas para manejo autónomo"
        ]
      },
      {
        id: 4,
        title: "Terapia Breve para Depresión",
        description: "Aplicación del modelo de activación conductual (Martell et al.) con componentes cognitivos. Protocolos adaptados a gravedad según guías NICE.",
        icon: "🌧️",
        details: [
          "Monitoreo de actividades y estado de ánimo",
          "Interrupción de rumiación",
          "Activación conductual gradual",
          "Modificación de esquemas depresogénicos"
        ],
        benefits: [
          "Reducción de pensamientos automáticos negativos",
          "Prevención de recaídas"
        ]
      },
      {
        id: 5,
        title: "Evaluación Psicológica Integral",
        description: "Proceso diagnóstico con baterías estandarizadas (BDI, STAI, MMPI-2) para trastornos internalizantes y externalizantes.",
        icon: "📝",
        details: [
          "Entrevista clínica estructurada",
          "Aplicación de pruebas validadas",
          "Análisis integrativo de resultados",
          "Devolución con recomendaciones específicas"
        ],
        benefits: [
          "Diagnóstico preciso y diferencial",
          "Lineamiento claro para intervención",
          "Detección temprana de comorbilidades"
        ]
      },
      {
        id: 6,
        title: "Psicoeducación y Entrenamiento a Familiares",
        description: "Programas basados en evidencia para manejo de trastornos mentales en ámbito familiar (McFarlane, 2016).",
        icon: "👨‍👩‍👧‍👦",
        details: [
          "Educación sobre trastornos específicos",
          "Estrategias de comunicación efectiva",
          "Manejo de contingencias",
          "Autocuidado para cuidadores"
        ],
        benefits: [
          "Reducción de estrés familiar",
          "Mejor adherencia a tratamientos",
          "Disminución de recaídas"
        ]
      }
    ];
  
    return (
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Servicios de Psicología Clínica Especializada</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intervenciones basadas en evidencia científica, adaptadas a cada caso con rigor profesional y enfoque humanista
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-6 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Metodología:</h4>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-700 mb-2">Resultados Esperados:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-500 mr-2">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
  
        <div className="mt-16 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Enfoque Clínico Profesional</h2>
          <p className="text-gray-700 mb-4">
            Servicios que integran la mejor evidencia científica con experiencia clínica especializada en:
          </p>
          <ul className="grid md:grid-cols-3 gap-4">
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">🔍 Evaluación Rigurosa</h3>
              <p className="text-gray-600">Diagnóstico preciso con instrumentos validados</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">💊 Protocolos Basados en Evidencia</h3>
              <p className="text-gray-600">Técnicas con eficacia demostrada en estudios controlados</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">🤝 Enfoque Centrado en la Persona</h3>
              <p className="text-gray-600">Adaptación a necesidades individuales con calidez profesional</p>
            </li>
          </ul>
        </div>
  
        <div className="mt-12 bg-indigo-50 p-8 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-indigo-800 mb-3">Formación Académica Relevante</h3>
          <p className="text-gray-700">
            Lic. en Psicología | Maestría en Psicología Clínica | Diplomado en Intervención en Crisis y Atención al Suicidio | Diplomado en Psicoterapia Cognitivo-Conductual
          </p>
        </div>
      </section>
    );
  }