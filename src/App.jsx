// App.js
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPanel from './admin/AdminPanel'
import Home from './components/Home'
import Phone from './pages/Phone'
import Card from './pages/Card'
import HistoryPhone from './pages/HistoryPhone'
import HistoryPayment from './pages/HistoryPayment'
import Register from './pages/Register'
import Layout from './layout/Layout'
import AdminLayout from './layout/AdminLayout'
import { motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/phone' element={<Phone />} />
						<Route path='/card' element={<Card />} />
						<Route path='/history-phone' element={<HistoryPhone />} />
						<Route path='/history-payment' element={<HistoryPayment />} />
					</Route>
					<Route path='/register' element={<Register />} />

					<Route path='/admin' element={<AdminLayout />}>
						<Route index element={<AdminPanel />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Toaster position='top-center' reverseOrder={false} />
		</>
	)
}

export default App
