import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { doc, setDoc, collection, getDocs, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

function AdminPanel() {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  )
  const [inputValues, setInputValues] = useState({})
  const [postOrPut, setPostOrPut] = useState(new Date().getTime())
  const [products, setProducts] = useState([]) // State to store fetched products
  const [isEditing, setIsEditing] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Function to handle login
  const handleLogin = e => {
    if (e.target.value === 'izzatilla') {
      setIsLogged(true)
    }
  }

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLogged)
  }, [isLogged])

  // Function to handle adding a phone number
  const handleAddNumber = async collectionName => {
    if (Object.values(inputValues).every(value => value)) {
      const itemRef = doc(db, collectionName, postOrPut.toString())

      await setDoc(itemRef, inputValues, { merge: true })

      setInputValues({
        name: '',
        country: '',
        price: '',
      })
      setPostOrPut(new Date().getTime())

      // Refetch products after adding a new one
      fetchProducts()
    }

    console.log(
      `Adding number: ${inputValues.country} ${inputValues.phoneNumber} - ${inputValues.price}`
    )
  }

  // Function to fetch products from Firestore
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'))
      const productsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setProducts(productsData)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts()
  }, [])

  // Function to handle deleting a product
  const handleDeleteProduct = async productId => {
    try {
      await deleteDoc(doc(db, 'products', productId))
      // Refetch products after deleting
      fetchProducts()
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  // Function to handle editing a product
  const handleEditProduct = async (productId, updatedProduct) => {
    try {
      await setDoc(doc(db, 'products', productId), updatedProduct)
      // Refetch products after editing
      fetchProducts()
    } catch (error) {
      console.error('Error editing product:', error)
    }
  }

  // Function to open the modal for editing a product
  const openEditModal = product => {
    setIsEditing(true)
    setSelectedProduct(product)
  }

  // Function to close the modal
  const closeModal = () => {
    setIsEditing(false)
    setSelectedProduct(null)
  }

  return (
    <div className='flex flex-col md:flex-row'>
      {isLogged ? (
        <>
          {/* Sidebar */}
          <div className='bg-gray-900 w-full md:w-[300px] md:h-screen p-6'>
            <div className='flex justify-center items-center flex-col'>
              <div className='flex gap-6 items-center text-3xl cursor-pointer uppercase font-bold my-8'>
                <h1>bee</h1>
                <div className='bg-blue-600 w-[77px] h-[77px] rounded-full flex justify-center items-center transform rotate-45'>
                  <h1 className='transform -rotate-45'>on!</h1>
                </div>
              </div>
              <motion.button
                whileHover={{ x: 10 }}
                className='bg-blue-600 w-full py-3 rounded-md text-white font-semibold uppercase tracking-wide mb-4'
              >
                Номера телефонов
              </motion.button>
            </div>
          </div>

          {/* Modal for editing */}
          {isEditing && selectedProduct && (
            <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80 flex justify-center items-center z-[100]'>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className='bg-white p-8 rounded-md shadow-md'
              >
                <h2 className='text-xl font-semibold mb-4'>Редактирование продукта</h2>
                <div className='mb-4'>
                  <label className='block text-gray-700 font-semibold mb-2'>Страна:</label>
                  <input
                    type='text'
                    value={selectedProduct.country}
                    onChange={e =>
                      setSelectedProduct(prevState => ({
                        ...prevState,
                        country: e.target.value,
                      }))
                    }
                    className='input input-bordered w-full p-2'
                    placeholder='Например, Узбекистан'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 font-semibold mb-2'>Номер телефона:</label>
                  <input
                    type='number'
                    value={selectedProduct.phoneNumber}
                    onChange={e =>
                      setSelectedProduct(prevState => ({
                        ...prevState,
                        phoneNumber: e.target.value,
                      }))
                    }
                    className='input input-bordered w-full p-2'
                    placeholder='Например, 998901234567'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 font-semibold mb-2'>Цена:</label>
                  <input
                    type='number'
                    value={selectedProduct.price}
                    onChange={e =>
                      setSelectedProduct(prevState => ({
                        ...prevState,
                        price: e.target.value,
                      }))
                    }
                    className='input input-bordered w-full p-2'
                    placeholder='Например, 10 USD'
                  />
                </div>
                <div className='flex justify-end'>
                  <motion.button
                    whileHover={{ scale: 0.95 }}
                    onClick={() => handleEditProduct(selectedProduct.id, selectedProduct)}
                    className='bg-blue-600 py-2 px-6 rounded-md text-white font-semibold mr-4'
                  >
                    Сохранить
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 0.95 }}
                    onClick={closeModal}
                    className='bg-gray-400 py-2 px-6 rounded-md text-white font-semibold'
                  >
                    Закрыть
                  </motion.button>
                </div>
              </motion.div>
            </div>
          )}

          {/* Content Area */}
          <div className='flex-1 bg-gray-100 p-8'>
            <>
              <div className='mb-4'>
                <label className='block text-gray-700 font-semibold mb-2'>Страна:</label>
                <input
                  type='text'
                  value={inputValues.country}
                  onChange={e =>
                    setInputValues(prevState => ({
                      ...prevState,
                      country: e.target.value,
                    }))
                  }
                  className='input input-bordered w-full p-2'
                  placeholder='Например, Узбекистан'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-semibold mb-2'>Номер телефона:</label>
                <input
                  type='number'
                  value={inputValues.phoneNumber}
                  onChange={e =>
                    setInputValues(prevState => ({
                      ...prevState,
                      phoneNumber: e.target.value,
                    }))
                  }
                  className='input input-bordered w-full p-2'
                  placeholder='Например, 998901234567'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-semibold mb-2'>Цена:</label>
                <input
                  type='number'
                  value={inputValues.price}
                  onChange={e =>
                    setInputValues(prevState => ({
                      ...prevState,
                      price: e.target.value,
                    }))
                  }
                  className='input input-bordered w-full p-2'
                  placeholder='Например, 10 USD'
                />
              </div>
              <motion.button
                whileHover={{ scale: 0.95 }}
                onClick={() => handleAddNumber('products')}
                className='bg-blue-600 py-2 px-6 rounded-md text-white font-semibold mb-4'
              >
                Добавить номер
              </motion.button>
              {/* Display added products in the table */}
              <table className='table table-fixed font-Montserrat'>
                <tbody>
                  {products.map(product => (
                    <tr
                      key={product.id}
                      className='flex flex-col md:flex-row items-center justify-center md:gap-[120px] text-black font-semibold'
                    >
                      <td className='p-[1]'>{product.country}</td>
                      <td className='p-[1]'>{product.phoneNumber}</td>
                      <td className='p-[1]'>{product.price}</td>
                      <td className='p-[1] flex items-center gap-2'>
                        <motion.button
                          whileHover={{ scale: 0.9 }}
                          onClick={() => openEditModal(product)}
                          className='bg-[#0094FF] px-[30px] py-[5px] rounded-[5px]'
                        >
                          Редактировать
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 0.9 }}
                          onClick={() => handleDeleteProduct(product.id)}
                          className='bg-red-500 px-[30px] py-[5px] rounded-[5px]'
                        >
                          Удалить
                        </motion.button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          </div>
        </>
      ) : (
        <div className='flex h-screen items-center w-screen justify-center'>
          <input
            type='password'
            className='input input-bordered p-3'
            placeholder='Пароль'
            onChange={handleLogin}
          />
        </div>
      )}
    </div>
  )
}

export default AdminPanel
