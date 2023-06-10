import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from './components';

function App() {

  return (
    <Router>
			<div className="">
				<div>
					<Navbar />
					{/* <Hero /> */}
				</div>
				{/* <About />
				<Tech />
				<Works />
				<div className="relative z-0">
					<Contact />
				</div> */}
			</div>
		</Router>
  )
}

export default App
