'use client';
import { useEffect, useState } from 'react';

export default function FullScreenCalendlyModal() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Estilos completos para el modal
    const style = document.createElement('style');
    style.textContent = `
      /* Modal a pantalla completa */
      .calendly-overlay {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        background: white !important;
        z-index: 9999 !important;
        overflow: auto !important;
        padding: 0 !important;
        margin: 0 !important;
        border: none !important;
      }
      
      /* Contenedor principal */
      .calendly-popup-content {
        width: 100vw !important;
        height: 100vh !important;
        max-width: none !important;
        max-height: none !important;
        border-radius: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        border: none !important;
        background: white !important;
      }
      
      /* Iframe al 100% */
      .calendly-popup-iframe {
        width: 100% !important;
        height: 100% !important;
        min-height: 100vh !important;
        border: none !important;
      }
      
      /* Ocultar elementos no deseados */
      .calendly-popup-close,
      .calendly-overlay::before,
      .calendly-overlay::after {
        display: none !important;
        opacity: 0 !important;
        background: none !important;
      }
      
      /* Botón de cierre personalizado SIN fondo gris */
      .custom-calendly-close {
        position: fixed !important;
        top: 30px !important;
        right: 30px !important;
        background: #4F46E5 !important;
        color: white !important;
        width: 50px !important;
        height: 50px !important;
        border-radius: 50% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        font-size: 28px !important;
        font-weight: bold !important;
        z-index: 10000 !important;
        cursor: pointer !important;
        border: 2px solid white !important;
        box-shadow: none !important;
        transition: all 0.3s ease !important;
      }
      
      .custom-calendly-close:hover {
        background: #4338CA !important;
        transform: scale(1.1) !important;
      }
      
      /* Responsive para móviles */
      @media (max-width: 768px) {
        .custom-calendly-close {
          top: 20px !important;
          right: 20px !important;
          width: 45px !important;
          height: 45px !important;
          font-size: 24px !important;
        }
      }
    `;
    document.head.appendChild(style);

    // 2. Cargar Calendly
    if (!window.Calendly && !isLoaded) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    }

    // 3. Manejo del botón de cierre
    const manageCloseButton = () => {
      const overlay = document.querySelector('.calendly-overlay');
      const existingBtn = document.querySelector('.custom-calendly-close');
      
      if (overlay && !existingBtn) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'custom-calendly-close';
        closeBtn.innerHTML = '×';
        closeBtn.onclick = () => window.Calendly.closePopupWidget();
        document.body.appendChild(closeBtn);
      }
      
      if (!overlay && existingBtn) {
        document.body.removeChild(existingBtn);
      }
    };

    // 4. Observador de mutaciones
    const observer = new MutationObserver(manageCloseButton);
    observer.observe(document.body, { childList: true, subtree: true });

    // 5. Tecla ESC
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && window.Calendly) {
        window.Calendly.closePopupWidget();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.head.removeChild(style);
      observer.disconnect();
      window.removeEventListener('keydown', handleKeyDown);
      const btn = document.querySelector('.custom-calendly-close');
      if (btn) document.body.removeChild(btn);
    };
  }, [isLoaded]);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/rebecamoran-psic/sesion',
        parentElement: document.body,
        branding: false,
        text: 'Agendar Consulta',
        color: '#4F46E5',
        textColor: '#ffffff',
        language: 'es'
      });
    }
  };

  return (
    <button
      onClick={openCalendly}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Agendar Consulta
    </button>
  );
}