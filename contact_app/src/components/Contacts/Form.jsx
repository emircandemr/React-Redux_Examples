import React, { useState } from 'react'

import {useDispatch} from 'react-redux'
import { addContact } from '../../redux/ContactSlice/ContactSlice'
import { nanoid } from '@reduxjs/toolkit'

const Form = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        if(name === "" || number === ""){
            return false
        }
        dispatch(addContact({id : nanoid() , name , phone_Number : number}))
        setName("")
        setNumber("")
    }

    return (
    <div className='w-1/2 '>
        <form onSubmit={handleSubmit} >
            <input className='w-full py-1 px-2 bg-zinc-900 border border-gray-500 rounded-lg outline-none text-white shadow-lg '
             type="text" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}} />
            <input className='w-full py-1 px-2 mt-3 bg-zinc-900 border border-gray-500 rounded-lg outline-none text-white shadow-lg '
             type="text" placeholder="Phone Number" value={number} onChange={(e) => {setNumber(e.target.value)}} />
             <button type='submit' className='w-full mt-3 py-1 px-3 bg-gray-500 rounded-xl hover:bg-gray-400 '  > Add </button>
        </form>
    </div>
  )
}

export default Form