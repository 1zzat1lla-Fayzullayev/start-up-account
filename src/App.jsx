// App.js
import React, { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Phone from './pages/Phone'
import Card from './pages/Card'
import HistoryPhone from './pages/HistoryPhone'
import HistoryPayment from './pages/HistoryPayment'
import Layout from './layout/Layout'
import SignIn from './pages/SignIn'
import { Toaster } from 'react-hot-toast'
import SignUp from './pages/SignUp'

export const loggedInContext = createContext()

export const userLoggedIn = () => useContext(loggedInContext)

function App() {
	const [loggedIn, setLoggedIn] = useState(() => {
		const storedLoggedIn = localStorage.getItem('loggedIn')
		return storedLoggedIn ? JSON.parse(storedLoggedIn) : false
	})

	const registerUser = () => {
		setIsRegistered(true)
	}

	const unregisterUser = () => {
		setIsRegistered(false)
	}

	useEffect(() => {
		localStorage.setItem('loggedIn', JSON.stringify(loggedIn))
	}, [loggedIn])

	return (
		<>
			<BrowserRouter>
				<loggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route index element={<Home />} />
							<Route path='/phone' element={<Phone />} />
							<Route path='/card' element={<Card />} />
							<Route path='/history-phone' element={<HistoryPhone />} />
							<Route path='/history-payment' element={<HistoryPayment />} />
						</Route>
						<Route path='/signin' element={<SignIn />} />
						<Route path='/signup' element={<SignUp />} />
					</Routes>
				</loggedInContext.Provider>
			</BrowserRouter>
			<Toaster position='top-center' reverseOrder={false} />
		</>
	)
}

export default App
