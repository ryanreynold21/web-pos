import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useGetProductQuery } from "../services/authApi";
import { useNavigate } from 'react-router-dom';

const Cashier = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { data } = useGetProductQuery(token);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [currentSelectedProductId, setCurrentSelectedProductId] = useState(null);


  const handleProductClick = (productId) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        const updatedQuantities = { ...selectedQuantities };
        updatedQuantities[productId] = (updatedQuantities[productId] || 0) + 1;
        setSelectedQuantities(updatedQuantities);
        return prevSelected;
      } else {
        const updatedSelected = [...prevSelected, productId];
        const updatedQuantities = { ...selectedQuantities };
        updatedQuantities[productId] = 1;
        setSelectedQuantities(updatedQuantities);
        return updatedSelected;
      }
    });
  };

  const handleNumberClick = (number) => {
    if (currentSelectedProductId !== null) {
      setSelectedQuantities((prevQuantities) => {
        const currentQuantity = prevQuantities[currentSelectedProductId] || 0;
        const newQuantity = parseInt(`${currentQuantity}${number}`);
        const updatedQuantities = {
          ...prevQuantities,
          [currentSelectedProductId]: newQuantity,
        };
        return updatedQuantities;
      });
    }
  };

  const handleClearClick = () => {
    setSelectedQuantities((prevQuantities) => {
      const productId = currentSelectedProductId;
      const currentQuantity = prevQuantities[productId] || 0;
      const newQuantity = Math.floor(currentQuantity / 10); 
      const updatedQuantities = {
        ...prevQuantities,
        [productId]: newQuantity >= 1 ? newQuantity : 0,
      };

      if (newQuantity <= 0) {
        setSelectedProducts((prevSelected) =>
          prevSelected.filter((id) => id !== productId)
        );
      }

      return updatedQuantities;
    });
  };

  const calculateTotal = () => {
    let total = 0;

    selectedProducts.forEach((productId) => {
      const selectedProduct = data?.data?.find(
        (product) => product.id === productId
      );

      if (selectedProduct) {
        const quantity = selectedQuantities[productId] || 0;
        total += selectedProduct.price * quantity;
      }
    });

    return total;
  };


  const handleProductInCartSelect = (productId) => {
    setCurrentSelectedProductId(productId);
    setSelectedProducts((prevSelected) => {
      if (!prevSelected.includes(productId)) {
        return [...prevSelected, productId];
      }
      return prevSelected;
    });
  };

  const handlePaymentClick = () => {
    const total = calculateTotal(); 
    const checkoutData = {
      selectedProducts,
      selectedQuantities,
      total,
      data,
    };
    navigate('/checkout', { state: { checkoutData } });
  };

  return (
    <div className="bg-[#272727]">
      <div className="flex gap-5 ">
        <div className="w-3/4  min-h-screen">
          <div className="flex justify-between mx-5 my-5">
            <div className="">
              <h1 className="text-2xl text-[#B19777]">Sale</h1>
              <p className="text-white">Sale / Cashier</p>
            </div>
            <div class="relative my-3">
              <div class="absolute inset-y-0 left-2 flex items-center text-[#B19777] pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#B19777] dark:text-[#B19777]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block py-2 pl-10 pr-3 text-sm text-[#B19777] border border-[#B19777] rounded-lg bg-[#272727]   placeholder-[#B19777]  focus:outline-none"
                placeholder="Search ..."
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {data?.data?.map((product) => (
              <div
                key={product.id}
                className={`product cursor-pointer h-[280px] w-[250px] bg-[#323232] border border-[#B19777] rounded-lg shadow dark:bg-[#323232] dark:border-[#B19777]" ${
                  selectedProducts.includes(product.id) ? "active" : ""
                }`}
                onClick={() => handleProductClick(product.id)}
              >
                <img src={product.photo} className=" rounded-t-lg w-full h-2/3" alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#B19777]">
                    {product.name}
                  </h5>
                  <p className="mb-3 font-normal  text-gray-400">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-1/4 border-l border-l-[#B19777] max-h-screen">
          <div className="h-1/2 overflow-hidden relative">
            <h1 className="text-3xl py-5 px-4 text-[#B19777] font-semibold border-b border-b-[#B19777]">
              Cart
            </h1>
            <div className="overflow-auto w-full h-2/3">
              {selectedProducts.map((productId) => {
                const selectedProduct = data?.data?.find(
                  (product) => product.id === productId
                );

                if (!selectedProduct) {
                  return null; 
                }
                const quantity = selectedQuantities[productId] || 0; 
                const totalPrice = selectedProduct.price * quantity;

                return (
                  <div
                    key={productId}
                    className={`display cursor-pointer flex py-1 px-4 justify-between items-center transition-all border-b border-b-[#B19777] ${
                      selectedProduct.id === currentSelectedProductId
                        ? "prodInCartActive"
                        : ""
                    }`}
                    onClick={()=>handleProductInCartSelect(productId)}
                  >
                    <div className="">
                      <h5 className="mb-2 text-2xl tracking-tight text-[#B19777]">
                        {selectedProduct.name}
                      </h5>
                      <p className="mb-3 font-normal text-gray-400">
                        {quantity}
                      </p>
                    </div>
                    <p className="mb-3 font-normal text-gray-400">
                      {totalPrice}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className=" text-2xl ml-52">Total : {calculateTotal()}</p>
          </div>
          <div className="h-1/2 bg-[#323232]">
            <div className="buttons text-gray-400">
              <div className="grid grid-cols-3 h-20">
                <button
                  onClick={() => handleNumberClick( "7")}
                  className="col-span-1 number-btn"
                >
                  7
                </button>
                <button
                  onClick={() => handleNumberClick( "8")}
                  className="col-span-1 number-btn"
                >
                  8
                </button>
                <button
                  onClick={() => handleNumberClick( "9")}
                  className="col-span-1 number-btn"
                >
                  9
                </button>
                {/* <button
                  // onClick={() => handleNumberClick("9")}
                  className="col-span-1 number-btn"
                >
                  Qty
                </button> */}
              </div>
              <div className="grid grid-cols-3 h-20">
                <button
                  onClick={() => handleNumberClick( "4")}
                  className="col-span-1 number-btn"
                >
                  4
                </button>
                <button
                  onClick={() => handleNumberClick( "5")}
                  className="col-span-1 number-btn"
                >
                  5
                </button>
                <button
                  onClick={() => handleNumberClick( "6")}
                  className="col-span-1 number-btn"
                >
                  6
                </button>
                {/* <button
                  // onClick={() => handleNumberClick("9")}
                  className="col-span-1 number-btn"
                >
                  %Disc
                </button> */}
              </div>
              <div className="grid grid-cols-3 h-20">
                <button
                 onClick={() => handleNumberClick( "1")}
                  className="col-span-1 number-btn"
                >
                  1
                </button>
                <button
                  onClick={() => handleNumberClick( "2")}
                  className="col-span-1 number-btn"
                >
                  2
                </button>
                <button
                  onClick={() => handleNumberClick( "3")}
                  className="col-span-1 number-btn"
                >
                  3
                </button>
                {/* <button
                  // onClick={() => handleNumberClick("9")}
                  className="col-span-1 number-btn"
                >
                  Price
                </button> */}
              </div>
              <div className="grid grid-cols-3 h-20">
                <button
                  // onClick={() => handleNumberClick("0")}
                  className="col-span-1 number-btn"
                >
                  +/-
                </button>
                <button
                  onClick={() => handleNumberClick( "0")}
                  className="col-span-1 number-btn"
                >
                  0
                </button>
                {/* <button
                  // onClick={() => handleNumberClick(".")}
                  className="col-span-1 number-btn"
                >
                  .
                </button> */}
                <button
                  onClick={handleClearClick}
                  className="flex justify-center items-center number-btn"
                >
                  <FiDelete />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 bg-[#B19777]  text-white">
              <button
                onClick={ handlePaymentClick}
                className=" number-btn h-[49px]"
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashier;
