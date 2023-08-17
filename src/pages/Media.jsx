import React, { useRef, useState } from 'react'
import Rootlayout from '../layout/Rootlayout'
import {BsCloudUpload} from 'react-icons/bs'

const Media = () => {
  const fileRef = useRef(null)
  const [selectedfile,setSelectedfile] = useState(null);
  const handleFileChange = (e) => {
    setSelectedfile(e.target.files[0])
  }
  const handleUpload = () => {
    fileRef.current.click();
  }
  return (
    <Rootlayout>
     <div className=" mx-10 my-5">
        <h1 className=' text-[20px] font-[500] text-white mb-10'>Media</h1>
        {/* upload */}
        <div className=" bg-zinc-700 w-[900px] h-[200px] mx-[100px] flex justify-center">
          <div className=" flex flex-col items-center justify-center gap-5">
            <button onClick={handleUpload} className=' p-4 text-white border-dashed border-2 border-white rounded-full'>
             <BsCloudUpload size={30} /> 
            </button>
            <p className=' text-white'>Browsed Or Drag Photo</p>
          <input ref={fileRef} type="file" accept="image/*" className=' hidden' onChange={handleFileChange} />
          </div>
        </div>
        {/* gallary */}
        <div className=" mt-12">
         <h1 className=' text-[20px] font-[500] text-stone-400 mb-10'>Uploaded Photo</h1>
         <div className=" grid grid-cols-5 gap-5 flex-wrap">
          <img className=' w-[200px]' src="https://i.pinimg.com/564x/01/c7/51/01c751482ef7c4f5e93f3539efd27f6f.jpg" alt="" />
          <img className=' w-[200px]' src="https://i.pinimg.com/564x/01/c7/51/01c751482ef7c4f5e93f3539efd27f6f.jpg" alt="" />
          <img className=' w-[200px]' src="https://i.pinimg.com/564x/01/c7/51/01c751482ef7c4f5e93f3539efd27f6f.jpg" alt="" />
          
         </div>
        </div>
     </div>
    </Rootlayout>
  )
}

export default Media
