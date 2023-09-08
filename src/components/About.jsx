import React from 'react'
import AboutItem from './Aboutitem'
import Selfie1Img from '../assets/selfie 1.jpg'

const About = () => {
    return (
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#031c32] '>Sobre</h1>
            <AboutItem img={Selfie1Img} />
            <p className='text-center font-medium'>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}

export default About