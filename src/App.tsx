import React, { FunctionComponent } from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Inicio } from './components/Inicio';
import { Contacto } from './components/Contacto';

import { Footer } from './components/Footer';

const App: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Inicio />
			<Contacto />
			<Footer />
		</BrowserRouter>
	);
};

export default App;
