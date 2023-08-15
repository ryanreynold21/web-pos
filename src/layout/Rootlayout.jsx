import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Rootlayout = ({children}) => {
  return (
    <div>
           <Navbar />
           
           <div className=" flex bg-[#272727]">
           <Sidebar />
             <div className=" bg-stone">
           {children}
          </div>
           </div>
    </div>
  )
}

export default Rootlayout
