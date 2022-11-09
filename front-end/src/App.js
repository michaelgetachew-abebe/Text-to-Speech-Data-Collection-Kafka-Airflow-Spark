import React from 'react';
import './App.css';
import Nav from './components/index';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Amharic from './pages/amharic';
import About from './pages/about';
import Swahili from './pages/swahili';

function App() {
return (
	<Router>
	<Nav />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/amharic' element={<Amharic/>} />
    <Route path='/swahili' element={<Swahili/>} />
    <Route path='/about' element={<About/>} />
	</Routes>
	</Router>
);
}

export default App;
