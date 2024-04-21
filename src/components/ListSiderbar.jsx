import React, { useState, useEffect } from 'react'
import img from '../ImagesWithImport'
import { Link } from 'react-router-dom'

function ListSidebar({ openSidebarLink }) {
	const [activeIndex, setActiveIndex] = useState(null)

	const handleItemClick = index => {
		setActiveIndex(index)
	}
	return (
		<>
			<Link to='/phone' className='w-full'>
				<li
					className={`flex gap-2 pl-[20px] items-center justify-start cursor-pointer ${
						openSidebarLink ? 'w-full md:w-full' : 'w-[55px] md:w-full'
					} ${
						activeIndex === 0 ? 'bg-[#252525] border-l-[4px] border-white' : ''
					} md:rounded-r-[5px]`}
					onClick={() => handleItemClick(0)}
				>
					<div className='flex items-center'>
						<img
							src={img.phone}
							alt='phone image'
							className='w-[30px] md:w-[40px]'
						/>

						<p className={'md:flex text-[12px] md:text-[16px]'}>Номера</p>
					</div>
				</li>
			</Link>
			<Link to='/card' className='w-full'>
				<li
					className={`flex gap-2 pl-[20px] items-center justify-start cursor-pointer ${
						openSidebarLink ? 'w-full md:w-full' : 'w-[55px] md:w-full'
					} ${
						activeIndex === 1 ? 'bg-[#252525] border-l-[4px] border-white' : ''
					} md:rounded-r-[5px]`}
					onClick={() => handleItemClick(1)}
				>
					<div className='flex items-center'>
						<img
							src={img.card}
							alt='card image'
							className='w-[30px] md:w-[40px]'
						/>

						<p className={'md:flex text-[12px] md:text-[16px]'}>
							Пополнить счет
						</p>
					</div>
				</li>
			</Link>
			<Link to='/history-phone' className='w-full'>
				<li
					className={`flex gap-2 pl-[20px] items-center justify-start cursor-pointer ${
						openSidebarLink ? 'w-full md:w-full' : 'w-[55px] md:w-full'
					} ${
						activeIndex === 2 ? 'bg-[#252525] border-l-[4px] border-white' : ''
					} md:rounded-r-[5px]`}
					onClick={() => handleItemClick(2)}
				>
					<div className='flex items-center'>
						<img
							src={img.historyphone}
							alt='history phone image'
							className='w-[30px] md:w-[40px]'
						/>

						<p className={'md:flex text-[12px] md:text-[16px]'}>
							Избранные номера
						</p>
					</div>
				</li>
			</Link>
			<Link to='/history-payment' className='w-full'>
				<li
					className={`flex gap-2 pl-[20px] items-center justify-start cursor-pointer ${
						openSidebarLink ? 'w-full md:w-full' : 'w-[55px] md:w-full'
					} ${
						activeIndex === 3 ? 'bg-[#252525] border-l-[4px] border-white' : ''
					} md:rounded-r-[5px]`}
					onClick={() => handleItemClick(3)}
				>
					<div className='flex items-center'>
						<img
							src={img.historypayment}
							alt='history payment image'
							className='w-[30px] md:w-[40px]'
						/>

						<p className={'md:flex text-[12px] md:text-[16px]'}>
							История покупок
						</p>
					</div>
				</li>
			</Link>
		</>
	)
}

export default ListSidebar
