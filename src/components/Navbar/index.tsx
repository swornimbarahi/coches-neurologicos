import React, { FunctionComponent } from 'react';
import Logo from '../../assets/logos/logo.png';
import LeggeroLogo from '../../assets/logos/leggero_logo.png';
import StealthLogo from '../../assets/logos/stealth_logo.png';
import './index.css';

export const Navbar: FunctionComponent = () => {
	return (
		<div className="navbar-container">
			<div className="navbar-left">
				<img src={Logo} alt="Coches Neurologicos Logo" className="logo" />
				<h1 className="navbar-title">Coches Neurologicos</h1>
			</div>
			<div className="navbar-right">
				<img src={StealthLogo} alt="Stealth Logo" className="logo" />
				<img src={LeggeroLogo} alt="Leggero Logo" className="logo" />
			</div>
		</div>
	);
};
