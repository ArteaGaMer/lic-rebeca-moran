import Image from 'next/image';
import Navbar from '@/components/Navbar';
import CalendlyModal from '@/components/CalendlyModal';

export default function Home() {
  return (
    <>
      {/* Hero Section - Gradiente rosa pastel + lavanda */}
      <section className="relative bg-gradient-to-br from-[#FFD1DC] to-[#E6E6FA] text-[#8A4F7D] py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Bienestar Emocional con <br/>Fundamento Científico
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Lic. Rebeca Moran | Psicóloga Clínica
          </p>
          
          <div className="max-w-2xl mx-auto bg-white/30 backdrop-blur-sm p-8 rounded-xl mb-8 border border-[#F8C3CD]">
          <p className="text-lg mb-6">
            <span className="font-bold">"La terapia cognitivo-conductual puede reducir los síntomas de depresión en un 60-70% de los casos"</span> 
            <br/>
            <span className="text-sm opacity-90">
              (Hollon et al., 2005,{" "}
              <a 
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3584580/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-[#DCD0FF] transition"
              >
                Journal of Consulting and Clinical Psychology
              </a>)
            </span>
          </p>
            <CalendlyModal 
              buttonText="📅 Agendar Primera Sesión" 
              className="bg-[#DCD0FF] hover:bg-[#C9B8FF] text-[#5E4A7D] font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* Sección de Credenciales - Fondo blanco roto */}
      <section className="py-16 bg-[#F9F5F0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8A4F7D] mb-6">
              Formación y Especialización
            </h2>
            <p className="text-xl text-[#B2A1BB]">
              Enfoque terapéutico con fundamento científico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#F5EEE6] p-8 rounded-xl border border-[#E6D5D5] hover:shadow-lg transition hover:border-[#DCD0FF]">
              <span className="text-4xl mb-6 block text-[#DCD0FF]">🎓</span>
              <h3 className="text-xl font-semibold mb-4 text-[#8A4F7D]">Formación Académica</h3>
              <ul className="space-y-3 text-[#A685A2]">
                <li>• Licenciatura en Psicología</li>
                <li>• Maestría en Psicología Clínica</li>
                <li>• Diplomado en TCC</li>
                <li>• Diplomado en Intervención en Crisis</li>
              </ul>
            </div>
            
            <div className="bg-[#F5EEE6] p-8 rounded-xl border border-[#E6D5D5] hover:shadow-lg transition hover:border-[#DCD0FF]">
              <span className="text-4xl mb-6 block text-[#DCD0FF]">🛡️</span>
              <h3 className="text-xl font-semibold mb-4 text-[#8A4F7D]">Enfoque Clínico</h3>
              <ul className="space-y-3 text-[#A685A2]">
                <li>• Terapia Cognitivo-Conductual</li>
                <li>• Intervención en Crisis</li>
                <li>• Manejo de Ansiedad/Depresión</li>
              </ul>
            </div>
            
            <div className="bg-[#F5EEE6] p-8 rounded-xl border border-[#E6D5D5] hover:shadow-lg transition hover:border-[#DCD0FF]">
              <span className="text-4xl mb-6 block text-[#DCD0FF]">🔬</span>
              <h3 className="text-xl font-semibold mb-4 text-[#8A4F7D]">Metodología</h3>
              <ul className="space-y-3 text-[#A685A2]">
                <li>• Protocolos basados en evidencia</li>
                <li>• Evaluaciones estandarizadas</li>
                <li>• Planes personalizados</li>
                <li>• Seguimiento continuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Especialidades - Fondo lavanda pastel */}
      <section className="py-16 bg-[#F0E6FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#8A4F7D]">
            Áreas de Especialización
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-[#DCD0FF]">
              <div className="flex items-start mb-6">
                <span className="text-3xl mr-4 text-[#B2E2BF]">🧠</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#8A4F7D]">Terapia Cognitivo-Conductual</h3>
                  <p className="text-[#A685A2] mb-4">
                    Enfoque estructurado y orientado a soluciones para modificar patrones de pensamiento y comportamiento disfuncionales.
                  </p>
                  <ul className="text-sm text-[#A685A2] space-y-2">
                    <li>• Acompañamiento profesional cercano</li>
                    <li>• Espacio seguro y confidencial</li>
                    <li>• Objetivos claros y alcanzables</li>
                  </ul>
                  <p className="text-xs text-[#B2A1BB] mt-3">
                    (American Psychological Association, 2017)
                  </p>
                </div>
              </div>
              <CalendlyModal 
                buttonText="Solicitar Terapia TCC" 
                className="bg-[#E6E6FA] text-[#5E4A7D] hover:bg-[#DCD0FF] font-medium py-3 px-6 rounded-lg text-sm w-full"
              />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-[#DCD0FF]">
              <div className="flex items-start mb-6">
                <span className="text-3xl mr-4 text-[#B2E2BF]">🧘</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#8A4F7D]">Manejo de Ansiedad</h3>
                  <p className="text-[#A685A2] mb-4">
                    Técnicas comprobadas para reducir síntomas y mejorar la calidad de vida.
                  </p>
                  <ul className="text-sm text-[#A685A2] space-y-2">
                    <li>• Exposición gradual</li>
                    <li>• Reestructuración cognitiva</li>
                    <li>• Técnicas de relajación</li>
                  </ul>
                </div>
              </div>
              <CalendlyModal 
                buttonText="Controlar mi Ansiedad" 
                className="bg-[#E6E6FA] text-[#5E4A7D] hover:bg-[#DCD0FF] font-medium py-3 px-6 rounded-lg text-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 bg-[#F9F5F0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8A4F7D]">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-[#E6D5D5] pb-6">
              <h3 className="text-xl font-semibold mb-2 text-[#8A4F7D]">¿Cómo funciona la primera sesión?</h3>
              <p className="text-[#A685A2]">
                La primera sesión es una entrevista clínica de 50 minutos donde conoceremos tu motivo de consulta, historia personal y objetivos terapéuticos.
              </p>
            </div>
            
            <div className="border-b border-[#E6D5D5] pb-6">
              <h3 className="text-xl font-semibold mb-2 text-[#8A4F7D]">¿Qué diferencia tu enfoque?</h3>
              <p className="text-[#A685A2]">
                Combino formación con especializaciones en TCC e intervención en crisis, utilizando protocolos basados en evidencia científica.
              </p>
            </div>
            
            <div className="text-center mt-12">
              <CalendlyModal 
                buttonText="📅 Agendar Primera Sesión" 
                className="bg-[#DCD0FF] hover:bg-[#C9B8FF] text-[#5E4A7D] font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}