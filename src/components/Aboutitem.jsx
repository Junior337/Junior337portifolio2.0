import React from 'react'

const Aboutitem = ({ img }) => {
    return (

        <div className='relative flex items-center justify-center h-auto w-52 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
            <img src={img} alt="/" className='rounded-xl' />
        </div>


    )
}

export default Aboutitem