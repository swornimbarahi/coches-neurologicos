import React, { FunctionComponent } from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Inicio } from './components/Inicio';

import { Footer } from './components/Footer';

const App: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Inicio />
			<Footer />
		</BrowserRouter>
	);
};

export default App;
