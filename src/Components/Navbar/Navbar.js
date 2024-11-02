import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.png";

function Navbar() {
  return (
    <>
       <div className="fixed w-full top-0 left-0 z-20 shadow-md bg-white">
        <div className='container py-3 sm:py-0'>
            <div className='flex items-center justify-between'>
                {/* LOGO SECTION */}
                <div>
                    <Link to="#" className="flex items-center gap-4 text-2xl sm:text-3xl font-bold ps-10">
                    <img src={logo} alt='logo' className='w-[80px] h-[60px] text-center' /> Collection
                    </Link>
                </div>
                {/* MENU SECTION */}
                <div className="flex items-center gap-4">
                    
                    <ul className='hidden sm:flex gap-4'>
                        <li>
                            <Link to="/" className="inline-block py-4 px-4 hover:text-primary">Home</Link>
                        </li>
                        <li>
                            <Link to="/About" className="inline-block py-4 px-4 hover:text-primary">About</Link>
                        </li>                   
                        <li>
                            <Link to="/Categories" className="inline-block py-4 px-4 hover:text-primary">Categories</Link>
                        </li>
                        <li>
                            <Link to="/Blog" className="inline-block py-4 px-4 hover:text-primary">Blog</Link>
                        </li>
                        <li>
                            <Link to="/Contact" className="inline-block py-4 px-4 hover:text-primary">Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* ICON HEADPHONE SECTION */}
                <div>
                <Link to="/Login" className="inline-block py-4 px-4 hover:text-primary"><button>User</button></Link>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Navbar