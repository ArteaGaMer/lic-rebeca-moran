import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Columna izquierda - Foto y datos básicos */}
        <div className="lg:w-1/3 w-full">
          <div className="bg-white p-6 rounded-xl shadow-lg sticky top-8">
            <div className="relative aspect-square w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/psicologa-perfil.jpg" // Cambia esta ruta por tu imagen
                alt="Lic. Rebeca Moran - Psicóloga Clínica"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Lic. Rebeca Moran</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Especialidad Principal</h3>
                <p className="text-gray-600">Psicología Clínica y Terapia Cognitivo-Conductual</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700">Años de Experiencia</h3>
                <p className="text-gray-600">Más de 8 años en consulta privada e institucional</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700">Enfoque Terapéutico</h3>
                <p className="text-gray-600">Cognitivo-Conductual integrado con técnicas de tercera generación</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700">Idiomas</h3>
                <p className="text-gray-600">Español (nativo), Inglés (técnico)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha - Contenido principal */}
        <div className="lg:w-2/3 w-full space-y-8">
          {/* Introducción personal */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Mi Enfoque Profesional</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Mi práctica clínica se centra en proporcionar intervenciones basadas en evidencia científica, adaptadas a las necesidades individuales de cada paciente. Creo firmemente en la combinación del rigor metodológico con la calidez humana, creando un espacio seguro donde las personas puedan explorar sus dificultades y desarrollar herramientas efectivas para el cambio.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Durante mi carrera he observado que el verdadero cambio terapéutico ocurre cuando integramos la comprensión cognitiva con la modificación de patrones conductuales, siempre dentro de un marco de respeto y validación emocional. Mi objetivo es empoderar a mis pacientes para que se conviertan en agentes activos de su propio bienestar psicológico.
            </p>
          </div>

          {/* Formación académica */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Formación Académica</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="font-bold text-gray-700">Maestría en Psicología Clínica</h3>
                <p className="text-gray-600">Universidad [Nombre], 20XX</p>
                <p className="text-gray-500 mt-1">Tesis sobre "Eficacia de intervenciones en crisis" con mención honorífica</p>
              </li>
              <li>
                <h3 className="font-bold text-gray-700">Licenciatura en Psicología</h3>
                <p className="text-gray-600">Universidad [Nombre], 20XX</p>
                <p className="text-gray-500 mt-1">Especialización en psicopatología y diagnóstico clínico</p>
              </li>
            </ul>
          </div>

          {/* Certificaciones y especializaciones */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Certificaciones y Especializaciones</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Diplomado en Intervención en Crisis y Atención al Suicidio",
                  institution: "Instituto [Nombre]",
                  year: "20XX",
                  description: "Protocolos de evaluación e intervención en emergencias psicológicas"
                },
                {
                  title: "Diplomado en Psicoterapia Cognitivo-Conductual",
                  institution: "Centro [Nombre]",
                  year: "20XX",
                  description: "Aplicación avanzada de técnicas cognitivas y conductuales"
                },
                {
                  title: "Certificación en Terapia Dialéctico-Conductual (DBT)",
                  institution: "Instituto [Nombre]",
                  year: "20XX",
                  description: "Habilidades para regulación emocional y tolerancia al malestar"
                },
                {
                  title: "Formación en Primeros Auxilios Psicológicos",
                  institution: "Cruz Roja/OMS",
                  year: "20XX",
                  description: "Protocolos internacionales para atención en crisis"
                }
              ].map((cert, index) => (
                <div key={index} className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="font-bold text-gray-700">{cert.title}</h3>
                  <p className="text-gray-600">{cert.institution} · {cert.year}</p>
                  <p className="text-gray-500 mt-1">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experiencia profesional */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Trayectoria Profesional</h2>
            <div className="space-y-8">
              {[
                {
                  position: "Psicóloga Clínica",
                  institution: "Consulta Privada",
                  period: "20XX - Presente",
                  responsibilities: [
                    "Evaluación e intervención en trastornos de ansiedad y del estado de ánimo",
                    "Implementación de protocolos de terapia cognitivo-conductual",
                    "Intervención en crisis y manejo de riesgo suicida"
                  ]
                },
                {
                  position: "Terapeuta Cognitivo-Conductual",
                  institution: "Centro de Salud Mental [Nombre]",
                  period: "20XX - 20XX",
                  responsibilities: [
                    "Coordinación del programa de intervención en crisis",
                    "Capacitación a personal en detección de riesgo suicida",
                    "Terapia individual y grupal para adultos"
                  ]
                },
                {
                  position: "Practicante Clínica",
                  institution: "Hospital [Nombre]",
                  period: "20XX - 20XX",
                  responsibilities: [
                    "Evaluación neuropsicológica básica",
                    "Participación en equipo multidisciplinario de salud mental",
                    "Aplicación de pruebas psicométricas estandarizadas"
                  ]
                }
              ].map((exp, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-bold text-gray-700">{exp.position}</h3>
                  <p className="text-gray-600">{exp.institution} · {exp.period}</p>
                  <ul className="mt-3 space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Filosofía de trabajo */}
          <div className="bg-indigo-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Mi Compromiso Contigo</h2>
            <p className="text-gray-700 mb-6">
              Mi práctica profesional se rige por los más altos estándares éticos y de calidad. Ofrezco un espacio confidencial, libre de juicios, donde podremos trabajar colaborativamente hacia tus objetivos terapéuticos. Las cancelaciones requieren 24 horas de anticipación para permitir la reprogramación adecuada de espacios.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🤝",
                  title: "Confidencialidad Absoluta",
                  description: "Tus datos y proceso están protegidos por el secreto profesional según la ley"
                },
                {
                  icon: "🧠",
                  title: "Enfoque Científico",
                  description: "Uso exclusivo de técnicas con eficacia demostrada en investigación"
                },
                {
                  icon: "❤️",
                  title: "Empatía Profesional",
                  description: "Acompañamiento cálido pero objetivo, centrado en soluciones"
                },
                {
                  icon: "🔄",
                  title: "Evaluación Continua",
                  description: "Monitoreo sistemático de progresos con instrumentos validados"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}