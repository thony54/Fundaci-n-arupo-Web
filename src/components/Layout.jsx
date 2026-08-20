import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/motion/ScrollProgress';

export default function Layout() {
    return (
        <>
            <ScrollProgress />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
