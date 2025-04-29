export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Psicoterapia Cognitivo-Conductual (TCC)",
      description: "Intervención especializada basada en el modelo de Beck, con protocolos adaptados a cada caso. Eficacia demostrada en trastornos emocionales y del comportamiento (Hofmann et al., 2012; Beck Institute).",
      icon: "🧠",
      details: [
        "Evaluación cognitiva integral inicial",
        "Reestructuración cognitiva paso a paso",
        "Técnicas conductuales validadas",
        "Prevención de recaídas con seguimiento"
      ],
      methodology: [
        "Sesiones semanales de 50 minutos",
        "Tareas prácticas entre sesiones",
        "Uso de registros y diarios terapéuticos",
        "Evaluaciones periódicas de progreso"
      ]
    },
    {
      id: 2,
      title: "Psicoterapia para Trastornos de Ansiedad",
      description: "Protocolos basados en exposición gradual (Foa et al.) y manejo de preocupación (Dugas). Combinación de TCC y técnicas de tercera generación.",
      icon: "😰",
      details: [
        "Jerarquías de exposición individualizadas",
        "Entrenamiento en relajación aplicada",
        "Técnicas de atención plena adaptadas"
      ],
      methodology: [
        "Enfoque gradual y sistemático",
        "Práctica guiada en sesión",
        "Exposición in vivo con acompañamiento",
        "Prevención de respuesta ritualizada"
      ]
    },
    {
      id: 3,
      title: "Psicoterapia Breve para Depresión",
      description: "Aplicación del modelo de activación conductual (Martell et al.) con componentes cognitivos. Protocolos adaptados a gravedad según guías NICE.",
      icon: "🌧️",
      details: [
        "Monitoreo de actividades y estado de ánimo",
        "Interrupción de patrones de rumiación",
        "Activación conductual gradual"
      ],
      methodology: [
        "Enfoque en pequeños cambios iniciales",
        "Refuerzo de logros conductuales",
        "Modificación de esquemas depresogénicos",
        "Prevención de recaídas"
      ]
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#8A4F7D] mb-4">Servicios de Psicología Clínica</h1>
        <p className="text-xl text-[#A685A2]">Enfoque profesional basado en evidencia científica y adaptado a cada persona</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#F0E6FA]"
          >
            <div className="text-5xl mb-6 text-center text-[#DCD0FF]">{service.icon}</div>
            <h3 className="text-2xl font-bold text-[#8A4F7D] mb-4 text-center">{service.title}</h3>
            <p className="text-[#A685A2] mb-6">{service.description}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-[#8A4F7D] mb-2">Componentes clave:</h4>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#B2E2BF] mr-2">•</span>
                    <span className="text-[#A685A2]">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#F0E6FA] p-4 rounded-lg">
              <h4 className="font-semibold text-[#5E4A7D] mb-2">Metodología de trabajo:</h4>
              <ul className="space-y-2">
                {service.methodology.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#B2E2BF] mr-2">✓</span>
                    <span className="text-[#5E4A7D]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#F0E6FA] p-8 rounded-xl text-center border border-[#DCD0FF]">
        <h3 className="text-xl font-semibold text-[#5E4A7D] mb-3">Formación Académica Relevante</h3>
        <p className="text-[#8A4F7D]">
          Lic. en Psicología | Maestría en Psicología Clínica | Diplomado en Intervención en Crisis y Atención al Suicidio | Diplomado en Psicoterapia Cognitivo-Conductual
        </p>
      </div>
    </section>
  );
}