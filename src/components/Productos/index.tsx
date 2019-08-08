import React, { FunctionComponent, useEffect, useState } from 'react';
import classnames from 'classnames';

import Dyno from '../../assets/images/dyno.png';
import Trak from '../../assets/images/trak.png';
import Reach from '../../assets/images/reach.png';
import Lightning from '../../assets/images/lightning.png';

import './index.css';

export const Productos: FunctionComponent = () => {
	const [product, setProduct] = useState('DYNO');

	return (
		<>
			<div className="text-left about-title video-title">
				<h1>NUESTROS PRODUCTOS</h1>
			</div>
			<div
				className={classnames({
					'ui-bg--red': product === 'DYNO',
					'ui-bg--blue': product === 'TRAK',
					'ui-bg--green': product === 'REACH',
					'ui-bg--darkblue': product === 'LIGHTNING'
				})}
			>
				<div className="ui-fill">
					<div className="ui-fill-grow" />
					<div
						className="product-title ui-bg--red ui-vw--10"
						onClick={() => {
							setProduct('DYNO');
						}}
					>
						<h1>DYNO</h1>
					</div>
					<div
						className="product-title ui-bg--blue ui-vw--10"
						onClick={() => {
							setProduct('TRAK');
						}}
					>
						<h1>TRAK</h1>
					</div>
					<div
						className="product-title ui-bg--green ui-vw--10"
						onClick={() => {
							setProduct('REACH');
						}}
					>
						<h1>REACH</h1>
					</div>
					<div
						className="product-title ui-bg--darkblue ui-vw--10"
						onClick={() => {
							setProduct('LIGHTNING');
						}}
					>
						<h1>LIGHTNING</h1>
					</div>
					<div className="ui-fill-grow" />
				</div>
				<div className="product-container">
					<div>
						<div className="ui-fill-grow" />
						<img
							src={product.length ? data[product]['image'] : Dyno}
							alt=""
							className="product-image"
						/>
						<div className="ui-fill-grow" />
					</div>
					<div className="ui-fill ui-fill-vertical ui-v-align-center">
						<div>
							<h1>DESCRIPCION</h1>
							<div className="producto-side-text">
								<div>{data[product]['desc']}</div>
								<ul className="text-left">
									{product && data[product]['points'].map((point: string) => <li>{point}</li>)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const data: any = {
	DYNO: {
		image: Dyno,
		desc:
			'El DYNO proporciona posicionamiento al tiempo que permite el movimiento dinámico controlado del niño. Los accesorios DYNO son fáciles de ordenar, instalar y ajustar. El DYNO combina la movilidad de 3 ruedas con un sistema de asiento posturalmente correcto. Su versatilidad es evidente en el parque, el hogar, el aula o en cualquier lugar que la vida te lleve.',
		points: [
			'Disponible en 3 tamaños',
			'Peso ligero',
			"Asiento dinámico 'Activator'",
			'Inclinación fija de 10º, 20º y 30º',
			'Uso todo terreno',
			"Sistema de asiento contorneado 'Respond'",
			'Regulable y configurable'
		]
	},
	TRAK: {
		image: Trak,
		desc:
			'El TRAK es una silla de ruedas fácil de usar y de guardar, ya que cuenta con un perfil compacto pero regulable. Para nuestros clientes, es muy sencillo de ajustar, debido a que muchos componentes para cambiar su posición están disponibles en su forma original. Los accesorios que incluye son un ventilador montado, una bandeja en la base, un soporte para un balón de oxígeno y un porta-sueros.',
		points: [
			'Disponible en 2 tamaños',
			'Peso ligero',
			'Inclinación de 45º',
			'Ajuste de ángulo de cadera',
			'Sistema de asiento contorneado “Respond”',
			'Regulable y configurable'
		]
	},
	REACH: {
		image: Reach,
		desc:
			'El REACH presenta un elegante marco de aluminio fundido y está disponible en 3 tamaños. La inclinación del asiento REACH se puede ajustar fácilmente en una de las 3 posiciones de inclinación fija: 10, 20 o 30 grados. Está diseñado para plegarse de manera fácil y compacta y también ofrece ajuste de ángulo de cadera sobre la marcha.',
		points: [
			'Disponible en 3 tamaños',
			'Peso ligero',
			'Inclinación fija de 10º, 20º y 30º',
			'Ajuste de ángulo de cadera',
			'Silla configurable “LT”',
			'Regulable y configurable'
		]
	},
	LIGHTNING: {
		image: Lightning,
		desc:
			'El LIGHTNING es un modelo muy funcional. Cuenta con un plegado compacto, que hace de esta silla una excelente opción para el traslado, sin dejar de lado el posicionamiento de la persona usuaria en la misma. Este modelo acompaña al crecimiento ya que se puede regular la altura del respaldo apoya pies y profundidad del asiento.',
		points: [
			'Disponible en 3 tamaños',
			'Peso ligero',
			'Sistema de asiento contorneado',
			'Ofrece soporte cervical, dorsal y lumbar',
			'Soporte de tórax y pecho',
			'Regulable y configurable'
		]
	}
};
