import React from 'react';

export const ProfileDisplay = ({signOut, nombre, imagen, email}) => (
		<div>
			<h1>Bienvenido {nombre}</h1>
			<h2>{email}</h2>
			<img src={imagen} alt="ejemplo"/>
			{imagen}
			<button onClick={signOut}>cerrar sesión</button>
		</div>
	);