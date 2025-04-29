import Navbar from '@/components/Navbar';
import './globals.css';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FloatingInstagram from '@/components/FloatingInstagram'; // Nueva importación
import FloatingCalendly from '@/components/FloatingCalendly';

export const metadata = {
  title: 'Lic. Rebeca Moran - Psicóloga Clínica',
  description: 'Terapia profesional especializada',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="text-indigo-900 py-6 text-center">
          © {new Date().getFullYear()} Lic. Rebeca Moran - Todos los derechos reservados
        </footer>
        {/* Botones flotantes */}
        {/* <FloatingWhatsApp /> */}
        <FloatingCalendly />
        <FloatingInstagram />
      </body>
    </html>
  );
}