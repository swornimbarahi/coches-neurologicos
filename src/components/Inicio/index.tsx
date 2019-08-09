import React, { FunctionComponent } from 'react';
import InicioImage from '../../assets/images/inicio_image.png';
import './index.css';

export const Inicio: FunctionComponent = () => {
	return (
		<div id={'inicio'} className="inicio-container ui-content-text">
			<div className="ui-v-center">
				<img src={InicioImage} alt="" className="inicio-image" />
			</div>
			<div className="ui-content-text ui-v-center">
				Somos una empresa representante de las marcas <strong>Stealth Products y Leggero,</strong>
				que cuentan con una variedad de sillas neurológicas pediátricas para niños especiales.
				Nuestros distintos modelos se acomodan a la preferencia y las necesidades de nuestros
				clientes
			</div>
		</div>
	);
};
