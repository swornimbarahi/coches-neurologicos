import React, { FunctionComponent, useState, useEffect } from 'react';
import Contactoimage from '../../assets/images/contacto_image.svg';
import './index.css';

export const Contacto: FunctionComponent = () => {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [enviarEnable, setEnviarEnable] = useState(false);
	const [telefono, setTelefono] = useState('');
	const [comentario, setComentario] = useState('');

	useEffect(() => {
		if (
			nombre.length >= 1 &&
			email.match(/[^@]+@[^\.]+\..+/g) &&
			telefono.length === 9 &&
			comentario !== ''
		)
			setEnviarEnable(true);
		else setEnviarEnable(false);
	}, [nombre, email, telefono, comentario]);

	return (
		<div className="contacto-container">
			<h1>SOLICITE COTIZACIÓN</h1>
			<div />
			<div className="contacto-form">
				<form action="">
					<div>
						<input
							type="text"
							name="nombre"
							id="nombre"
							value={nombre}
							className="input-field"
							placeholder="Nombre"
							onChange={e => {
								setNombre(e.currentTarget.value);
							}}
						/>
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							className="input-field"
							placeholder="Email"
							onChange={e => {
								setEmail(e.currentTarget.value);
							}}
						/>
						<input
							type="number"
							name="telefono"
							id="telefono"
							value={telefono}
							className="input-field"
							placeholder="Telefono"
							onChange={e => {
								setTelefono(e.currentTarget.value);
							}}
						/>
						<textarea
							rows={10}
							value={comentario}
							onChange={e => {
								setComentario(e.currentTarget.value);
							}}
							className="comment-field"
							placeholder="Comentario"
							id="message-input"
						/>
						<button disabled={!enviarEnable} className="enviar-button">
							Enviar
						</button>
					</div>
				</form>
			</div>
			<div className="contacto-image-container">
				<img src={Contactoimage} alt="" className="contacto-image" />
			</div>
		</div>
	);
};
