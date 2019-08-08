import React, { FunctionComponent } from 'react';
import QuienSomosImage1 from '../../assets/images/quien_somos_1.png';

import './index.css';

export const QuienSomos: FunctionComponent = () => {
	return (
		<div className="about-super-container">
			<div className="about-title">
				<h1>QUIENES SOMOS</h1>
			</div>
			<div className="about-container">
				<div className="about-left">
					<h1>NUESTRA MISIÓN</h1>
					<p>
						Mejorar la capacidad de vida de las personas con alguna discapacidad a sentirse
						independientes a través de nuestros productos que están diseñados para dar felicidad y
						calidad de vida a las personas especiales.
					</p>
				</div>
				<div className="about-middle">
					<img src={QuienSomosImage1} alt="" className="about-image" />
				</div>
				<div className="about-right">
					<h1>NUESTRA VISIÓN</h1>
					<p>
						Lograr posesionarnos en el mercado peruano como el mayor y mejor representante en la
						importación de productos ortopédicos.
					</p>
				</div>
			</div>
		</div>
	);
};
