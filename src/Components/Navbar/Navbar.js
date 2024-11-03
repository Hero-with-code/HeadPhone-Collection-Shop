import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.png";
import { MdMenu } from 'react-icons/md';
import { SlEarphones } from 'react-icons/sl';

function Navbar() {
  return (
    <>
       <div className="bg-brandDark text-white py-3 font-varela">
        <nav className='container flex justify-between items-center'>
                {/* LOGO SECTION */}
                <div className='flex items-center gap-4'>
                    <Link to="#" className="text-xl font-bold uppercase">
                    <img src={logo} alt='logo' className='w-[80px] h-[60px] text-center' />
                    </Link>
                    <Link to=""><span className='font-extralight text-white text-3xl text-bold'>Collection</span></Link>
                </div>
                {/* MENU SECTION */}
                <div className="hidden md:block">
                    
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link to="/" className="inline-block py-2 px-3 hover:text-primary uppercase cursor-pointer">Home</Link>
                        </li>
                        <li>
                            <Link to="/About" className="inline-block py-2 px-3 hover:text-primary uppercase">About</Link>
                        </li>                   
                        <li>
                            <Link to="/Categories" className="inline-block py-2 px-3 hover:text-primary uppercase ">Categories</Link>
                        </li>
                        <li>
                            <Link to="/Blog" className="inline-block py-2 px-3 hover:text-primary uppercase ">Blog</Link>
                        </li>
                        <li>
                            <Link to="/Contact" className="inline-block py-2 px-3 hover:text-primary uppercase ">Contact</Link>
                        </li>
                        <li>
                        <Link to="/Login" className="inline-block py-2 px-3 hover:text-primary cursor-pointer"><button className='text-xl ps-14'><SlEarphones /></button></Link>
                        </li>
                    </ul>
                </div>
                {/* ICON HEADPHONE SECTION */}
                <div className='md:hidden'>
                    <MdMenu className='text-3xl'/>
                </div>
        </nav>
    </div> 
    </>
  )
}

export default Navbar