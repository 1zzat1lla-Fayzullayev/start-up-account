import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Phone from './pages/Phone'
import Card from './pages/Card'
import HistoryPhone from './pages/HistoryPhone'
import HistoryPayment from './pages/HistoryPayment'
import RightSidebar from './components/RightSidebar'
import Navbar from './components/Navbar'

function App() {
	const [openSidebarLink, setOpenSidebarLink] = useState(false)

	const handleOpenSidebar = () => {
		setOpenSidebarLink(!openSidebarLink)
	}
	return (
		<>
			<BrowserRouter>
				<div className='flex'>
					<RightSidebar
						openSidebarLink={openSidebarLink}
						handleOpenSidebar={handleOpenSidebar}
						setOpenSidebarLink={setOpenSidebarLink}
					/>
					<div className='flex flex-col w-full'>
						<Navbar handleOpenSidebar={handleOpenSidebar} />
						<Routes>
							<Route path='/phone' element={<Phone />} />
							<Route path='/card' element={<Card />} />
							<Route path='/history-phone' element={<HistoryPhone />} />
							<Route path='/history-payment' element={<HistoryPayment />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App
