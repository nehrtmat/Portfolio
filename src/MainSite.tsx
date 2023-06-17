import { useContext } from 'react';
import { Navbar, Hero, About, Tech, Projects, Footer } from './components';
import { context } from './App';

const MainSite = () => {
    const { isLight } = useContext(context);

    return (
        <div className={`${isLight ? "bg-primary-light" : "bg-primary-dark"}`}>
            <Navbar />
            <Hero />
            <About />
            <Tech />
            <Projects />
            <Footer />
        </div>
    )
}

export default MainSite;