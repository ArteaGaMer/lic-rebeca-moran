import Image from 'next/image';
import Navbar from '@/components/Navbar';
import CalendlyModal from '@/components/CalendlyModal';

export default function Home() {
  return (
    <>
      {/* Hero Section Especializado */}
      <section className="relative bg-gradient-to-br from-blue-800 to-purple-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Bienestar Emocional con <br/>Fundamento Científico
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Lic. Rebeca Moran | Psicóloga Clínica
          </p>
          
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-8 border border-white/20">
            <p className="text-lg mb-6">
              <span className="font-bold">"La terapia cognitivo-conductual puede reducir los síntomas de depresión en un 60-70% de los casos"</span> 
              <br/>
              <span className="text-sm opacity-80">(Hollon et al., 2005, <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3584580/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">Journal of Consulting and Clinical Psychology</a>)</span>
            </p>
            <CalendlyModal 
              buttonText="📅 Agendar Entrevista Clínica" 
              className="bg-white text-indigo-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Sección de Credenciales Actualizada */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Formación y Especialización
            </h2>
            <p className="text-xl text-gray-600">
              Profesionalismo avalado por instituciones reconocidas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <span className="text-4xl mb-6 block">🎓</span>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Formación Académica</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Licenciatura en Psicología</li>
                <li>• Maestría en Psicología Clínica</li>
                <li>• Diplomado en TCC</li>
                <li>• Diplomado en Intervención en Crisis</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <span className="text-4xl mb-6 block">🛡️</span>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Enfoque Clínico</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Terapia Cognitivo-Conductual</li>
                <li>• Intervención en Crisis</li>
                <li>• Prevención del Suicidio</li>
                <li>• Manejo de Ansiedad/Depresión</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <span className="text-4xl mb-6 block">🔬</span>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Metodología</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Protocolos basados en evidencia</li>
                <li>• Evaluaciones estandarizadas</li>
                <li>• Planes personalizados</li>
                <li>• Seguimiento continuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Especialidades */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Áreas de Especialización
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex items-start mb-6">
                <span className="text-3xl mr-4">🧠</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Terapia Cognitivo-Conductual</h3>
                  <p className="text-gray-700 mb-4">
                    Enfoque estructurado y orientado a soluciones para modificar patrones de pensamiento y comportamiento disfuncionales.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Acompañamiento profesional cercano</li>
                  <li>• Espacio seguro y confidencial</li>
                  <li>• Objetivos claros y alcanzables</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">
                    (American Psychological Association, 2017, <a href="https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">Cognitive Behavioral Therapy</a>)
                  </p>
                </div>
              </div>
              <CalendlyModal 
                buttonText="Solicitar Terapia TCC" 
                className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 font-medium py-3 px-6 rounded-lg text-sm w-full"
              />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex items-start mb-6">
                <span className="text-3xl mr-4">⚠️</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Intervención en Crisis</h3>
                  <p className="text-gray-700 mb-4">
                    Atención inmediata y especializada para situaciones de emergencia emocional y prevención de conductas de riesgo.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Protocolos de seguridad</li>
                    <li>• Manejo de crisis emocionales</li>
                    <li>• Reducción de daño inmediato</li>
                  </ul>
                </div>
              </div>
              <CalendlyModal 
                buttonText="Atención en Crisis" 
                className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 font-medium py-3 px-6 rounded-lg text-sm w-full"
              />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex items-start mb-6">
                <span className="text-3xl mr-4">💔</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Prevención del Suicidio</h3>
                  <p className="text-gray-700 mb-4">
                    Evaluación de riesgo e intervención especializada basada en los protocolos más actualizados.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Evaluación de factores de riesgo</li>
                    <li>• Planes de seguridad personalizados</li>
                    <li>• Acompañamiento profesional</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">
                    (Organización Mundial de la Salud, 2021, <a href="https://www.who.int/mental_health/suicide-prevention/en/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">Prevención del Suicidio</a>)
                  </p>
                </div>
              </div>
              <CalendlyModal 
                buttonText="Ayuda Urgente" 
                className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 font-medium py-3 px-6 rounded-lg text-sm w-full"
              />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex items-start mb-6">
                <span className="text-3xl mr-4">🧘</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Manejo de Ansiedad</h3>
                  <p className="text-gray-700 mb-4">
                    Técnicas comprobadas para reducir síntomas y mejorar la calidad de vida.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Exposición gradual</li>
                    <li>• Reestructuración cognitiva</li>
                    <li>• Técnicas de relajación</li>
                  </ul>
                </div>
              </div>
              <CalendlyModal 
                buttonText="Controlar mi Ansiedad" 
                className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 font-medium py-3 px-6 rounded-lg text-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonio + CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/20">
            <blockquote className="text-xl italic mb-8">
              "Al principio era escéptico sobre la terapia. Rebeca nunca me prometió soluciones rápidas, sino un proceso honesto. Aprendí que mejorar requiere trabajo, pero con sus herramientas y paciencia, poco a poco fui entendiendo mis emociones."
            </blockquote>
            <div className="font-semibold">- Roberto T., paciente por 5 meses</div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-6">El cambio comienza con un primer paso</h3>
              <CalendlyModal 
                buttonText="🌟 Quiero intentarlo" 
                className="bg-white text-indigo-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg shadow-xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes Actualizadas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Cómo funciona la primera sesión?</h3>
              <p className="text-gray-700">
                La primera sesión es una entrevista clínica de 50 minutos donde conoceremos tu motivo de consulta, historia personal y objetivos terapéuticos. También explicaré detalladamente el método psicoterapéutico que utilizaremos y responderé todas tus preguntas sobre el proceso.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué diferencia tu enfoque?</h3>
              <p className="text-gray-700">
                Combino mi formación con especializaciones en TCC e intervención en crisis, utilizando protocolos reconocidos internacionalmente y basados en evidencia científica.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                (American Psychological Association, 2019, <a href="https://www.apa.org/news/press/releases/2019/11/psychotherapy-effective" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">Eficacia de la psicoterapia</a>)
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Atiendes emergencias?</h3>
              <p className="text-gray-700">
                Sí, como especialista en intervención en crisis y prevención del suicidio, ofrezco atención prioritaria para situaciones urgentes con protocolos establecidos de atención inmediata.
              </p>
            </div>
            
            <div className="text-center mt-12">
              <CalendlyModal 
                buttonText="📅 Agendar Entrevista Clínica" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}