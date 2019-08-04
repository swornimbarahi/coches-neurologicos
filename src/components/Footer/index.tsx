import React, { FunctionComponent } from 'react';
import Logo from '../../assets/logos/logo.png';
import { Link } from 'react-router-dom';
import './index.css';
import Facebook from '../../assets/logos/facebook.svg';

export const Footer: FunctionComponent = () => {
	return (
		<div className="footer-container">
			<div className="footer-left">
				<img src={Logo} alt="logo" className="logo" />
				<h1 className="navbar-title">Coches Neurologicos</h1>
			</div>
			<div className="footer-middle">
				<div className="link-container">
					<div>
						<Link to="#inicio" className="footer-link">
							Inicio
						</Link>
					</div>
					<div>
						<Link to="#inicio" className="footer-link">
							Quienes Somos
						</Link>
					</div>
					<div>
						<Link to="#inicio" className="footer-link">
							Productos
						</Link>
					</div>
					<div>
						<Link to="#inicio" className="footer-link">
							Contacto
						</Link>
					</div>
				</div>
			</div>
			<div className="footer-right">
				<img src={Facebook} alt="" className="social-icon fb" />
				<img src="https://simpleicons.org/icons/gmail.svg" alt="" className="social-icon gmail" />
			</div>
		</div>
	);
};
