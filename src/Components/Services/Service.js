import React from 'react'
import icon1 from "../../Assets/obj1.png"
import icon2 from "../../Assets/obj2.png"
import icon3 from "../../Assets/obj3.png"
import { UpdateFollower } from 'react-mouse-follower'

const ServiceData = [
    {
        id: 1,
        icons: icon1,
        title: "Security",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        delay: 0.5
    },
    {
        id: 2,
        icons: icon2,
        title: "Gurantee",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        delay: 0.5
    },
    {
        id: 3,
        icons: icon3,
        title: "Affordability",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        delay: 0.5
    },
    {
        id: 4,
        icons: icon1,
        title: "Security",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        delay: 0.5
    },
]

function Service() {
  return (
    <>
    <section className='bg-gray-100 font-verala pb-14'>
        <div className='container py-14'>
            <h1 className='text-3xl font-bold text-center pb-10'>Our Services</h1>
        </div>
        <div className='grid grid:cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 '>
            {
                ServiceData.map((data)=>(
                    <UpdateFollower
                    mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 999,
                        followSpeed: 0.5,
                        scale: 5,
                        rotate: 720,
                        mixBlendMode: "darken",
                        backgroundElement: (
                            <div>
                                <img src={data.icons} alt='' />
                            </div>
                        ),
                    }}
                    >
                    <div className='flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg bg-white rounded'>
                        <img src={data.icons} alt='' className='w-[100px] mb-4' />
                        <div className='text-center space-y-2'>
                            <h1 className='text-2xl font-bold'>{data.title}</h1>
                            <p className='text-center text-sm text-black/75'>{data.des}</p>
                        </div>
                    </div>
                    </UpdateFollower>
                ))
            };
        </div>
    </section>
    </>
  )
}

export default Service