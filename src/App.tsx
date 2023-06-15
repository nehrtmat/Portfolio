import { useState, createContext } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Hero } from './components';

export const context = createContext<{ 
	mode: string, 
	setMode: (newMode: string) => void,
}>({ mode: "light", setMode: () => {} });

function App() {

	const [mode, setMode] = useState<string>("light");

	return (
		<context.Provider value={{ mode, setMode }}>
			<Router>
				<div className="relative z-0 bg-primary">
					<div className={`bg-hero-pattern-${mode} bg-cover bg-no-repeat bg-center`}>
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