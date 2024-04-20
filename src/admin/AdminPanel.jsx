import React, { useState } from 'react'

function AdminPanel() {
	const [isLogged, setIsLogged] = useState(
		localStorage.getItem('isLoggedIn') === 'true'
	)
	return (
		<>
			{isLogged ? (
				<div>Malades :)</div>
			) : (
				<div className='flex h-screen w-full justify-center items-center'>
					<input
						type='password'
						className='input input-bordered'
						placeholder='Пароль'
						onChange={e => {
							if (e.target.value === 'izzatilla') {
								setIsLogged(true)
							}
						}}
					/>
				</div>
			)}
		</>
	)
}

export default AdminPanel
