import React, { FunctionComponent } from 'react';
import './index.css';

export const GoogleMap: FunctionComponent = () => {
	return (
		<div>
			<div className="text-left about-title video-title">
				<h1>UBÍQUENOS ACÁ</h1>
			</div>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.07478858811!2d-76.9248120853649!3d-12.038372191472918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6abb56f7219%3A0xd12f5bef295bb30b!2sUrb.+los+portales+de+javier+prado+etapa+5!5e0!3m2!1ses!2spe!4v1554058933842!5m2!1ses!2spe"
				frameBorder="0"
				className="google-map-frame"
				allowFullScreen
			/>
		</div>
	);
};
