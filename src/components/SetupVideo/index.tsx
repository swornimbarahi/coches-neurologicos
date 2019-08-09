import React, { FunctionComponent } from 'react';
import './index.css';

export const SetupVideo: FunctionComponent = () => {
	return (
		<div>
			<div className="text-left">
				<h1 className="ui-main-title ui-text-bold">¡COMPRUEBE SU FÁCIL Y CONVENCIONAL USO!</h1>
			</div>
			<iframe
				src="https://www.youtube.com/embed/yguft5NZnkU"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				className="video-frame"
				allowFullScreen
			/>
		</div>
	);
};
