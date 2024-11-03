import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { ImYoutube } from "react-icons/im";
import payment from "../../Assets/credit-cards.webp"
import { fadeUp } from '../Services/Service';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <>
        <div className="bg-primary text-white">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-3 py-5">
                    <motion.div 
                     variants={fadeUp(0.2)}
                     initial="hidden"
                     whileInView="show"

                    className="py-8 px-4">
                        <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left uppercase">
                            Playing
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor</p>
                        <div className="flex items-center gap-3 mt-6">
                        <FaLocationArrow />
                            <p>Abul Fazal, Delhi</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3 cursor-pointer">
                        <FaMobileAlt />
                            <p>+91 911 704 8402</p>
                        </div>
                         
                </motion.div>           
                    <div className="grid grid-cols-3 sm:grid-cols-3 col-span-2 md:pl-10 cursor-pointer">                   
                        <motion.div
                        variants={fadeUp(0.4)}
                        initial="hidden"
                        whileInView="show"

                        className="py-8 px-4">
                            <h1 className="mb-3 text-2xl font-bold text-justify sm:text-left">Quick Links Here</h1>
                            <h2>Home</h2>
                            <h2 className="mt-4">About</h2>
                            <h2 className="mt-4">Service</h2>
                            <h2 className="mt-4">Privacy Policy</h2>
                            </motion.div>

                            <motion.div 
                            variants={fadeUp(0.6)}
                            initial="hidden"
                            whileInView="show"

                            className="py-8 px-4">
                                <h1 className="mb-3 text-2xl font-bold text-justify sm:text-left">Details Here</h1>
                            <h2>Home</h2>
                                <h2 className="mt-4">About</h2>
                                <h2 className="mt-4">Service</h2>
                                <h2 className="mt-4">Privacy Policy</h2>
                            </motion.div>

                            <motion.div 
                            variants={fadeUp(0.8)}
                            initial="hidden"
                            whileInView="show"
                            className="py-8 px-4">
                            <h1 className="mb-3 text-2xl font-bold text-justify sm:text-left">Follow Us</h1>
                            {/* Social Media */}
                             <div className="flex items-center gap-3 mt-6">
                        
                                <RiInstagramFill className="text-3xl" />
                       
                                <FaFacebook className="text-3xl" />
                                              
                                <SiLinkedin className="text-3xl" />
                                               
                                <ImYoutube className="text-3xl" />
                        
                             </div> 
                            <div>
                                <h2 className="mt-4 mb-4 text-xl">Payment Methods</h2>
                                <img src={payment} alt='' className='' />
                            </div>
                        </motion.div>
                   </div> 
                </div>
            </div>
            
            <div className="text-center py-5 border-t-2 border-gray-300/50">
            @copyright 2024 All Rights Reserved || Develop By Md-Reyaz
         </div>
     </div>
     
    </>
  )
}

export default Footer