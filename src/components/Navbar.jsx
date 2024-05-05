import React, { useContext, useEffect } from 'react'
import HamburgerSwap from '../shared/ui/HamburgerSwap'
import NumberModal from '../shared/ui/NumberModal'
import { motion } from 'framer-motion'
import userImg from '../assets/user.png'
import { loggedInContext } from '../App'
import { Link } from 'react-router-dom'

function Navbar({ handleOpenSidebar }) {
	const { loggedIn, setLoggedIn } = useContext(loggedInContext)
	console.log(loggedIn)

	useEffect(() => {
		localStorage.setItem('loggedIn', JSON.stringify(loggedIn))
	}, [loggedIn])

	console.log(loggedIn)

	const handleLogOut = () => {
		setLoggedIn(false)
	}

	const handleOpenModal = () => {
		document.getElementById('my_modal_3').showModal()
	}

	return (
		<>
			<motion.div className='navbar__top bg-[#171717] w-full h-[80px] flex justify-between items-center fixed right-0 z-[300]'>
				<motion.div className='flex md:hidden ml-[20px] fixed z-[1000]'>
					<HamburgerSwap handleOpenSidebar={handleOpenSidebar} />
				</motion.div>

				<div className='flex w-full justify-end gap-4 md:gap-0 md:justify-between items-center'>
					<div className='md:ml-[30px]'>
						<button
							className='bg-[#252525] rounded-[10px] h-[35px] w-[140px] md:w-[220px] transition-all duration-80 hover:scale-90 font-Montserrat'
							onClick={handleOpenModal}
						>
							Nomer olish
						</button>
						<NumberModal />
					</div>
					<div className='mr-[20px] flex items-center gap-4'>
						<div className='dropdown dropdown-end'>
							<div tabIndex={0} role='button'>
								{/* Render user image here */}
								<img
									src={userImg}
									alt='user'
									className='rounded-full w-[50px]'
								/>
							</div>
							<ul
								tabIndex={0}
								className='dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-[#252525] mt-[10px] font-Montserrat'
							>
								{loggedIn ? (
									<>
										<li className='text-white'>
											<p>{loggedIn.username}</p>
										</li>
										<li className='hover:bg-red-500 rounded-[10px]'>
											<button onClick={handleLogOut}>Chiqish</button>
										</li>
									</>
								) : (
									<li>
										<Link to='/signin'>Tizimga kirish</Link>
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
