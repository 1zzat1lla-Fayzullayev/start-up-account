import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

function Phone() {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, 'products'))
				const data = querySnapshot.docs.map(doc => doc.data())
				setProducts(data)
				setLoading(false) // Set loading to false once products are fetched
			} catch (error) {
				console.error('Error fetching products:', error)
				setLoading(false) // Set loading to false in case of an error
			}
		}
		fetchData()
	}, [])

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
						{products.map(product => (
							<tr
								key={product.id}
								className='flex flex-col md:flex-row items-center justify-center md:gap-[120px]'
							>
								<td className='p-[1]'>{product.country}</td>
								<td className='p-[1]'>{product.phoneNumber}</td>
								<td className='p-[1]'>{product.price}</td>
								<td className='p-[1]'>
									<motion.button
										whileHover={{ scale: 0.9 }}
										className='bg-[#0094FF] px-[30px] py-[5px] rounded-[5px]'
									>
										Купить
									</motion.button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default Phone
