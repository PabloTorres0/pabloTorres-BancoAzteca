'use client'
import LogIn from '../../components/LogIn'
import CustomForm from '@/components/CustomForm'
import React from 'react'


const Problema : React.FC = () => {

	const [showLogIn, setShowLogIn] = React.useState(true)
	const [showForm, setShowForm] = React.useState(false)


	const logInProcess = () : void => {
		setShowLogIn(false)
		setTimeout(()=>{
			setShowForm(true)
		},1000)
	}

	return (
		<section className='custom-container'>
			<div className='img-container'>
				<img 
				src="https://phantom-marca-mx.unidadeditorial.es/6fe7793246103376d368ae123d1262b2/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/11/15/17000256691203.jpg" 
				alt="" 
				className='azteca-img'
				/>
			</div>
			<div className='container custom-section'>
				<div className={!showLogIn && !showForm ? '':'logIn'}>

					{showLogIn?<LogIn logInProcess = {logInProcess} />:null}

					{!showLogIn &&  !showForm ? (
						<div className="spinner-border text-success" role="status">
						<span className="sr-only"></span>
					</div>
					):null}
					{showForm  ? <CustomForm/>:null}
				</div>
			</div>
		</section>
			
	)
}

export default Problema
