import React, { FunctionComponent } from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Inicio } from './components/Inicio';

const App: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Inicio />
		</BrowserRouter>
	);
};

export default App;
