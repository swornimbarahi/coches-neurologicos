import React, { FunctionComponent } from 'react';
import QuienSomosImage1 from '../../assets/images/quien_somos_1.png';

import './index.css';

export const QuienSomos: FunctionComponent = () => {
	return (
		<div id={'quienes'} className="about-super-container">
			<div>
				<h1 className="ui-main-title ui-text-bold text-left">QUIENES SOMOS</h1>
			</div>
			<div className="about-container">
				<div className="about-left ui-v-center">
					<div style={{ marginBottom: '40px' }}>
						<h1 className="ui-sub-title ui-text-bold">NUESTRA MISIÓN</h1>
						<div className="ui-content-text ui-v-center">
							Mejorar la capacidad de vida de las personas con alguna discapacidad a sentirse
							independientes a través de nuestros productos que están diseñados para dar felicidad y
							calidad de vida a las personas especiales.
						</div>
					</div>
					<div>
						<h1 className="ui-sub-title ui-text-bold">NUESTRA VISIÓN</h1>
						<div className="ui-content-text">
							Lograr posesionarnos en el mercado peruano como el mayor y mejor representante en la
							importación de productos ortopédicos.
						</div>
					</div>
				</div>
				<div className="about-right">
					<img src={QuienSomosImage1} alt="" className="about-image" />
				</div>
			</div>
		</div>
	);
};
