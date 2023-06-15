import { useState, createContext } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Hero } from './components';

export const context = createContext<{ 
	isLight: boolean, 
	setIsLight: (isLight: boolean) => void,
}>({ isLight: true, setIsLight: () => {} });

function App() {

	const [isLight, setIsLight] = useState<boolean>(true);

	return (
		<context.Provider value={{ isLight, setIsLight }}>
			<Router>
				<div className="relative z-0 bg-primary">
					<div className={`${ isLight ? "bg-hero-pattern-light" : "bg-hero-pattern-dark" } bg-cover bg-no-repeat bg-center`}>
						<Navbar />
						<Hero />
					</div>
					{/* <About />
					<Tech />
					<Works />
					<div className="relative z-0">
						<Contact />
					</div> */}
				</div>
			</Router>
		</context.Provider>
	)
}

export default App