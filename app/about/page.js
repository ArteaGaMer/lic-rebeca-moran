import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Columna izquierda - Foto y datos básicos */}
        <div className="lg:w-1/3 w-full">
          <div className="bg-white p-6 rounded-xl shadow-lg sticky top-8 border border-[#F0E6FA]">
            <div className="relative aspect-square w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/psicologa-perfil.jpg"
                alt="Lic. Rebeca Moran - Psicóloga Clínica"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <h2 className="text-2xl font-bold text-[#8A4F7D] mb-4">Lic. Rebeca Moran</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#8A4F7D]">Especialidad Principal</h3>
                <p className="text-[#A685A2]">Psicología Clínica y Terapia Cognitivo-Conductual</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#8A4F7D]">Años de Experiencia</h3>
                <p className="text-[#A685A2]">Más de 4 años en consulta privada e institucional</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#8A4F7D]">Enfoque Terapéutico</h3>
                <p className="text-[#A685A2]">Cognitivo-Conductual</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha - Contenido principal */}
        <div className="lg:w-2/3 w-full space-y-8">
          {/* Introducción personal */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-[#F0E6FA]">
            <h1 className="text-3xl font-bold text-[#8A4F7D] mb-6">Enfoque Profesional</h1>
            <p className="text-lg text-[#5E4A7D] leading-relaxed mb-4">
              Como terapeuta cognitivo-conductual, trabajo ayudando a mis pacientes a identificar y modificar patrones de pensamiento y comportamiento que afectan su bienestar. Detrás de cada consulta hay una persona con necesidades únicas.
            </p>
            <p className="text-lg text-[#5E4A7D] leading-relaxed">
              Complemento los métodos basados en investigación con la sensibilidad que cada persona única requiere en su proceso terapéutico. Encontraremos un acompañamiento profesional que valora tu historia personal, tus fortalezas y tus circunstancias específicas.
            </p>
          </div>

          {/* Formación académica */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-[#F0E6FA]">
            <h2 className="text-2xl font-bold text-[#8A4F7D] mb-6 border-b border-[#DCD0FF] pb-2">Formación Académica</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="font-bold text-[#8A4F7D]">Maestría en Psicología Clínica</h3>
                <p className="text-[#A685A2]">Universidad ISEO (Instituto Superior de Estudios de Occidente), 2022</p>
              </li>
              <li>
                <h3 className="font-bold text-[#8A4F7D]">Licenciatura en Psicología</h3>
                <p className="text-[#A685A2]">Universidad Latinoamericana, 2020</p>
              </li>
            </ul>
          </div>

          {/* Certificaciones y especializaciones */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-[#F0E6FA]">
            <h2 className="text-2xl font-bold text-[#8A4F7D] mb-6 border-b border-[#DCD0FF] pb-2">Certificaciones y Especializaciones</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Diplomado en Intervención en Crisis y Atención al Suicidio",
                  institution: "Centro Internacional de Posgrados",
                  year: "2022",
                  description: "Modelos de intervención bajo la perspectiva de la terapia breve."
                },
                {
                  title: "Diplomado en Psicoterapia Cognitivo-Conductual",
                  institution: "Centro de psicoterapia cognitiva",
                  year: "2020",
                  description: "Aplicación de técnicas cognitivas y conductuales"
                },
              ].map((cert, index) => (
                <div key={index} className="border-l-4 border-[#ccb2e2] pl-4">
                  <h3 className="font-bold text-[#8A4F7D]">{cert.title}</h3>
                  <p className="text-[#A685A2]">{cert.institution} · {cert.year}</p>
                  <p className="text-[#A685A2] mt-1">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Filosofía de trabajo */}
          <div className="bg-[#F0E6FA] p-8 rounded-xl border border-[#DCD0FF]">
            <h2 className="text-2xl font-bold text-[#5E4A7D] mb-4">Mi Compromiso Contigo</h2>
            
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
                  description: "Uso de técnicas con eficacia demostrada en investigación"
                },
                {
                  icon: "❤️",
                  title: "Empatía Profesional",
                  description: "Acompañamiento cálido pero objetivo, centrado en soluciones"
                },
                {
                  icon: "🎯",
                  title: "Enfoque Personalizado",
                  description: "Intervenciones diseñadas específicamente para tus necesidades y objetivos"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-[#F0E6FA]">
                  <div className="text-3xl mb-2 text-[#DCD0FF]">{item.icon}</div>
                  <h3 className="font-semibold text-[#8A4F7D] mb-1">{item.title}</h3>
                  <p className="text-[#5E4A7D]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}