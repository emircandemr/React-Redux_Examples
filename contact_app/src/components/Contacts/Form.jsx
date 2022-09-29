import React, { useState } from 'react'

import {useDispatch} from 'react-redux'
import { addContact } from '../../redux/ContactSlice/ContactSlice'
import { nanoid } from '@reduxjs/toolkit'

const Form = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addContact({id : nanoid() , name}))
        setName("")
        if(name === ""){
            return false
        }

    }

    return (
    <div className='w-1/2'>
        <form onSubmit={handleSubmit} >
            <input className='w-full py-1 px-2 bg-zinc-900 border border-gray-500 rounded-lg outline-none text-white shadow-lg '
             type="text" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}} />
        </form>
    </div>
  )
}

export default Form