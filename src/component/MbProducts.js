import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const MbProducts = () => {
    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font">
                <div className=" container px-5 py-8 mx-auto ">
                    <div className="mx-auto flex flex-wrap space-x-4">
                        <img alt="ecommerce" className="lg:w-[32%] w-full lg:h-auto h-64 object-cover object-center rounded" src="https://www.bonkerscorner.com/cdn/shop/files/Bonkerscorner_spongebob_squarepants_grafitti_oversized_tshirt05_375x_crop_center.jpg?v=1729146417" />
                        <img alt="ecommerce" className="lg:w-[32%] w-full lg:h-auto h-64 object-cover object-center rounded" src="https://www.bonkerscorner.com/cdn/shop/files/Bonkerscorner_spongebob_squarepants_grafitti_oversized_tshirt01_375x_crop_center.jpg?v=1729146417" />
                        <img alt="ecommerce" className="lg:w-[32%] w-full lg:h-auto h-64 object-cover object-center rounded" src="https://www.bonkerscorner.com/cdn/shop/files/Bonkerscorner_spongebob_squarepants_grafitti_oversized_tshirt04_375x_crop_center.jpg?v=1729146417" />

                    </div>
                    <div className="lg:w-2/3 w-full lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-md title-font text-gray-500 tracking-widest">TECT lifestyle</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Deadpool: He is Not Alone Full Sleeves T-Shirt</h1>
                        <span className="title-font font-medium text-2xl text-gray-900">
                            ₹999.00</span>
                        <div className="flex flex-col space-y-3 mt-6 pb-5 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button className="border-2 border-gray-300 bg-white rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-3">Size</span>
                                <div className="rounded flex py-2 text-base pl-2 pr-10 space-x-2 ">
                                    <button className='border border-black px-2 rounded-sm'>XS</button>
                                    <button className='border border-black px-2 rounded-sm'>S</button>
                                    <button className='border border-black px-2 rounded-sm'>M</button>
                                    <button className='border border-black px-2 rounded-sm'>L</button>
                                    <button className='border border-black px-2 rounded-sm'>XL</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to cart</button>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MbProducts