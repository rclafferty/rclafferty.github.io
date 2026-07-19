import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import Project from './pages/Project';
import Error404 from './pages/Error404';

import './App.css'
import Navbar from './components/Navbar';
import HeaderContent from './components/HeaderContent';

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
		<Navbar />
		<div id="outerwrapper">
			<HeaderContent />
			<ErrorBoundary fallback="An error has occurred. Please ensure JavaScript is enabled in your browser and either refresh the page or try again later.">
				<Routes>
					<Route path="/" index element={<Home />} />
					<Route path="/:category/:id" element={<Project />} />
				
					<Route path="/Error404" element={<Error404 />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</ErrorBoundary>
		</div>
		</>
	);
}

export default App;
