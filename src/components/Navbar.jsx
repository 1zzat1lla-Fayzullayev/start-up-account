import React, { useEffect, useState } from 'react'
import HamburgerSwap from '../shared/ui/HamburgerSwap'
import NumberModal from '../shared/ui/NumberModal'
import { motion } from 'framer-motion'
import { auth, logoutUser } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { onAuthStateChanged } from 'firebase/auth'
import userImg from '../assets/user.png'

function Navbar({ handleOpenSidebar }) {
	const handleOpenModal = () => {
		document.getElementById('my_modal_3').showModal()
	}

	const [user] = useAuthState(auth)
	const [userPhoto, setUserPhoto] = useState(null)
	const [displayName, setDisplayName] = useState(null)

	const handleLogOut = async () => {
		try {
			await logoutUser()
		} catch (e) {
			console.error('Error logging out: ', e.message)
		}
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			try {
				if (user) {
					const { displayName, photoURL } = user
					setDisplayName(displayName || user.email)
					setUserPhoto(photoURL || userImg)
					localStorage.setItem('displayName', displayName)
				} else {
					setDisplayName(null)
					setUserPhoto(userImg)
					localStorage.removeItem('displayName')
				}
			} catch (e) {
				console.error('Error fetching user profile: ', e.message)
			}
		})

		return () => unsubscribe()
	}, [])

	return (
		<>
			<motion.div className='navbar__top bg-[#171717] w-full h-[80px] flex justify-between items-center fixed right-0 z-[300]'>
				<motion.div className='flex md:hidden ml-[20px] fixed z-[1000]'>
					<HamburgerSwap handleOpenSidebar={handleOpenSidebar} />
				</motion.div>

				<div className='flex w-full justify-end gap-4 md:gap-0 md:justify-between items-center'>
					<div className='md:ml-[30px]'>
						<button
							className='bg-[#252525] rounded-[10px] h-[35px] w-[180px] md:w-[220px] transition-all duration-80 hover:scale-90 font-Montserrat'
							onClick={handleOpenModal}
						>
							Nomer olish
						</button>
						<NumberModal />
					</div>
					<div className='mr-[20px]'>
						<div className='dropdown dropdown-end'>
							<div tabIndex={0} role='button'>
								{user ? (
									<img
										src={userPhoto}
										alt='user'
										className='rounded-full w-[50px]'
									/>
								) : (
									<img
										src={userImg}
										alt='user'
										className='rounded-full w-[50px]'
									/>
								)}
							</div>
							<ul
								tabIndex={0}
								className='dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-[#252525] mt-[10px] font-Montserrat'
							>
								{user ? (
									<>
										{displayName && (
											<li>
												<p>{displayName}</p>
											</li>
										)}
										<li className='hover:bg-red-500 rounded-[10px]'>
											<button onClick={handleLogOut}>Выход</button>
										</li>
									</>
								) : (
									<li>
										<a href='/register'>Roʻyxatdan oʻtish</a>
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default Navbar
