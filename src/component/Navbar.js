import React from 'react'
import { Button } from '@mui/material'
import SearchLogo from '../SearchLogo.png'
import Account from '../Account.png'
import Cart from '../Cart.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className=' flex p-4 justify-between'>
                <div className="logo pl-14 py-5">
                    <Link to="/dashboard"><img className='invert' src="https://www.bonkerscorner.com/cdn/shop/files/Bonkers_Corner_Logo_White1_400x95_crop_center.png?v=1721047270" alt="" width={160} height={110} /></Link></div>
                <div className="icons flex items-end">
                    <ul className='flex gap-5 items-center'>
                        <div className="Men  cursor-pointer flex relative">
                            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className=" text-Black  font-normal rounded-lg text-base px-1 py-2.5 text-center inline-flex items-center " type="button">Men<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>
                            <div id="dropdownHover" className={`w-32  absolute top-[52px] left-[-12px] bg-white divide-y divide-gray-100  dark:bg-gray-700`}>
                            </div>
                        </div>
                        <div className="women cursor-pointer flex relative">
                            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className=" text-Black  font-normal rounded-lg text-base px-1 py-2.5 text-center inline-flex items-center " type="button">Women <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>
                            <div id="dropdownHover" className={`w-32  absolute top-[52px] left-[-12px] bg-white divide-y divide-gray-100  dark:bg-gray-700`}>
                            </div>
                        </div>
                        <li><img src={SearchLogo} alt="" width={20} height={20} /></li>
                        <li><img src={Cart} alt="" width={20} height={20} /></li>
                        <li className='mr-3'><img src={Account} alt="" width={20} height={20} /></li>
                        <li><Link to="/signin">
                            <Button variant="contained" color="primary" type="submit" sx={{
                                borderRadius: '20px',
                                backgroundColor: '#121212',
                                transition: 'background-color 0.3s',
                            }}>LOG OUT
                            </Button></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar