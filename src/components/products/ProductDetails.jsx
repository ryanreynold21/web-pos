import React from 'react'
import Rootlayout from '../../layout/Rootlayout'
import {BsShopWindow} from 'react-icons/bs'

const ProductDetails = () => {
  return (
    <Rootlayout>
     <div className="mx-10 my-5">
        <div className=" flex justify-between">
          <div className="">
            <h1 className=" text-[20px] font-[500] text-white">Product</h1>
            <p className=' text-gray-500'>Inventory/products/details</p>
          </div>
          <div className=" ">
            <button className=' px-4 py-2 rounded-lg flex items-center gap-2 text-white border border-[#FFFFFF] hover:bg-[#B19777]'>Product List</button>
          </div>
        </div>
        <div className=" flex justify-between mt-10">
          {/* information */}
          <div className=" bg-[#]">
            <div className=" flex items-end gap-10 mt-10 mx-5">
              {/* image */}
              <div className="">
                <img className=' w-[150px] h-[150px] object-cover rounded-full' src="https://i.pinimg.com/564x/ef/a3/8c/efa38c6730b9b9007785fb90c92ac349.jpg" alt="" />
              </div>
              {/* name */}
              <div className=" text-white mb-5">
                <h1 className=' text-[22px] font-[700] tracking-wider mb-3'>Strawberry yogurt</h1>
                <div className=' text-[17px] text-stone-400 flex gap-6'>Sale price : <p className=' text-white'>10,000MMK</p> </div>
                <div className=' text-[17px] text-stone-400 flex gap-3'>Actual price : <p className=' text-white'>8000MMK</p> </div>
              </div>
            </div>
            <div className=" mt-5 px-5 py-3  border-b border-stone-500 text-white flex gap-20">
                    <h1 className='text-white font-[600] text-[18px] cursor-pointer flex gap-3 items-center'> <BsShopWindow /> Information</h1>
            </div>
            <div className=" text-white flex flex-col gap-6 p-5">
                <div className=' flex gap-[150px]'>
                  <span className=' text-[17px] text-stone-300 font-bold'>Name</span>
                  <span> {'Stawberry yogurt'}</span>
                </div>
                <div className=' flex gap-[150px]'>
                  <span className=' text-[17px] text-stone-300 font-bold'>Brand</span>
                  <span> {"USA"}</span>
                </div>
                <div className=' flex gap-[150px]'>
                  <span className=' text-[17px] text-stone-300 font-bold'>Stock</span>
                  <span> {'120'}</span>
                </div>
                <div className=' flex gap-[160px]'>
                  <span className=' text-[17px] text-stone-300 font-bold'>Unit</span>
                  <span> {'10'}</span>
                </div>
                <div className=' flex gap-[50px]'>
                  <span className=' text-[17px] text-stone-300 font-bold'>MOre Information</span>
                  <span> {'Delicious'}</span>
                </div>
              </div>
          </div>
          {/* table */}
          <div className=" flex flex-col gap-10">
            {/* stock history */}
            <div className="overflow-x-auto p-2 bg-[#323232] text-white">
              <h1 className=' font-[600] text-lg uppercase'>Stock history</h1>
              <table className="table">
                {/* head */}
                <thead className=' text-white'>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* sale history */}
            <div className="overflow-x-auto bg-[#323232] p-2 text-white">
              <h1 className=' font-[600] text-lg uppercase'>Sale History</h1>
              <table className="table">
                {/* head */}
                <thead className=' text-white'>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
     </div>
    </Rootlayout>
  )
}

export default ProductDetails
