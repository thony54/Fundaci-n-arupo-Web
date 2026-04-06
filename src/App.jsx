import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Impact from './components/Impact';
import TerritoryStory from './pages/TerritoryStory';
import TherapeuticCenter from './pages/TherapeuticCenter';
import Gallery from './pages/Gallery';
import GalleryAdmin from './pages/GalleryAdmin';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="impacto" element={<Impact />} />
          <Route path="impacto/:id" element={<TerritoryStory />} />
          <Route path="centro-terapeutico" element={<TherapeuticCenter />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="login" element={<Login />} />
          <Route
            path="admin/galeria"
            element={
              <ProtectedRoute>
                <GalleryAdmin />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
