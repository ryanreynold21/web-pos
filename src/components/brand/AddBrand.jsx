import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const AddBrand = ({setShowSideBar,showSideBar}) => {
  const [name,setName] = useState('')
  const [company,setCompany] = useState('')
  const [agent,setAgent] = useState('')
  const [phone_number,setPhoneNumber] = useState('')
  const [information,setInformation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const brandData = {name,company,agent,phone_number,information}
    console.log(brandData)
  }
  return (
    <div>
    <motion.div
    initial={{x:'350px'}}
    animate={{x:0}}
    exit={{ x: "350px" }}
    className="  right-0 z-40 w-[300px] bg-[#323232] shadow-2xl">
      <form action="">
        <div className="  px-10 py-6 flex flex-col gap-[380px]">
            <div className="">    
                <h1 className=' text-white font-[600] text-[20px] mb-5'>Add Stock</h1>
                <div className="">
                  <span className=" text-[15px] text-stone-300 font-bold">
                    Brand Name
                  </span>
                  <input
                    required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    type="text"
                    className=" mb-5 mt-1 block w-full p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px]"
                  />
                </div>
                <div className="">
                  <span className=" text-[15px] text-stone-300 font-bold">
                    Company Name
                  </span>
                  <input
                    required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    className=" mb-5 mt-1 block w-full p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px]"
                  />
                </div>
                <div className="">
                  <span className=" text-[15px] text-stone-300 font-bold">
                    Agent
                  </span>
                  <input
                    required
                      value={agent}
                      onChange={(e) => setAgent(e.target.value)}
                    type="text"
                    className=" mb-5 mt-1 block w-full p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px]"
                  />
                </div>
                <div className="">
                  <span className=" text-[15px] text-stone-300 font-bold">
                    Phone
                  </span>
                  <input
                    required
                      value={phone_number}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    type="text"
                    className=" mb-5 mt-1 block w-full p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px]"
                  />
                </div>
                <div className="">
                  <span className=" text-[15px] text-stone-300 font-bold">
                    Description
                  </span>
                  <textarea
                    required
                    //    onChange={(e) => setMessage(e.target.value)}
                    //    value={message}
                    name=""
                    className="mt-1 block w-full p-4 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                    id=""
                    cols="10"
                    rows="4"
                  ></textarea>
                </div>
            </div>
            <div className=" flex gap-4 flex-col mb-[200px]">
                <button type='submit' className=" px-6 py-2 rounded-lg button">
                  {" "}
                  SAVE
                </button>
                <button onClick={() => setShowSideBar(false)} className=" text-white border border-stone-400 tracking-wider px-5 py-2 rounded-lg">
                  {" "}
                  CANCEL
                </button>
            </div>
        </div>
      </form>
    </motion.div>
  </div>
  )
}

export default AddBrand
