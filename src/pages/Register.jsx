import React, { useState } from 'react'
import RegisterForm from './RegisterForm'
import SignInForm from './SignInForm'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Register() {
	const [isRegistering, setIsRegistering] = useState(true)
	const navigate = useNavigate()

	const handleBackPage = () => {
		navigate(-1)
	}

	const toggleForm = () => {
		setIsRegistering(prevState => !prevState)
	}

	return (
		<>
			<div className='flex justify-center items-center h-[100vh] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
				<motion.p
					whileHover={{
						x: 10,
					}}
					whileTap={{ scale: 1.1 }}
					className='absolute top-8 left-8 font-Montserrat cursor-pointer'
					onClick={handleBackPage}
				>
					Orqaga
				</motion.p>
				{isRegistering ? (
					<RegisterForm toggleForm={toggleForm} />
				) : (
					<SignInForm toggleForm={toggleForm} />
				)}
			</div>
		</>
	)
}

export default Register
