import React, { useEffect, useState } from 'react'


function Phone() {
	const [loading, setLoading] = useState(false)
	

	return (
		<div>
			{loading ? (
				<div className='flex justify-center items-center'>
					<div>
						<span className='loading loading-spinner loading-lg mt-[250px] text-[#0094FF]'></span>
					</div>
				</div>
			) : (
				<table className='table table-fixed font-Montserrat'>
					<tbody>
						{/* {products.map(product => (
							<tr
								key={product.id}
								className='flex flex-col md:flex-row items-center justify-center md:gap-[120px] w-full'
							>
								<td className='p-[1]'>{product.country}</td>
								<td className='p-[1]'>{product.phoneNumber}</td>
								<td className='p-[1]'>{product.price}</td>
								<td className='p-[1]'>
									<motion.button
										whileHover={{ scale: 0.9 }}
										className='bg-[#0094FF] px-[30px] py-[5px] rounded-[5px]'
									>
										Sotib olish
									</motion.button>
								</td>
							</tr>
						))} */}
						<tr>
							<td>aaaaaaaaaa</td>
						</tr>
					</tbody>
				</table>
			)}
		</div>
	)
}

export default Phone
