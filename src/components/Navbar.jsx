import React, { useState } from 'react'
import user from '../assets/user.png'
import HamburgerSwap from '../shared/ui/HamburgerSwap'
import NumberModal from '../shared/ui/NumberModal'

function Navbar({ handleOpenSidebar }) {
	const handleOpenModal = () => {
		document.getElementById('my_modal_3').showModal()
	}

	return (
		<>
			<div
				className='bg-[#171717] w-full h-[80px] flex justify-between items-center'
				style={{ boxShadow: '0px 4px 16px 0px #121212' }}
			>
				<div className='flex md:hidden ml-[20px] z-[100]'>
					<HamburgerSwap handleOpenSidebar={handleOpenSidebar} />
				</div>

				<div className='flex w-full justify-end gap-4 md:gap-0 md:justify-between items-center'>
					<div className='md:ml-[20px]'>
						<button
							className='bg-[#252525] rounded-[10px] h-[35px] w-[180px] md:w-[220px] transition-all duration-80 hover:scale-90 font-Montserrat'
							onClick={handleOpenModal}
						>
							Получить номер
						</button>
						<NumberModal />
					</div>
					<div className='mr-[20px]'>
						<div className='dropdown dropdown-end'>
							<div tabIndex={0} role='button'>
								<img src={user} alt='user' />
							</div>
							<ul
								tabIndex={0}
								className='dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-[#252525] mt-[10px]'
							>
								<li>
									<a>Регистрация</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
