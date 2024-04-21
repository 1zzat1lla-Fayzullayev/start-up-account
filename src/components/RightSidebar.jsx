import React from 'react'
import ListSiderbar from './ListSiderbar'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function RightSidebar({
	openSidebarLink,
	setOpenSidebarLink,
	handleOpenSidebar,
}) {
	const isMobileScreen = () => {
		return window.innerWidth <= 768
	}

	const sidebarVariants = isMobileScreen()
		? {
				open: { width: '60%', opacity: 1 },
				closed: { width: 0, opacity: 0 },
		  }
		: {}

	return (
		<motion.div
			className={`bg-[#171717] h-screen z-[300] fixed  w-full md:w-[283px]`}
			style={{ boxShadow: '0px 4px 16px 0px #121212' }}
			animate={openSidebarLink ? 'open' : 'closed'}
			variants={sidebarVariants}
		>
			<div className='flex items-center justify-center font-Itim uppercase text-[45px] py-[20px] relative'>
				<Link to={'/'}>
					<div className='md:flex gap-2 md:gap-6 items-center md:text-[45px] text-[25px] hidden cursor-pointer'>
						<h1>bee</h1>
						<div className='bg-[#44444480] w-[40px] h-[80px] md:w-[77px] md:h-[117px] rounded-[50%] transform rotate-[55deg] flex justify-center items-center'>
							<h1 className='transform -rotate-[55deg]'>on!</h1>
						</div>
					</div>
				</Link>
			</div>

			<ul
				className={`font-Montserrat md:mr-[50px] justify-center items-center flex-col gap-2 flex md:flex mt-[80px] md:mt-0 ${
					openSidebarLink ? '' : 'hidden'
				}`}
			>
				<ListSiderbar
					openSidebarLink={openSidebarLink}
					setOpenSidebarLink={setOpenSidebarLink}
					handleOpenSidebar={handleOpenSidebar}
				/>
			</ul>
		</motion.div>
	)
}

export default RightSidebar
