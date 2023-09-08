import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'


const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left-bottom scale-x-[-1]' src="https://images.unsplash.com/photo-1679572626185-1377f7579bbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-[#808080]/40'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-white/60'>Oi! Eu sou o Junior</h1>

                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-white/60'>um

                        <TypeAnimation className=' p-x-1 text-[#031c32] font-semibold bg-white/20'
                            sequence={[
                                'Web',
                                2000,
                                'Game',
                                2000,

                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{
                                fontSize: '1em', paddingLeft: '5px',
                            }}
                        />
                        Developer &
                    </h2>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-white/60'>Intusiasta Tech</h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter className='cursor-pointer hover:scale-110 ease-in duration-200 hover:text-gray-300 text-[#031c32]' size={20} />
                        <FaFacebookF className='cursor-pointer hover:scale-110 ease-in duration-200 hover:text-gray-300 text-[#031c32]' size={20} />
                        <FaInstagram className='cursor-pointer hover:scale-110 ease-in duration-200 hover:text-gray-300 text-[#031c32]' size={20} />
                        <FaLinkedinIn className='cursor-pointer hover:scale-110 ease-in duration-200 hover:text-gray-300 text-[#031c32]' size={20} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main