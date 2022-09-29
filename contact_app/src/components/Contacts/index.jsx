import React from 'react'
import Form from './Form'

const Contacts = () => {
  return (
    <div className='w-1/2 h-4/5 flex flex-col justify-start py-10 items-center rounded-xl shadow-2xl bg-[#1a1b1c] border border-gray-500' >
        <h1 className='text-4xl text-gray-400 tracking-widest mb-10' >Contacts</h1>
        <Form/>
    </div>
  )
}

export default Contacts