'use client';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#8A4F7D]/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-xl border border-[#F0E6FA]">
        
        {/* Encabezado */}
        <div className="bg-[#F9F5F0] p-6 text-center relative border-b border-[#F0E6FA]">
          <h3 className="text-3xl font-bold text-[#8A4F7D]">Contáctame</h3>
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-[#8A4F7D] hover:text-[#DCD0FF] text-3xl transition"
            aria-label="Cerrar modal"
          >
            &times;
          </button>
        </div>

        {/* Tarjetas de contacto - Ahora en grid */}
        <div className="grid md:grid-cols-3 gap-6 p-8">
          {/* Tarjeta 1: Calendly */}
          <ContactCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#5E4A7D">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm7 6h5v-2h-5v2z"/>
              </svg>
            }
            bgColor="bg-[#DCD0FF]"
            title="Agendar cita"
            description="Reserva tu sesión en línea"
            onClick={() => window.open('https://calendly.com/rebecamoran-psic/sesion', '_blank')}
          />

          {/* Tarjeta 2: WhatsApp */}
          <ContactCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            }
            bgColor="bg-green-100"
            title="WhatsApp"
            description="Chatea directamente conmigo"
            onClick={() => window.open('https://wa.me/526145536279?text=Hola,%20quiero%20agendar%20una%20cita', '_blank')}
          />

          {/* Tarjeta 3: Instagram */}
          <ContactCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            }
            bgColor="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
            title="Instagram"
            description="Sígueme para ver contenido sobre salud mental"
            onClick={() => window.open('https://www.instagram.com/rebecamoran.psic', '_blank')}
          />
        </div>

        {/* Pie del modal */}
        <div className="bg-[#F9F5F0] p-6 text-center border-t border-[#F0E6FA]">
          <p className="text-lg text-[#5E4A7D]">
            O escríbeme a: <span className="font-bold">rebecamoran.psic@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// Componente auxiliar para tarjetas
function ContactCard({ icon, bgColor, title, description, onClick }) {
  return (
    <div 
      className="flex flex-col items-center p-6 border border-[#F0E6FA] rounded-xl hover:bg-[#F9F5F0] cursor-pointer transition hover:shadow-md text-center"
      onClick={onClick}
    >
      <div className={`${bgColor} p-4 rounded-full mb-4`}>
        {icon}
      </div>
      <h4 className="font-bold text-xl text-[#5E4A7D] mb-2">{title}</h4>
      <p className="text-[#A685A2]">{description}</p>
    </div>
  );
}