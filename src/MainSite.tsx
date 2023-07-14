import { useContext } from 'react';
import { Navbar, Hero, About, Tech, Websites, Footer, Projects } from './components';
import { context } from './App';

const MainSite = () => {
    const { isLight } = useContext(context);

    return (
        <div className={`${isLight ? "bg-white" : "bg-black"}`}>
            <Navbar />
            <Hero />
            <About />
            <Tech />
            <Projects />
            <Websites />
            <Footer />
        </div>
    )
}

export default MainSite;