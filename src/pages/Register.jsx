import React, { useState } from 'react'
import { motion } from 'framer-motion'
import img from '../ImagesWithImport'
import { registerUser } from '../firebase/config'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

function Register() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleRegister = async () => {
		try {
			await registerUser(email, password)
			console.log('User registered successfully!')
		} catch (error) {
			console.error('Error registering user:', error.message)
		}
	}

	const handleGoogleSignIn = async () => {
		try {
			const provider = new GoogleAuthProvider()
			const result = await signInWithPopup(auth, provider)
			const user = result.user
			console.log('User signed in with Google:', user)
		} catch (error) {
			console.error('Error signing in with Google:', error.message)
		}
	}
	return (
		<>
			<div className='flex justify-center items-center h-[100vh]'>
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
						<label
							htmlFor='email'
							initial={{ x: -50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
						>
							Электронная почта
						</label>
						<input
							type='email'
							name='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							className='input bg-[#252525] h-[40px] text-[15px] w-[250px] md:w-[300px]'
							placeholder='beeon@gmail.com'
						/>
						<label
							htmlFor='password'
							initial={{ x: -50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
						>
							Пароль
						</label>
						<input
							type='password'
							name='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							className='input bg-[#252525] h-[40px] text-[15px] w-[250px] md:w-[300px]'
							placeholder='beeon123'
						/>
						<button
							className='flex items-center justify-center gap-2 bg-[#252525] rounded-[5px] p-1 cursor-pointer mt-[20px]'
							onClick={handleGoogleSignIn}
							initial={{ x: -50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
						>
							<p className='text-[20px]'>Google</p>
							<img src={img.google} alt='Google' className='w-[25px]' />
						</button>
						<button
							onClick={handleRegister}
							className='btn bg-[#252525] hover:bg-[#252526]'
						>
							Отправить
						</button>
					</div>
				</motion.div>
			</div>
		</>
	)
}

export default Register
