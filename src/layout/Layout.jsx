import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import RightSidebar from '../components/RightSidebar'
import Navbar from '../components/Navbar'

function Layout() {
	const [openSidebarLink, setOpenSidebarLink] = useState(false)

	const handleOpenSidebar = () => {
		setOpenSidebarLink(!openSidebarLink)
	}

	const [isOpen, setIsOpen] = useState(false)

	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 1, x: '1%' },
	}
	return (
		<>
			<div>
				<RightSidebar
					openSidebarLink={openSidebarLink}
					handleOpenSidebar={handleOpenSidebar}
					setOpenSidebarLink={setOpenSidebarLink}
				/>
				<div
					className='flex flex-col w-full '
					style={{ height: 'max-content' }}
				>
					<Navbar handleOpenSidebar={handleOpenSidebar} />
				</div>
				<div className='outlet absolute right-0 top-[80px]'>
					<div className='bg-[#171717] h-[84vh] md:h-[78vh] mx-[30px] my-[30px] rounded-[10px]'>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	)
}

export default Layout
