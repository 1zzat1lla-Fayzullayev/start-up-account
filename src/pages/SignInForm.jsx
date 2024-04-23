import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { signInUser, googleSignIn } from '../firebase/config'
import img from '../ImagesWithImport'

function SignInForm({ toggleForm }) {
	const [errorInput, setErrorInput] = useState(false)
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
	const { email, password } = formData

	const handleGoogleSignIn = async () => {
		try {
			await googleSignIn()
			navigate('/')
		} catch (error) {
			console.error('Error signing in with Google:', error.message)
		}
	}

	const handleSignIn = async () => {
		try {
			if (!email || !password) {
				setErrorInput(true)
				toast.error('Iltimos, barcha maydonlarni toʻldiring.')
				return
			}
			await signInUser(email, password)
			navigate('/')
			// Clear form data after successful sign-in
			setFormData({ email: '', password: '' })
		} catch (error) {
			toast.error(
				"Yaroqsiz elektron pochta manzili yoki parol. Iltimos, yana bir bor urinib ko'ring."
			)
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
				className='blur-bg font-Montserrat bg-[#17171755] p-[15px] rounded-[10px]'
				initial={{ opacity: 0, scale: 0.7 }}
				animate={{ opacity: 1, scale: 1 }}
			>
				{/* Sign-in form */}
				<motion.h1
					className='text-center text-[25px] my-[10px] font-semibold'
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
				>
					Kirish
				</motion.h1>
				<div className='flex flex-col gap-2'>
					{/* Email and password input fields */}
					<div className='flex flex-col gap-2 mt-[30px]'>
						<label htmlFor='email'>Elektron pochta</label>
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
						<label htmlFor='password'>Parol</label>
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
					</div>
					{/* Sign-in buttons */}
					<a
						onClick={toggleForm}
						className='underline text-blue-500 text-[15px] cursor-pointer'
					>
						Roʻyxatdan oʻtish
					</a>
					<button
						className='flex justify-center items-center gap-2 bg-[#252525] rounded-[5px] p-[6px] transition-all ease-in-out hover:scale-95'
						onClick={handleGoogleSignIn}
					>
						<img src={img.google} alt='google' className='w-[25px]' />
						<p className='text-[17px]'>Google</p>
					</button>
					<button
						onClick={handleSignIn}
						className='btn bg-[#252525] hover:bg-[#252526] text-white'
					>
						Kirish
					</button>
				</div>
			</motion.div>
		</>
	)
}

export default SignInForm
