import React, { useState } from 'react'
import RegisterForm from './RegisterForm'
import SignInForm from './SignInForm'

function Register() {
	const [isRegistering, setIsRegistering] = useState(true)

	const toggleForm = () => {
		setIsRegistering(prevState => !prevState)
	}

	return (
		<div className='flex justify-center items-center h-[100vh]'>
			{isRegistering ? (
				<RegisterForm toggleForm={toggleForm} />
			) : (
				<SignInForm toggleForm={toggleForm} />
			)}
		</div>
	)
}

export default Register
