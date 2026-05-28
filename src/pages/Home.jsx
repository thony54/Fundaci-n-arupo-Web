import PageTransition from '../components/motion/PageTransition';
import Reveal from '../components/motion/Reveal';
import Hero from '../components/Hero';
import Allies from '../components/Allies';
import About from '../components/About';
import Team from '../components/Team'; // Added Team component import
import Areas from '../components/Areas';
import Impact from '../components/Impact';
import Projects from '../components/Projects';
import SustainabilityAlliance from '../components/SustainabilityAlliance';
import Volunteer from '../components/Volunteer';
import Testimonials from '../components/Testimonials';
import ImageCarousel from '../components/ImageCarousel';
import CTA from '../components/CTA';

export default function Home() {
    return (
        <PageTransition>
            <Hero />
            <Reveal width="100%">
                <Allies />
            </Reveal>
            <Reveal width="100%">
                <About />
            </Reveal>
            <Reveal width="100%">
                <Team /> {/* Added Team Section */}
            </Reveal>
            <Reveal width="100%" delay={0.2}>
                <Areas />
            </Reveal>
            <Reveal width="100%">
                <Impact />
            </Reveal>
            <Reveal width="100%">
                <Projects />
            </Reveal>
            <Reveal width="100%">
                <SustainabilityAlliance />
            </Reveal>
            <Reveal width="100%">
                <Volunteer />
            </Reveal>
            <Reveal width="100%">
                <ImageCarousel />
            </Reveal>
            <Reveal width="100%">
                <Testimonials />
            </Reveal>
            <Reveal width="100%">
                <CTA />
            </Reveal>
        </PageTransition>
    );
}
