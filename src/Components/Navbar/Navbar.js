import React from 'react'
import { Link } from 'react-router-dom';
import fanta_logo from "../../Assets/fanta_logo.png";

function Navbar() {
  return (
    <>
       <div className="fixed w-full top-0 left-0 z-20 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className='container py-3 sm:py-0'>
            <div className='flex justify-between items-center'>
                <div>
                    <Link to="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold ps-10">
                    <img src={fanta_logo} alt='logo' className='w-[80px] h-[60px] text-center' /> Fanta Shop
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    
                    <ul className='hidden sm:flex gap-4'>
                        <li>
                            <Link to="/" className="inline-block py-4 px-4 hover:text-primary">Home</Link>
                        </li>
                        <li>
                            <Link to="/About" className="inline-block py-4 px-4 hover:text-primary">About</Link>
                        </li>
                        <li>
                            <Link to="/Contact" className="inline-block py-4 px-4 hover:text-primary">Contact</Link>
                        </li>
                        <li>
                            <Link to="/Categories" className="inline-block py-4 px-4 hover:text-primary">Categories</Link>
                        </li>
                        <li>
                            <Link to="/Blog" className="inline-block py-4 px-4 hover:text-primary">Blog</Link>
                        </li>
                        <li>
                            <Link to="/Login" className="inline-block py-4 px-4 hover:text-primary"><button>Admin</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Navbar