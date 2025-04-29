import Link from 'next/link';

export default function FloatingCalendly() {
  return (
    <Link 
      href="https://calendly.com/rebecamoran-psic/sesion" 
      target="_blank"
      className="fixed bottom-24 right-6 bg-[#FFD6E7] hover:bg-[#FFB8D9] text-pink-800 p-4 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-pink-200"
      aria-label="Agendar cita con Rebeca Moran Psicología"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#C13584">
        <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h2v2h2V6h6v2h2V6h2v2H5z"/>
        <path d="M12 13h2v2h-2zm-4 0h2v2H8zm4 4h2v2h-2zm-4 0h2v2H8zm4 0h2v2h-2z"/>
      </svg>
    </Link>
  );
}