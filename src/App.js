import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './pages/HomePage/index'
import Footer from './components/Footer/index'
import TimingPage from './pages/TimingPage/index'
import AboutusPage from './pages/AboutusPage/index'

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Route exact path="/" component={() => <HomePage />} />
				<Route exact path="/timing" component={() => <TimingPage />} />
				<Route exact path="/about-us" component={() => <AboutusPage />} />

				<Footer />
			</Router>
		</div>
	)
}

export default App
