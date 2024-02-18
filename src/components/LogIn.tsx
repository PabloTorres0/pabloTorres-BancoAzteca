'use client'
import React, { useEffect } from 'react'

interface Props {
	logInProcess : () =>  void
}

const userData = {
	dafaultUser: 'azteca',
	password: '12345'
}

const LogIn: React.FC <Props> = props => {
	const [user, setUser] = React.useState('azteca')
	const [pass, setPass] = React.useState('')
	const [log, setLog] = React.useState(false)
	const [buttonDisabled, setButtonDisabled] = React.useState(false)
	const [countDown, setCountDown] = React.useState(3)
	const [warningValidation, setWarningValidation] = React.useState(false)
	const [completeInputsValidation, setCompleteInputsValidatios] = React.useState(false)
	const logIn = ():void => {
		if (user !== userData.dafaultUser || pass !== userData.password) {

			if(user===''||pass===''){
				setCompleteInputsValidatios(true)
				setWarningValidation(false)
				return
			}
			setCompleteInputsValidatios(false)
			setWarningValidation(true)
			setCountDown(countDown-1)
		} 
		else{
			setLog(true)
			setCompleteInputsValidatios(false)
			props.logInProcess()
		}
	}

	const onChangeUser = (e: any):void  => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		setUser(e.target.value)
	}

	const onChangePass = (e: any):void  => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		setPass(e.target.value)
	}

	useEffect(()=>{
		if (countDown===0){	
			setButtonDisabled(true)
			console.log('Contraseña Incorrecta')
		}
	},[countDown])

	return (
		<form
			onSubmit={e => {
				logIn()
				e.preventDefault()
			}}
		>
			<fieldset>
				<legend className='text-bbva-primary'>USUARIO</legend>
				<div className='form-group input-group-lg mb-3'>
					<input
						type='text'
						id='disabledTextInput'
						className='form-control'
						placeholder='Ingresa Usuario Válido'
						value={user}
						onChange={e => {
							onChangeUser(e)
						}}
					/>

					<div className="form-group input-group-lg">
						<legend className='text-bbva-primary'>CONTRASEÑA</legend>
						<input 
							type="password" 
							className="form-control" 
							id="exampleInputPassword1" 
							placeholder="Ingresa Contraseña Válida"
							onChange={e => {
							onChangePass(e)
						}}
						/>
							
					</div>
					
					{warningValidation ? (
						<div>
							<label className='text-danger'>*** Error!! Quedan {countDown} Intentos ***</label>
						</div>
				) : null}

					{completeInputsValidation ? (
						<div>
							<label className='text-danger'>*** Debes Llenar Todos Los Campos ***</label>
						</div>
				) : null}

					<button 
					type='submit' 
					className='btn btn-outline-danger btn-block col-12 mt-4'
					disabled={buttonDisabled}
					>
						Ingresar
					</button>
				</div>
				
			</fieldset>
		</form>
	)
}

export default LogIn
