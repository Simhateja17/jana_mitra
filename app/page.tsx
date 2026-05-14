import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Highlights from './components/Highlights';
import MissionVisionValues from './components/MissionVisionValues';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollAnimations from './components/ScrollAnimations';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Reviews />
                <Highlights />
                <MissionVisionValues />
                <Contact />
            </main>
            <Footer />
            <ScrollAnimations />
        </>
    );
}
