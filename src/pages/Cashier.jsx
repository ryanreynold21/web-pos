import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";
import Navbar from "../layout/Navbar";

const Cashier = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Xbox Series X",
      quantity: "0",
      price: 500,
      img: "https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/03/XboxSeriesXController_HERO.jpg",
    },
    {
      id: 2,
      name: "Xbox Series X2",
      quantity: "0",
      price: 500,
      img: "https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/03/XboxSeriesXController_HERO.jpg",
    },
    {
      id: 3,
      name: "Xbox Series X3",
      quantity: "0",
      price: 500,
      img: "https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/03/XboxSeriesXController_HERO.jpg",
    },
    {
      id: 4,
      name: "Xbox Series X4",
      quantity: "0",
      price: 500,
      img: "https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/03/XboxSeriesXController_HERO.jpg",
    },
    {
      id: 5,
      name: "Xbox Series X5",
      quantity: "0",
      price: 500,
      img: "https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/03/XboxSeriesXController_HERO.jpg",
    },
  ]);
  const [selectedProduct, setSelectedProduct] = useState(1);

  const handleNumberClick = (num) => {
    const updatedProducts = products.map((product) => {
      if (product.id === selectedProduct) {
        const newQuantity =
          product.quantity === "0" ? num : product.quantity + num;
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleClearClick = (num) => {
    const updatedProducts = products.map((product) => {
      if (product.id === selectedProduct) {
        if (product.quantity === "0") {
          return { ...product, selected: false };
        }
        const delQuantity =
          product.quantity.length === 1 ? "0" : product.quantity.slice(0, -1);
        return { ...product, quantity: delQuantity };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const calculateTotal = () => {
    let total = 0;
    products.forEach((product) => {
      if (product.selected) {
        total += product.price * product.quantity;
      }
    });
    return total;
  };

  const handleProductSelect = (productId) => {
    setSelectedProduct(productId);
    const updatedProducts = products.map((product) => ({
      ...product,
      selected: product.id === productId || product.selected,
      quantity:
        product.id === productId
          ? String(parseInt(product.quantity) + 1)
          : product.quantity,
    }));
    setProducts(updatedProducts);
  };
  const handleProductInCartSelect = (productId) => {
    setSelectedProduct(productId);
    const updatedProducts = products.map((product) => ({
      ...product,
      selected: product.id === productId || product.selected,
    }));
    setProducts(updatedProducts);
  };

  return (
    <div className="bg-[#272727]">
      {/* <Navbar/> */}
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
                // value={searchTerm} onChange={(e)=>dispatch(setSearchTerm(e.target.value))}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {products.map((product) => (
              <div
                key={product.id}
                className={`product cursor-pointer h-[250px] max-w-sm bg-[#323232] border border-[#B19777] rounded-lg shadow dark:bg-[#323232] dark:border-[#B19777]" ${
                  product.selected ? "active" : ""
                }`}
                onClick={() => handleProductSelect(product.id)}
              >
                <img src={product.img} className=" rounded-t-lg" alt="" />
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
              {products.map(
                (product) =>
                  product.selected && (
                    <div
                      key={product.id}
                      className={`display flex py-1 px-4 justify-between items-center transition-all border-b border-b-[#B19777] ${
                        product.id === selectedProduct ? "prodInCartActive" : ""
                      }`}
                      onClick={() => handleProductInCartSelect(product.id)}
                    >
                      <div className="">
                        <h5 className="mb-2 text-2xl tracking-tight text-[#B19777]">
                          {product.name}
                        </h5>
                        <p className="mb-3 font-normal text-gray-400">
                          {product.quantity}
                        </p>
                      </div>
                      <p className="mb-3 font-normal text-gray-400">
                        {product.price * product.quantity}
                      </p>
                    </div>
                  )
              )}
            </div>
            <p className=" text-2xl ml-52">Total : {calculateTotal()}</p>
          </div>
          <div className="h-1/2 bg-[#323232]">
            <div className="buttons text-gray-400">
              <div className="grid grid-cols-4 h-20">
                <button
                  onClick={() => handleNumberClick("7")}
                  className="col-span-1 number-btn"
                >
                  7
                </button>
                <button
                  onClick={() => handleNumberClick("8")}
                  className="col-span-1 number-btn"
                >
                  8
                </button>
                <button
                  onClick={() => handleNumberClick("9")}
                  className="col-span-1 number-btn"
                >
                  9
                </button>
                <button
                  // onClick={() => handleNumberClick("9")}
                  className="col-span-1 number-btn"
                >
                  Qty
                </button>
              </div>
              <div className="grid grid-cols-4 h-20">
                <button
                  onClick={() => handleNumberClick("4")}
                  className="col-span-1 number-btn"
                >
                  4
                </button>
                <button
                  onClick={() => handleNumberClick("5")}
                  className="col-span-1 number-btn"
                >
                  5
                </button>
                <button
                  onClick={() => handleNumberClick("6")}
                  className="col-span-1 number-btn"
                >
                  6
                </button>
                <button
                  // onClick={() => handleNumberClick("9")}
                  className="col-span-1 number-btn"
                >
                  %Disc
                </button>
              </div>
              <div className="grid grid-cols-4 h-20">
                <button
                  onClick={() => handleNumberClick("1")}
                  className="col-span-1 number-btn"
                >
                  1
                </button>
                <button
                  onClick={() => handleNumberClick("2")}
                  className="col-span-1 number-btn"
                >
                  2
                </button>
                <button
                  onClick={() => handleNumberClick("3")}
                  className="col-span-1 number-btn"
                >
                  3
                </button>
                <button
                  // onClick={() => handleNumberClick("9")}
                  className="col-span-1 number-btn"
                >
                  Price
                </button>
              </div>
              <div className="grid grid-cols-4 h-20">
                <button
                  // onClick={() => handleNumberClick("0")}
                  className="col-span-1 number-btn"
                >
                  +/-
                </button>
                <button
                  onClick={() => handleNumberClick("0")}
                  className="col-span-1 number-btn"
                >
                  0
                </button>
                <button
                  // onClick={() => handleNumberClick("9")}
                  className="col-span-1 number-btn"
                >
                  .
                </button>
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
                // onClick={() => handleNumberClick("9")}
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
