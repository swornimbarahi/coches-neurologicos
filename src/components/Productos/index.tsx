import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';

import Dyno from '../../assets/images/dyno.png';
import Trak from '../../assets/images/trak.png';
import Reach from '../../assets/images/reach.png';
import Lightning from '../../assets/images/lightning.png';

import './index.css';

export const Productos: FunctionComponent = () => {
	const [product, setProduct] = useState('DYNO');

	return (
		<div id={'productos'}>
			<div className="text-left">
				<h1 className="ui-main-title ui-text-bold">NUESTROS PRODUCTOS</h1>
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
						className="ui-bg--red ui-fixed-width"
						onClick={() => {
							setProduct('DYNO');
						}}
					>
						<h1 className="ui-sub-title ui-text-bold">DYNO</h1>
					</div>
					<div
						className="ui-bg--blue ui-fixed-width"
						onClick={() => {
							setProduct('TRAK');
						}}
					>
						<h1 className="ui-sub-title ui-text-bold">TRAK</h1>
					</div>
					<div
						className="ui-bg--green ui-fixed-width"
						onClick={() => {
							setProduct('REACH');
						}}
					>
						<h1 className="ui-sub-title ui-text-bold">REACH</h1>
					</div>
					<div
						className="ui-bg--darkblue ui-fixed-width"
						onClick={() => {
							setProduct('LIGHTNING');
						}}
					>
						<h1 className="ui-sub-title ui-text-bold">LIGHTNING</h1>
					</div>
					<div className="ui-fill-grow" />
				</div>
				<div className="product-container">
					<div>
						<img
							src={product.length ? data[product]['image'] : Dyno}
							alt=""
							className="product-image"
						/>
					</div>
					<div>
						<div>
							<div>
								<ul className="text-left ui-content-text">
									{product && data[product]['points'].map((point: string) => <li>{point}</li>)}
								</ul>
							</div>
							<div>{product && data[product]['table']}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const DynoTable: FunctionComponent = () => {
	return (
		<table className={classnames('ui-table--red', 'text-left', 'ui-content-text', 'ui-table')}>
			<tr>
				<td> LIMITE DE PESO </td>
				<td> 36 kg </td>
			</tr>
			<tr>
				<td> PESO (SILLA) </td>
				<td> 12 kg </td>
			</tr>
			<tr>
				<td> ANCHO (SILLA) </td>
				<td> 67 cm </td>
			</tr>
			<tr>
				<td> PROFUNDIDAD (ASIENTO) </td>
				<td> 15-35 cm </td>
			</tr>
			<tr>
				<td> ANCHO (ASIENTO) </td>
				<td> 35 cm </td>
			</tr>
			<tr>
				<td> ALTURA (RESPALDAR) </td>
				<td> 33-35 cm </td>
			</tr>
			<tr>
				<td> LONGITUD (POSAPIES) </td>
				<td> 20-35 cm </td>
			</tr>
			<tr>
				<td> ANCHO (ZONA TORAX) </td>
				<td> 18 -35 cm </td>
			</tr>
			<tr>
				<td> ASIENTO A PISO </td>
				<td> 48 cm </td>
			</tr>
			<tr>
				<td> AJUSTE DE ANGULO CADERA </td>
				<td> 85º, 90º, 105º </td>
			</tr>
			<tr>
				<td> INCLINACION DE ASIENTO </td>
				<td> 25- 30º </td>
			</tr>
			<tr>
				<td> RANGO RODILLA </td>
				<td> 10º </td>
			</tr>
			<tr>
				<td> ASIENTO-RESPALDAR RANGO </td>
				<td> 30º </td>
			</tr>
			<tr>
				<td> ALTURA (MANGO DE EMPUJE) </td>
				<td> 99-117 cm </td>
			</tr>
			<tr>
				<td> DIAMETRO (RUEDA FRONTAL) </td>
				<td> 25 cm </td>
			</tr>
			<tr>
				<td> DIAMETRO (RUEDA TRASERA) </td>
				<td> 41 cm </td>
			</tr>
			<tr>
				<td> PLEGADO (CON RUEDAS) </td>
				<td> 107 x 43 x 67 cm </td>
			</tr>
			<tr>
				<td> PLEGADO (SIN RUEDAS) </td>
				<td> 89 x 43 x 64 cm </td>
			</tr>
		</table>
	);
};

const TrakTable: FunctionComponent = () => {
	return (
		<table className={classnames('ui-table--blue', 'text-left', 'ui-content-text', 'ui-table')}>
			<tr>
				<td> LIMITE DE PESO </td>
				<td> 36 kg </td>
				<td> 36 kg </td>
			</tr>
			<tr>
				<td> PROFUNDIDAD (ASIENTO) </td>
				<td> 17-38 cm </td>
				<td> 17-38 cm </td>
			</tr>
			<tr>
				<td> ANCHO (ASIENTO) </td>
				<td> 15-30 cm </td>
				<td> 120-36 cm </td>
			</tr>
			<tr>
				<td> ALTURA (RESPALDAR) </td>
				<td> 30-48 cm </td>
				<td> 33-48 cm </td>
			</tr>
			<tr>
				<td> ASIENTO A PISO </td>
				<td> 10-43 cm </td>
				<td> 10-43 cm </td>
			</tr>
			<tr>
				<td> INCLINACION </td>
				<td> 45 </td>
				<td> 10-43 cm </td>
			</tr>
			<tr>
				<td> INCLINACION </td>
				<td> 45º </td>
				<td> 45º </td>
			</tr>
			<tr>
				<td> MAX INCLINACION </td>
				<td> 5º </td>
				<td> 5º </td>
			</tr>
			<tr>
				<td> ANGULO (CADERA) </td>
				<td> 90º, 105º, 120º </td>
				<td> 90º, 105º, 120º </td>
			</tr>
			<tr>
				<td> ANCHO TOTAL </td>
				<td> 57 cm </td>
				<td> 57 cm </td>
			</tr>
			<tr>
				<td> ALTURA (MANGO DE EMPUJE) </td>
				<td> 101-127 cm </td>
				<td> 101-127 </td>
			</tr>
			<tr>
				<td> LARGO TOTAL </td>
				<td> 89 cm </td>
				<td> 89 cm </td>
			</tr>
			<tr>
				<td> DIAMETRO (RUEDA FRONTAL) </td>
				<td> 18 cm </td>
				<td> 18 cm </td>
			</tr>
			<tr>
				<td> DIAMETRO (RUEDA TRASERA) </td>
				<td> 41 cm </td>
				<td> 41 cm </td>
			</tr>
			<tr>
				<td> PESO (SILLA) </td>
				<td> 13 kg </td>
				<td> 13 kg </td>
			</tr>
			<tr>
				<td> PLEGADO (CON RUEDAS) </td>
				<td> 89 x 43 x 57 cm </td>
				<td> 89 x 43 x 62 cm</td>
			</tr>
			<tr>
				<td> PLEGADO (SIN RUEDAS) </td>
				<td> 91 x 51 x 57 cm </td>
				<td> 91 x 51 x 62 cm </td>
			</tr>
		</table>
	);
};

const ReachTable: FunctionComponent = () => {
	return (
		<table className={classnames('ui-table--green', 'text-left', 'ui-content-text', 'ui-table')}>
			<tr>
				<td> LIMITE DE PESO </td>
				<td> 36 kg </td>
				<td> 50 kg </td>
				<td> 68 kg </td>
			</tr>
			<tr>
				<td> ANCHO (SILLA) </td>
				<td> 20-30 cm </td>
				<td> 25-35 cm </td>
				<td> 30-40 cm </td>
			</tr>
			<tr>
				<td> PROFUNDIDAD (SILLA) </td>
				<td> 20-33 cm </td>
				<td> 28-40 cm </td>
				<td> 33-46 cm </td>
			</tr>
			<tr>
				<td> ALTURA (RESPALDAR) </td>
				<td> 28-46 cm </td>
				<td> 23-53 cm </td>
				<td> 40-61 cm </td>
			</tr>
			<tr>
				<td> ASIENTO A PISO </td>
				<td> 20-33 cm </td>
				<td> 28-40 cm </td>
				<td> 33-46 cm </td>
			</tr>
			<tr>
				<td> INCLINACION DE ASIENTO </td>
				<td> 10º, 20, 30º </td>
				<td> 10º, 20, 30º </td>
				<td> 10º, 20, 30º </td>
			</tr>
			<tr>
				<td> ANGULO ASIENTO-RESPALDAR (INCLINACION DE 10º) </td>
				<td> 85º, 90º, 95º, 100º, 110º, 115º </td>
				<td> 85º, 90º, 95º, 100º, 110º, 115º </td>
				<td> 85º, 90º, 95º, 100º, 110º, 115º </td>
			</tr>
			<tr>
				<td> ANGULO ASIENTO-RESPALDAR (INCLINACION DE 20º) </td>
				<td> 85º, 90º, 95º, 100º, 105º </td>
				<td> 85º, 90º, 95º, 100º, 105º </td>
				<td> 85º, 90º, 95º, 100º, 105º </td>
			</tr>
			<tr>
				<td> ANGULO ASIENTO-RESPALDAR (INCLINACION DE 30º) </td>
				<td> 85º, 90º, 95º </td>
				<td> 85º, 90º, 95º </td>
				<td> 85º, 90º, 95º </td>
			</tr>
			<tr>
				<td> PESO SILLA </td>
				<td> 12 kg </td>
				<td> 13 kg </td>
				<td> 14 kg </td>
			</tr>
			<tr>
				<td> MAX INCLINACION </td>
				<td> 5º </td>
				<td> 5º </td>
				<td> 5º </td>
			</tr>
			<tr>
				<td> DIAMETRO (RUEDA FRONTAL) </td>
				<td> 18 cm </td>
				<td> 18 cm </td>
				<td> 18 cm </td>
			</tr>
			<tr>
				<td> DIAMETRO (RUEDA TRASERA) </td>
				<td> 30 cm </td>
				<td> 30 cm </td>
				<td> 30 cm </td>
			</tr>
			<tr>
				<td> ANCHO (SILLA) </td>
				<td> 55 cm </td>
				<td> 60 cm </td>
				<td> 65 cm </td>
			</tr>
			<tr>
				<td> DIMENSIONES (COCHE PLEGADO) </td>
				<td> 79 x 55 x 46 cm </td>
				<td> 79 x 60 x 46 cm </td>
				<td> 84 x 65 x 46 cm </td>
			</tr>
		</table>
	);
};

const LightningTable: FunctionComponent = () => {
	return (
		<table className={classnames('ui-table--darkblue', 'text-left', 'ui-content-text', 'ui-table')}>
			<tr>
				<td> LIMITE PESO </td>
				<td> 34 kg </td>
				<td> 45 kg </td>
				<td> 68 kg </td>
			</tr>
			<tr>
				<td> PESO (SILLA) </td>
				<td> 11.3 kg </td>
				<td> 12.2 kg </td>
				<td> 12.7 kg </td>
			</tr>
			<tr>
				<td> PROFUNDIDAD (SILLA) </td>
				<td> 25-30 cm </td>
				<td> 30-35 cm </td>
				<td> 40-45 cm </td>
			</tr>
			<tr>
				<td> ALTURA (MANGO DE EMPUJE) </td>
				<td> 91 cm </td>
				<td> 91 cm </td>
				<td> 96.5 cm </td>
			</tr>
			<tr>
				<td> ALTURA TOTAL </td>
				<td> 96.5 cm </td>
				<td> 107 cm </td>
				<td> 112 cm </td>
			</tr>
			<tr>
				<td> ANCHO TOTAL </td>
				<td> 50 cm </td>
				<td> 61 cm </td>
				<td> 63.5 cm </td>
			</tr>
			<tr>
				<td> ALTURA (RESPALDAR) </td>
				<td> 28 cm </td>
				<td> 35.5 cm </td>
				<td> 38 cm </td>
			</tr>
			<tr>
				<td> ASIENTO A PISO </td>
				<td> 51 cm </td>
				<td> 53 cm </td>
				<td> 56 cm </td>
			</tr>
			<tr>
				<td> ANGULO DE RESPALDAR </td>
				<td> 85º, 90º, 95º </td>
				<td> 85º, 90º, 95º </td>
				<td> 85º, 90º, 95º </td>
			</tr>
			<tr>
				<td> DIAMETRO (RUEDA FRONTAL) </td>
				<td> 15 cm </td>
				<td> 15 cm </td>
				<td> 15 cm </td>
			</tr>
			<tr>
				<td> DIAMETRO (RUEDA TRASERA) </td>
				<td> 25 cm </td>
				<td> 25 cm </td>
				<td> 25 cm </td>
			</tr>
			<tr>
				<td> DISTANCIA ENTRE REPOSABRAZOS </td>
				<td> 34.3 cm </td>
				<td> 41.3 cm </td>
				<td> 44.5 cm </td>
			</tr>
			<tr>
				<td> DIMENSIONES (COCHE PLEGADO) </td>
				<td> 49 x 49 x 64 cm </td>
				<td> 61 x 49 x 70 cm </td>
				<td> 64 x 41 x 71 cm </td>
			</tr>
		</table>
	);
};

const data: any = {
	DYNO: {
		image: Dyno,
		points: [
			'Disponible en 3 tamaños',
			'Peso ligero',
			"Asiento dinámico 'Activator'",
			'Inclinación fija de 10º, 20º y 30º',
			'Uso todo terreno',
			"Sistema de asiento contorneado 'Respond'",
			'Regulable y configurable'
		],
		table: <DynoTable />
	},
	TRAK: {
		image: Trak,
		points: [
			'Disponible en 2 tamaños',
			'Peso ligero',
			'Inclinación de 45º',
			'Ajuste de ángulo de cadera',
			'Sistema de asiento contorneado “Respond”',
			'Regulable y configurable'
		],
		table: <TrakTable />
	},
	REACH: {
		image: Reach,
		points: [
			'Disponible en 3 tamaños',
			'Peso ligero',
			'Inclinación fija de 10º, 20º y 30º',
			'Ajuste de ángulo de cadera',
			'Silla configurable “LT”',
			'Regulable y configurable'
		],
		table: <ReachTable />
	},
	LIGHTNING: {
		image: Lightning,
		points: [
			'Disponible en 3 tamaños',
			'Peso ligero',
			'Sistema de asiento contorneado',
			'Ofrece soporte cervical, dorsal y lumbar',
			'Soporte de tórax y pecho',
			'Regulable y configurable'
		],
		table: <LightningTable />
	}
};
