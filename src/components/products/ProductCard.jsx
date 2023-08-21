import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div>
      <div className="">
        <div className=" w-[250px] bg-stone-700 rounded-md">
          <Link to={'/product/details'}>
            <img className=' w-[250px] h-[150px] object-cover' src="https://i.pinimg.com/564x/ef/a3/8c/efa38c6730b9b9007785fb90c92ac349.jpg" alt="" />
          </Link>
            <div className=" text-white text-right px-3 py-4">
                <h1>Stawberry yogurt</h1>
                <p>1000 kyats</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
