import React from 'react'

const Header = () => {
  return (
    <div className='h-24 w-full flex px-9 h-min-24 justify-center items-center '>
        <h1 className='text-black text-2xl' >Notes App</h1>
      <div className='flex justify-between w-1/5'>
      </div>
        <input className='w-2/6 px-2 py-1 rounded-xl shadow-md' placeholder='Search' />
    </div>
  )
}

export default Header