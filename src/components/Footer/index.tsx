import React, { FunctionComponent } from 'react';
import Logo from '../../assets/logos/logo.png';
import './index.css';
import Facebook from '../../assets/logos/facebook.svg';

export const Footer: FunctionComponent = () => {
	return (
		<div className="footer-container ui-content-text">
			<div className="footer-left">
				<img src={Logo} alt="logo" className="logo" />
				<h1 className="navbar-title">Coches Neurologicos</h1>
			</div>
			<div className="footer-middle ui-v-center">
				<div className="link-container">
					<div>
						<a href="#inicio" className="footer-link">
							<strong>Inicio</strong>
						</a>
					</div>
					<div>
						<a href="#quienes" className="footer-link">
							<strong>Quienes Somos</strong>
						</a>
					</div>
					<div>
						<a href="#productos" className="footer-link">
							<strong>Productos</strong>
						</a>
					</div>
					<div>
						<a href="#contacto" className="footer-link">
							<strong>Contacto</strong>
						</a>
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
