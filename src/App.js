import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './pages/HomePage/index'
import Footer from './components/Footer/index'

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Route exact path="/" component={() => <HomePage />} />

				<Footer />
			</Router>
		</div>
	)
}

export default App
