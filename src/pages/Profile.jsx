import React, { useState } from 'react'
import Rootlayout from '../layout/Rootlayout'
import {BiMessageAltMinus} from 'react-icons/bi'
import {BsTelephoneForward} from 'react-icons/bs'
import {TbEdit} from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [section,setSection] = useState("personal")
  return (
    <Rootlayout>
      <div className=" mx-10 my-5">
        {/* header */}
        <h1 className=' text-[20px] font-[500] text-white'>Profile</h1>
        <div className=" flex items-end gap-10 mt-10 mx-5">
          {/* image */}
          <div className="">
            <img className=' w-[150px] h-[150px] object-cover rounded-full' src="https://i.pinimg.com/564x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg" alt="" />
          </div>
          {/* name */}
          <div className=" text-white mb-5">
            <h1 className=' text-[22px] font-[700] tracking-wider'>Ethan James</h1>
            <span className=' text-[15px] text-stone-400'>Sale Executive</span>
            <div className=" text-white text-xl flex gap-4 mt-5">
              <BsTelephoneForward />
              <BiMessageAltMinus className=' text-2xl' />
            </div>
          </div>
        </div>
        {/* section */}
        <div className=" w-[1000px] my-5 justify-between items-center relative">
          <div className=" px-5 py-3  border-b border-stone-500 text-white flex gap-20">
                <h1 onClick={() => setSection('personal')} className= {`${section === 'personal' ? ('text-[#B19777] select-none font-[600] text-[18px] cursor-pointer') : ('text-white font-[600] text-[18px] cursor-pointer')}`} >Personal</h1>
                <h1 onClick={() => setSection('login')} className={`${section === 'login' ? ('text-[#B19777] select-none font-[600] text-[18px] cursor-pointer') : ('text-white font-[600] text-[18px] cursor-pointer')}`}>Login Information</h1>
          </div>
          <div className="absolute right-[100px] top-[-5px]">
            <Link to={'/profile/edit'}>
              <button className=' px-4 py-2 rounded-lg flex items-center gap-2 button'> <TbEdit /> Edit Profile</button>
            </Link>
          </div>
        </div>
        {/* personal */}
        {section === 'personal' ? (
          <div className=" text-white flex flex-col gap-6 p-5">
            <div className=' flex gap-20'>
              <span className=' text-[17px] text-stone-300 font-bold'>Date Of birth</span>
              <span> {'12/4/1989'}</span>
            </div>
            <div className=' flex gap-32'>
              <span className=' text-[17px] text-stone-300 font-bold'>Gender</span>
              <span> {'Male'}</span>
            </div>
            <div className=' flex gap-[122px]'>
              <span className=' text-[17px] text-stone-300 font-bold'>Address</span>
              <span> {'No2,Baho Street,Bahan,Yangon'}</span>
            </div>
          </div>
        ) : (
        <div className=" text-white flex flex-col gap-6 p-5">
          <div className=' flex gap-32'>
            <span className=' text-[17px] text-stone-300 font-bold'>Phone</span>
            <span> {'0998899898'}</span>
          </div>
          <div className=' flex gap-28'>
            <span className=' text-[17px] text-stone-300 font-bold'>Position</span>
            <span> {'Sale Executive'}</span>
          </div>
          <div className=' flex gap-36'>
            <span className=' text-[17px] text-stone-300 font-bold'>Mail</span>
            <span> {'Jame33@gmail.com'}</span>
          </div>
        </div>
        )}
      </div>
    </Rootlayout>
  )
}

export default Profile
