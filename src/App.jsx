// App.js
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPanel from './admin/AdminPanel'
import Home from './components/Home'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/adminpanelbeeon' element={<AdminPanel />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
