import React from 'react'
import pic1 from "../../Assets/blog1.jpg"
import pic2 from "../../Assets/blog2.jpg"
import pic3 from "../../Assets/blog3.jpg"
import pic4 from "../../Assets/blog4.jpg"
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion';
import { fadeUp } from '../Services/Service'

const BlogData = [
    {
        id: 1,
        icons: pic1,
        title: "Blog 1",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        delay: 0.4
    },
    {
        id: 2,
        icons: pic2,
        title: "Blog 2",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        delay: 0.6
    },
    {
        id: 3,
        icons: pic3,
        title: "Blog 3",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        delay: 0.8
    },
    {
        id: 4,
        icons: pic4,
        title: "Blog 4",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        delay: 1
    },
]

function Blog() {
  return (
    <>
    <section className='bg-gray-100 pb-14'>
        <div className='container py-14'>
            <motion.h1 
             variants={fadeUp(0.2)}
             initial="hidden"
             whileInView="show"
            className='text-3xl font-bold text-center font-poppings pb-10'>Our Blog</motion.h1>

        <div className='grid grid:cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 '>
            {
                BlogData.map((data)=>{
                    return(
                    <UpdateFollower
                    mouseOptions={{
                        backgroundColor: "black",
                        zIndex: 999,
                        followSpeed: 1.5,
                        text: "Read",
                        scale: 5,
                        textFontSize: "3px",
                    }} >
                    <motion.div id="blog"
                     variants={fadeUp(data.delay)}
                     initial="hidden"
                     whileInView="show"

                    className='flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg bg-white rounded-md'>
                        <img src={data.icons} alt='' />
                        <div className='text-center space-y-2'>
                            <h1 className='text-2xl font-bold'>{data.title}</h1>
                            <p className='text-center text-sm text-black/75'>{data.des}</p>
                        </div>
                    </motion.div>
                    </UpdateFollower>
                )})
            }
        </div>
        </div>
    </section>
    </>
  )
}

export default Blog