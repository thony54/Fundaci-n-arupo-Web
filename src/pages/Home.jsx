import PageTransition from '../components/motion/PageTransition';
import Reveal from '../components/motion/Reveal';
import Hero from '../components/Hero';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import Problem from '../components/Problem';
import ContextStats from '../components/ContextStats';
import Team from '../components/Team'; // Added Team component import
import Areas from '../components/Areas';
import Impact from '../components/Impact';
import PolicyAchievements from '../components/PolicyAchievements';
import Projects from '../components/Projects';
import Cooperation from '../components/Cooperation';
import SustainabilityAlliance from '../components/SustainabilityAlliance';
import Volunteer from '../components/Volunteer';
import Testimonials from '../components/Testimonials';
import ImageCarousel from '../components/ImageCarousel';
import CTA from '../components/CTA';

// Desde la segunda sección, cada bloque se monta sobre el anterior con una curva.
const SHEET = 'arupo-sheet overflow-hidden';

export default function Home() {
    return (
        <PageTransition>
            <Hero />
            <Reveal width="100%">
                <About />
            </Reveal>
            <Reveal width="100%" className={SHEET}>
                <MissionVision />
            </Reveal>
            <Reveal width="100%" className={SHEET}>
                <Problem />
            </Reveal>
            <Reveal width="100%" className={SHEET}>
                <ContextStats />
            </Reveal>
            <Reveal width="100%" className={SHEET}>
                <Team /> {/* Added Team Section */}
            </Reveal>
            <Reveal width="100%" delay={0.2} className={SHEET}>
                <Areas />
            </Reveal>
            <Reveal width="100%" className={SHEET}>
                <Impact />
            </Reveal>
            <Reveal width="100%" className={SHEET}>
                <PolicyAchievements />
            </Reveal>
            <Reveal width="100%" className={SHEET}>
                <Projects />
            </Reveal>
            <Reveal width="100%" className={SHEET}>
                <Cooperation />
            </Reveal>
            <Reveal width="100%" className={SHEET}>
                <SustainabilityAlliance />
            </Reveal>
            <Reveal width="100%" className={SHEET}>
                <Volunteer />
            </Reveal>
            <Reveal width="100%" className={SHEET}>
                <ImageCarousel />
            </Reveal>
            <Reveal width="100%" className={SHEET}>
                <Testimonials />
            </Reveal>
            <Reveal width="100%" className={SHEET}>
                <CTA />
            </Reveal>
        </PageTransition>
    );
}
