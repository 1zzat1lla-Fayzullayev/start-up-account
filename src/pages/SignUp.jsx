import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { loggedInContext } from '../App'

function SignUp() {
	const navigate = useNavigate()
	const { setLoggedIn } = useContext(loggedInContext)

	const [formData, setFormData] = useState({
		email: '',
		username: '',
		password: '',
	})
	const { username, password, email } = formData
	console.log(username)
	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleRegister = async e => {
		e.preventDefault()

		try {
			if (!username || !password || !email) {
				toast.error("Iltimos, barcha maydonlarni to'ldiring.")
				return
			}
			if (password.length < 4) {
				toast.error("Parol kamida 4 ta belgidan iborat bo'lishi kerak.")
				return
			}

			const isValidUser = true

			if (isValidUser) {
				toast.success('Tizimga muvaffaqiyatli kirdingiz!')
				navigate('/')
				setLoggedIn({ username })
			} else {
				toast.error("Noto'g'ri foydalanuvchi nomi yoki parol.")
			}
		} catch (error) {
			console.error('Sign-in error:', error.message)
			toast.error(
				"Tizimga kirishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring."
			)
		}
	}
	return (
		<div className='bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
			<div className='max-w-[350px] flex items-center justify-center mx-auto min-h-[100vh] '>
				<motion.div
					className='blur-bg font-Montserrat bg-[#17171755] p-[15px] rounded-[10px] w-full flex justify-center flex-col items-center'
					initial={{ opacity: 0, scale: 0.7 }}
					animate={{ opacity: 1, scale: 1 }}
				>
					{/* Sign-in form */}
					<motion.h1
						className='text-center text-[25px] my-[10px] font-semibold'
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
					>
						Ro'yxatdan o'tish
					</motion.h1>
					<div className='flex flex-col gap-2'>
						{/* Email and password input fields */}
						<div className='flex flex-col gap-2 mt-[30px]'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								name='email'
								value={email}
								onChange={handleChange}
								className={`input bg-[#252525] h-[40px] text-[15px] w-[250px] md:w-[300px] `}
								placeholder='beeon@gmail.com'
							/>
							<label htmlFor='email'>Username</label>
							<input
								type='text'
								name='username'
								value={username}
								onChange={handleChange}
								className={`input bg-[#252525] h-[40px] text-[15px] w-[250px] md:w-[300px] `}
								placeholder='beeon'
							/>
							<label htmlFor='password'>Parol</label>
							<input
								type='password'
								name='password'
								value={password}
								onChange={handleChange}
								className={`input bg-[#252525] h-[40px] text-[15px] w-[250px] md:w-[300px] `}
								placeholder='beeon123'
							/>
						</div>
						{/* Sign-in buttons */}
						<a className='underline text-blue-500 text-[15px] cursor-pointer'>
							<Link to='/signin'>Tizimga kirish</Link>
						</a>

						<button
							onClick={handleRegister}
							className='btn bg-[#252525] hover:bg-[#252526] text-white'
						>
							Ro'yxatdan o'tish
						</button>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default SignUp
