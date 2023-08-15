import React from 'react'
import {BsBell,BsMoonStars} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'

const Navbar = () => {
  return (
    <div>
      <div className=" bg-[#323232] p-3 border-b border-black">
        <div className=" flex justify-between mr-10">
          <div className="">
            <h1 className=' text-white text-2xl uppercase font-[800]'>Lottie</h1>
          </div>
          <div className=" text-white flex gap-6 text-2xl">
            <div> <BsBell /> </div>
            <div> <BsMoonStars /> </div>
            <div> <CgProfile /> </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
