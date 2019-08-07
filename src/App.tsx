import React, { FunctionComponent } from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import { Inicio } from './components/Inicio';
import { Contacto } from './components/Contacto';
import { QuienSomos } from './components/QuienSomos';
import { Footer } from './components/Footer';
import { Productos } from './components/Productos';

const App: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Inicio />
			<QuienSomos />
			<Productos />
			<Contacto />
			<Footer />
		</BrowserRouter>
	);
};

export default App;
