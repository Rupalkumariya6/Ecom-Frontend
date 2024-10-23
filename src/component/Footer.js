import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-[#121212] mt-40 px-6 pt-28 md:px-12 lg:px-24">
                    <div className="flex flex-col lg:flex-row text-white pb-28">
                        <div className="footer lg:w-3/6 pr-6 mb-10 lg:mb-0">
                            <h1 className="pb-10 "> <img src="https://www.bonkerscorner.com/cdn/shop/files/Bonkers_Corner_Logo_White1_400x95_crop_center.png?v=1721047270" height="10px" width="250px" alt="" /></h1>
                        </div>

                        <div className='flex w-full max-sm:grid max-sm:grid-cols-1  max-lg:grid max-lg:grid-cols-2'>
                            <div className="footer lg:w-1/3 pl-0 lg:pl-10 mb-10 lg:mb-0">
                                <h1 className="pb-10 text-lg font-semibold">SHOP</h1>
                                <ul className="flex flex-col gap-2">
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">SpongeBob</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Tokidoki</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Disney</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Marvel</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">NEW IN</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Signature</li>
                                    </a>
                                </ul>
                            </div>
                            <div className="footer lg:w-1/3 pl-0 lg:pl-6 mb-10 lg:mb-0">
                                <h1 className="pb-10 text-lg font-semibold">TRENDING</h1>
                                <ul className="flex flex-col gap-2">
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">ACOSTA Collection</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Anime Collection</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Oversized T-shirt</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Oversized Shirt</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Bottoms for Women</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Bottoms for Men</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Sweatshirts & Hoodies</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Jacket</li>
                                    </a>
                                </ul>
                            </div>
                            <div className="footer lg:w-1/3 pl-0 lg:pl-6 mb-10 lg:mb-0">
                                <h1 className="pb-10 text-lg font-semibold">INFO</h1>
                                <ul className="flex flex-col gap-2">
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Sale T&C</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Terms & Conditions</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Stores</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Blogs</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">About</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">FAQs</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Contact</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Privacy Policy</li>
                                    </a>
                                    <a href="/">
                                        <li className="hover:text-[#2196f3]">Returns / Replace - T&C</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 px-6 md:px-12 lg:px-24 bg-[#121212] flex flex-col md:flex-row justify-between items-center">
                    <div className="berry mb-5 md:mb-0">
                        <h1 className="text-white">
                            © 2024 BonkersCorner
                        </h1>
                    </div>
                    <div className="icons">
                        <ul className="flex gap-8">
                            <li>
                                <svg
                                    height="25px"
                                    width="25px"
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-30lb6n"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="PublicIcon"
                                >
                                    <path
                                        fill="white"
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39"
                                    ></path>
                                </svg>
                            </li>
                            <li>
                                <svg
                                    height="25px"
                                    width="25px"
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-rpgeni"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="TwitterIcon"
                                >
                                    <path
                                        fill="white"
                                        d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23"
                                    ></path>
                                </svg>
                            </li>
                            <li>
                                <svg
                                    height="25px"
                                    width="25px"
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-uo2nvm"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="SportsBasketballIcon"
                                >
                                    <path
                                        fill="white"
                                        d="M17.09 11h4.86c-.16-1.61-.71-3.11-1.54-4.4-1.73.83-2.99 2.45-3.32 4.4M6.91 11c-.33-1.95-1.59-3.57-3.32-4.4-.83 1.29-1.38 2.79-1.54 4.4zm8.16 0c.32-2.59 1.88-4.79 4.06-6-1.6-1.63-3.74-2.71-6.13-2.95V11zm-6.14 0H11V2.05C8.61 2.29 6.46 3.37 4.87 5c2.18 1.21 3.74 3.41 4.06 6m6.14 2H13v8.95c2.39-.24 4.54-1.32 6.13-2.95-2.18-1.21-3.74-3.41-4.06-6M3.59 17.4c1.72-.83 2.99-2.46 3.32-4.4H2.05c.16 1.61.71 3.11 1.54 4.4"
                                    ></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer >

        </>
    )
}

export default Footer