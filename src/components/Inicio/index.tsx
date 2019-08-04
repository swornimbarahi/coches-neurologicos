import React, { FunctionComponent } from 'react';
import InicioImage from '../../assets/images/inicio_image.jpg';
import './index.css';

export const Inicio: FunctionComponent = () => {
	return (
		<div className="inicio-container">
			<div className="inicio-image-container">
				<img src={InicioImage} alt="" className="inicio-image" />
			</div>
			<div className="inicio-side-text">
				Somos una empresa representante de las marcas <strong>Stealth Products y Leggero,</strong>
				que cuentan con una variedad de sillas neurológicas pediátricas para niños especiales.
				Nuestros distintos modelos se acomodan a la preferencia y las necesidades de nuestros
				clientes
			</div>
		</div>
	);
};
