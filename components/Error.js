import React from 'react';

const Error = ({ error }) => {
	return (
		<div
			style={{
				textAlign: 'center',
				fontSize: '1.3rem',
				fontStyle: 'normal',
				color: 'red'
			}}
		>
			<p>
				El codigo ingresado no es válido: <br /> {error.message}
			</p>
			<p>Tipo de Error: ${error.error}</p>
		</div>
	);
};

export default Error;
