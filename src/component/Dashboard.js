import React from 'react'
import { Link } from 'react-router-dom'
import mensbasic from '../mensbasic.webp'
import womensbasic from '../womensbasic.webp'
import womensOST from '../womensOST.webp'
import mensbottom from '../mensbottom.webp'
import maintimeline from '../maintimeline.webp'
import Navbar from './Navbar'
import Footer from './Footer'

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <section>
                <div className="main-timeline w-auto">
                    <img className="object-cover w-full" src={maintimeline} alt="" />
                </div>
                <div className="First-cont my-8">
                    <h1 className='text-[35px] my-5 flex items-center justify-center  '>New Arrivals</h1>
                    <div className="h-[500px] mx-[20px] flex border-sky-100">
                        <div className="m-[10px] flex-1"><Link to="/mensbasic"><img src={mensbasic} alt="" className="mensbasic" /></Link></div>
                        <div className="m-[10px] flex-1"><Link to="/womensbasic"><img src={womensbasic} alt="" className="womensbasic" /></Link></div>
                        <div className="m-[10px] flex-1"><Link to="/mensbottom"><img src={mensbottom} alt="" className="mensbottom" /></Link></div>
                        <div className="m-[10px] flex-1"><Link to="/womensOST"><img src={womensOST} alt="" className="womensOST" /></Link></div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Dashboard