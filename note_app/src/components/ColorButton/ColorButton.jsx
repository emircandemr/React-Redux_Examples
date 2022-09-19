import React from 'react'

const ColorButton = () => {
  return (
    <div className='ml-2 flex flex-col justify-between items-center'>
        <button className='bg-red-200 w-12 h-12 rounded-full flex justify-center items-center '>
            <span> <i className="fa-solid fa-check"></i> </span>
        </button>
        <button className='bg-slate-300 w-12 h-12 rounded-full mt-1 '></button>
        <button className='bg-green-200 w-12 h-12 rounded-full mt-1 '></button>
        <button className='bg-blue-300 w-12 h-12 rounded-full mt-1 '></button>
        <button className='bg-stone-400 w-12 h-12 rounded-full mt-1 '></button>

    </div>
  )
}

export default ColorButton