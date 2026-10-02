import qrFundacion from '../assets/QRs/QR Fundación Arupo.png';
import SectionDecor from './ui/Decor';
import ContactPanel from './ContactPanel';

export default function CTA() {
    return (
        <section id="contacto" className="relative py-28 lg:py-32 bg-cream-50 dark:bg-night-900 px-4 sm:px-6 lg:px-8 transition-colors duration-300 overflow-hidden">
            <SectionDecor variant="warm" />
            <ContactPanel
                tone="primary"
                intro="Ponte en contacto con nuestro equipo para conocer más sobre nuestra labor, servicios, o sumarte a nuestras iniciativas."
                qr={qrFundacion}
                qrAlt="Código QR Fundación Arupo"
                qrUrl="https://www.connexoapp.com/Fundaci%C3%B3n%20Arupo"
                qrCaption="Escanea este código para enviarnos un mensaje directo y recibir atención personalizada"
                logo="/logo-color.png"
                logoAlt="Fundación Arupo"
            />
        </section>
    );
}
