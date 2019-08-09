import React, { FunctionComponent } from 'react';
import Logo from '../../assets/logos/logo.png';
import './index.css';
import Facebook from '../../assets/logos/facebook.svg';

export const Footer: FunctionComponent = () => {
	return (
		<div className="footer-container ui-content-text">
			<div className="footer-left ui-v-center">
				<div>
					<img src={Logo} alt="logo" className="logo" />
					<h1 className="ui-main-title ui-inline-block">Coches Neurologicos</h1>
				</div>
			</div>
			<div className="footer-middle ui-v-bottom ui-mb">
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
			<div className="footer-right ui-v-bottom ui-mb">
				<div>
					<a target="" href="https://www.facebook.com/cochesneurologicos/">
						<img src={Facebook} alt="" className="social-icon fb" />
					</a>
					<a href="mailto:ventas@cochesneurologicos.com">
						<img
							src="https://simpleicons.org/icons/gmail.svg"
							alt=""
							className="social-icon gmail"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};
