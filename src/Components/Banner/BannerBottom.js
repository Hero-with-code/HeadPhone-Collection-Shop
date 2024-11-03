import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'

function BannerBottom() {
  return (
    <>
      <section className='bg-gray-50 py-12 text-center font-varela'>
        <div className='container'>
            <div className='bg-primary text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl'>
                <UpdateFollower
                mouseOptions={{
                backgroundColor: "white/50",
                zIndex: 999,
                followSpeed: 0.5,
                mixBlendMode: "screen",
                scale: 7,
            }}> 
                <p className='font-bold text-4xl max-w-[700px] mx-auto leading-normal'>
                    Headphones With Good Quality And Affordable Price
                </p>
                </UpdateFollower>
            </div>
        </div>
      </section>  
    </>
  )
}

export default BannerBottom