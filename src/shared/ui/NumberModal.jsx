import React from 'react'

function NumberModal() {
	return (
		<div>
			<dialog id='my_modal_3' className='modal'>
				<div className='modal-box bg-[#252525] font-Montserrat'>
					<form method='dialog'>
						<button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
							✕
						</button>
					</form>
					<h3 className='font-bold text-lg font-Montserrat'>Получить номер</h3>
					<div className='mt-[30px]'>
						<h1>Ваш номер:</h1>
						<div>+998 97 424 94 84</div>

						<p className='mt-[30px] text-green-500'>
							Менеджер скоро даст вам код...
						</p>
					</div>
				</div>
			</dialog>
		</div>
	)
}

export default NumberModal
