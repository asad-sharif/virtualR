import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection: React.FC = () => {
    return (
        <section className='container py-12'>
            <div className="content flex flex-col justify-center items-center gap-8">
                <h1 className='text-center text-3xl sm:text-5xl md:text-6xl '>VirtualR builds tools
                    <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>
                        {''} <br /> for developers
                    </span>
                </h1>
                <p className='text-center sm:w-3/4 mx-auto text-neutral-400 '>Empower your creativity  and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>

                <div className="buttons flex flex-col sm:flex-row gap-4 mt-4">
                    <button className='bg-gradient-to-r from-orange-500 to-orange-800 rounded px-10 sm:px-5 py-2'>Start for free</button>
                    <button className='border rounded px-10 sm:px-5 py-2'>Documentation</button>
                </div>

                <div className="media flex flex-col sm:flex-row justify-center items-center gap-8 mt-8">
                    <video autoPlay loop muted className='sm:w-1/2 rounded-lg border-orange-700 border-2 shadow-orange-700'>
                        <source src={video1} type='video/mp4' />
                    </video>
                    <video autoPlay loop muted className='sm:w-1/2 rounded-lg border-orange-700 border-2 shadow-orange-700'>
                        <source src={video2} type='video/mp4' />
                    </video>
                </div>
            </div>


        </section>
    )
}

export default HeroSection