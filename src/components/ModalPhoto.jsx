import { AnimatePresence,motion } from 'framer-motion'
import React, { useState } from 'react'
import { useGetPhotoQuery } from '../services/authApi'

const ModalPhoto = ({setShowPhotoModal,showPhotoModal}) => {
  console.log(showPhotoModal)
  const token = localStorage.getItem('token')
  const {data} = useGetPhotoQuery(token)
  const [photo,setphoto] = useState('')
    const selectPhoto = (photos) => {
        setphoto(photos)
    }
    const closeModal = () => {
      console.log('closed')
      setShowPhotoModal(false)
    }
  return (
    <AnimatePresence>
      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          className=" absolute h-screen top-0 left-0 inset-0 bg-black bg-opacity-70 flex z-[199] justify-center"
        >
          <div className=" bg-[#323232] p-10 rounded-lg w-[1000px] flex flex-col gap-10 items-center">
            <h2 className=' text-white text-[22px] font-[600] '>Choose photo</h2>
            <div className=" flex gap-10 flex-wrap">
             {data?.data.map(image => 
                <div onClick={() => selectPhoto(image)} className="">
                    <img className=' h-[200px] w-[200px]' src={image.url} alt="" />
                </div>
                )}
            </div>
            <button
            onClick={() => setShowPhotoModal(false)}
            className=' text-white bg-[#B19777] px-4 py-2'>Cancel</button>
          </div>
        </motion.div>
      
    </AnimatePresence>

  )
}

export default ModalPhoto
