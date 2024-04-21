import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

function RegisterForm({ toggleForm }) {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		fullName: '',
	})

	const [errorInput, setErrorInput] = useState(false)

	const { email, password, fullName } = formData
	const navigate = useNavigate()

	const handleRegister = async () => {
		try {
			// Check if any of the input fields are empty
			if (!fullName || !email || !password) {
				setErrorInput(true)
				toast.error('Пожалуйста, заполните все поля.')
				return
			}

			// If all fields are filled, proceed with user registration
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
			setErrorInput(false) // Reset errorInput state to false
			navigate('/')
		} catch (error) {
			toast.error('Произошла ошибка при регистрации.')
			console.error('Error registering user:', error.message)
		}
	}

	const handleChange = e => {
		setErrorInput(false)
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<>
			<motion.div
				className='font-Montserrat bg-[#171717] p-[15px] rounded-[10px]'
				initial={{ opacity: 0, scale: 0.7 }}
				animate={{ opacity: 1, scale: 1 }}
			>
				<motion.h1
					className='text-center text-[25px] my-[10px] font-semibold'
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
				>
					Регистрация
				</motion.h1>
				<div className='flex flex-col gap-2 mt-[30px]'>
					<label htmlFor='fullName'>Ваше имя</label>
					<input
						type='text'
						name='fullName'
						value={fullName}
						onChange={handleChange}
						className={`input bg-[#252525] h-[40px] text-[15px] w-[250px] md:w-[300px] ${
							errorInput ? 'border border-red-500' : 'border'
						}`}
						placeholder='beeon'
					/>
					<label htmlFor='email'>Электронная почта</label>
					<input
						type='email'
						name='email'
						value={email}
						onChange={handleChange}
						className={`input bg-[#252525] h-[40px] text-[15px] w-[250px] md:w-[300px] ${
							errorInput ? 'border border-red-500' : 'border'
						}`}
						placeholder='beeon@gmail.com'
					/>
					<label htmlFor='password'>Пароль</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={handleChange}
						className={`input bg-[#252525] h-[40px] text-[15px] w-[250px] md:w-[300px] ${
							errorInput ? 'border border-red-500' : 'border'
						}`}
						placeholder='beeon123'
					/>
					<a
						onClick={toggleForm}
						className='underline text-blue-500 text-[15px]'
					>
						Войти
					</a>
					<button
						onClick={handleRegister}
						className='btn bg-[#252525] hover:bg-[#252526] text-white'
					>
						Отправить
					</button>
				</div>
			</motion.div>
		</>
	)
}

export default RegisterForm
