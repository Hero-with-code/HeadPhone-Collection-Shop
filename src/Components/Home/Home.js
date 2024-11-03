import React, { useState } from 'react'
import {motion, AnimatePresence, easeInOut} from "framer-motion";
import fanta1 from "../../Assets/headphone1.png";
import fanta2 from "../../Assets/headphone2.png";
import fanta3 from "../../Assets/headphone3.png";
import { Link } from 'react-router-dom';
import { UpdateFollower } from 'react-mouse-follower';
import { FaWhatsapp } from 'react-icons/fa';


const SlideRight =(delay)=>{
  return{
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  }
}
const HeroData =[
  {
    id: 1,
    image: fanta1,
    title: "Headphones Wireless",
    subtitle: "Experience freedom with wireless headphones: immersive sound, comfortable fit, long battery life, and seamless connectivity for music and calls on the go.",
    old_price: "Modal Brown",
    new_price: "$100",
    modal: "Reyaz",
    bgColor: "#151616",
  },
  {
    id: 2,
    image: fanta2,
    title: "Headphones Wireless 2",
    subtitle: "Experience freedom with wireless headphones: immersive sound, comfortable fit, long battery life, and seamless connectivity for music and calls on the go.",
    old_price: "Lime Green",
    new_price: "$75",
    modal: "Reyaz",
    bgColor: "#151616",
  },
  {
    id: 3,
    image: fanta3,
    title: "Headphones Wireless 3",
    subtitle: "Experience freedom with wireless headphones: immersive sound, comfortable fit, long battery life, and seamless connectivity for music and calls on the go.",
    old_price: "Ocean Blue",
    new_price: "$50",
    modal: "Reyaz",
    bgColor: "#151616",
  },
]
function Home() {
  const [activeData, setactiveData] = useState(HeroData[0]);

  const handlerActiveData =(data)=>{
      setactiveData(data);
  }
  return (
    <>
    <motion.div initial={{backgroundColor: activeData.bgColor}}
                animate={{backgroundColor: activeData.bgColor}}
                transition={{duration: 0.8}}
    >
      
      <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[645px]'>
        {/* Data Info */}
        <div className='flex flex-col justify-center py-1 md:py-0 xl:max-w-[500px] text-white order-2 md:order-1'>
          <div className='space-y-5 text-center md:text-left'>
            <AnimatePresence mode="wait">
              <UpdateFollower mouseOptions={{
                backgroundColor: "white",
                zIndex: 10,
                followSpeed: 0.5,
                scale: 7,
                mixBlendMode: "difference",
              }}>
              <motion.h1 
              key={activeData.id}
              variants={SlideRight(0.5)}
              initial="hidden"
              animate="show"
              exit="exit"
            className='text-3xl lg:text-5xl xl:text-6xl font-bold font-handwriting text-shadow'>{activeData.title}</motion.h1>
              </UpdateFollower>
            </AnimatePresence>
          
            <AnimatePresence mode="wait">
              <UpdateFollower mouseOptions={{
                backgroundColor: "white",
                zIndex: 10,
                followSpeed: 0.5,
                scale: 3,
                mixBlendMode: "difference",
              }}>
            <motion.p 
              key={activeData.id}
              variants={SlideRight(0.5)}
              initial="hidden"
              animate="show"
              exit="exit"
             className='text-sm leading-loose text-white/80'>{activeData.subtitle}</motion.p>
             </UpdateFollower>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
            <UpdateFollower mouseOptions={{
                backgroundColor: activeData.bgColor,
                zIndex: 999,
                followSpeed: 0.5,
                rotate: -720,
                scale: 4,
                backgroundElement: (
                  <div>
                    <img src={activeData.image} alt='' />
                  </div>
                )
              }}> 
            <motion.button
            key={activeData.id}
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="show"
            exit="exit" 
            style={{color: activeData.bgColor}}
            className='px-4 py-2 bg-white inline-block font-normal rounded-sm'>Buy and Listen</motion.button>
            </UpdateFollower>
            </AnimatePresence>
            
          {/* LIST SEPRATOR */}
          <motion.div 
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           transition={{duration: 0.5, delay: 0.2, ease: "easeInOut"}}
          className='flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb:-10'>
            <div className='w-20 h-[1px] bg-white'></div>
            <p className='uppercase'>Top Head-phones for you</p>
            <div className='w-20 h-[1px] bg-white'></div>
          </motion.div>
          {/* IMAGE SWITCHER */}
          <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.2, ease: "easeInOut"}}
          className='grid grid-cols-3 gap-10'>
              {
                HeroData.map((data)=>{
                  return(
                    <UpdateFollower
                    mouseOptions={{
                        backgroundColor: "black",
                        zIndex: 999,
                        followSpeed: 1.5,
                        text: "Read",
                        scale: 4,
                        textFontSize: "3px",
                    }} >
                    <motion.div onClick={()=>handlerActiveData(data)} className='cursor-pointer space-y-3 hover:scale-105 transition-all duration-200'>
                      <div className='flex justify-center'>
                      <img src={data.image} alt='' className={`w-[80px] img-shadow ${activeData.image===data.image ? "opacity-100 scale-100" : "opacity-50"}`} />
                    </div>
                    <div className='text-center !mt-6 space-y-1'>
                      <p className='text-base font-verala opacity-80'>{data.old_price}</p>
                      <p className='text-xl font-bold'>{data.new_price}</p>
                    </div>
                  </motion.div>;
                  </UpdateFollower>
                )})
              }
          </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className='flex flex-col justify-end items-center relative order-1 md:order-2'>
        <AnimatePresence mode="wait">
        <UpdateFollower
          mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5,
          text: "View",
          scale: 3,
          textFontSize: "3px",
            }} >
          <motion.img 
          key={activeData.id}
          variants={SlideRight(0.5)}
          initial="hidden"
          animate="show"
          exit="exit"
          src={activeData.image} alt='' className='w-[150px] md:w-[300px] md:h-[400px] md:bottom-14 xl-w-[350] img-shadow relative z-10' />
          </UpdateFollower>
          </AnimatePresence>
          <AnimatePresence mode="wait">
          <motion.div
             key={activeData.id}
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             transition={{Duration: 0.4, delay: 0.2, ease: "easeInOut"}}
             exit={{
              opacity: 0,
              transition: {
                duration:0.4,
              },
             }}
             
          className='text-white/5 lg:text-[150px] md:text-[120px] sm:text-[150px] font-varela font-extrabold absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            {activeData.modal}
          </motion.div>
          </AnimatePresence>
        </div>
        {/* Whatsapp Icon */}
        <div className='text-[40px] text-white fixed bottom-5  right-[px] hover:rotate-[360deg] duration-500 z-[999] mix-blend-difference'>
          <Link to="https://wa.me/9117048402"><FaWhatsapp /></Link>
        </div>
      </div>
      </motion.div>
    </>
  )
}

export default Home