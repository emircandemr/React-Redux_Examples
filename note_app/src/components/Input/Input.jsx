import React from 'react'

const Input = () => {
  return (
    <div className='w-1/5 h-72 rounded-xl '>
        <textarea className='w-full h-full bg-slate-300 rounded-md shadow-xl p-8 focus:outline-none ' placeholder='Create new note...'></textarea>
    </div>
    )
}

export default Input