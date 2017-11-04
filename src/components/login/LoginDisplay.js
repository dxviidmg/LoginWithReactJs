import React from 'react';

export const LoginDisplay = ({mostrar, toggleMostrar, saveInput, onSubmit, error}) => (
<div className='Login'>
			<h1>Login</h1>
			<form onSubmit={onSubmit} className='formulario'>
				<label>
					<h2>{error}</h2>
					<input 
						name="email"
						type="text"
						onChange={saveInput}
						placeholder='Tu correo electrónico'

					/>
				</label>
				<label>
					<input name="password" type={mostrar?'text':'password'}
						onChange={saveInput}
						placeholder='Tu contraseña'
					/>
				</label>

				<label>
					<input 
						onClick={toggleMostrar} type='checkbox'
						value='Mostrar password'
					/> Mostrar contraseña
				</label>
				<input
					type='submit'
					value='Iniciar Sesión'
				/>
			</form>
			<p><small>Todos los derechos reservados para mi..</small>
			</p>
		</div>
	);