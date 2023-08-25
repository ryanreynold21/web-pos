import React from 'react'
import { motion } from 'framer-motion'

const AddStock = ({setShowSideBar,showSideBar}) => {
  return (
    <div>
      <motion.div
      initial={{x:'350px'}}
      animate={{x:0}}
      exit={{ x: "350px" }}
      className=" fixed right-0 z-40 w-[300px] bg-[#323232] shadow-2xl">
        <div className=" px-10 py-6 flex flex-col justify-between gap-[380px]">
            <div className="">    
                <h1 className=' text-white font-[600] text-[20px] mb-5'>Add Stock</h1>
                <span className=" text-[15px] text-stone-300 font-bold">
                  Quantity
                </span>
                <input
                  required
                  //   value={}
                  //   onChange={}
                  type="text"
                  className=" mb-5 mt-1 block w-full p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px]"
                />
                <span className=" text-[15px] text-stone-300 font-bold">
                  More
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
            <div className=" flex gap-4 flex-col">
                <button className=" px-6 py-2 rounded-lg button">
                  {" "}
                  SAVE
                </button>
                <button onClick={() => setShowSideBar(false)} className=" text-white border border-stone-400 tracking-wider px-5 py-2 rounded-lg">
                  {" "}
                  CANCEL
                </button>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AddStock
