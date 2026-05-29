import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { useAccessibility } from './context/AccessibilityContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Impact from './components/Impact';
import TerritoryStory from './pages/TerritoryStory';
import TherapeuticCenter from './pages/TherapeuticCenter';
import Gallery from './pages/Gallery';

export default function App() {
  const location = useLocation();
  const { settings } = useAccessibility();

  return (
    <MotionConfig reducedMotion={settings.reducedMotion ? "always" : "user"}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="impacto" element={<Impact />} />
            <Route path="impacto/:id" element={<TerritoryStory />} />
            <Route path="centro-terapeutico" element={<TherapeuticCenter />} />
            <Route path="galeria" element={<Gallery />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </MotionConfig>
  );
}
