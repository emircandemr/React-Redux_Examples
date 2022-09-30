import React, { useEffect, useState } from 'react'
import { useParams , Navigate } from 'react-router-dom'
import { contactSelectors } from '../../redux/ContactSlice/ContactSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateContact } from '../../redux/ContactSlice/ContactSlice'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
    
  const {id} = useParams();
    const contact = useSelector(state => contactSelectors.selectById(state,id))
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
      e.preventDefault()
      
      dispatch(updateContact({id : contact.id , changes : {name , phone_Number : number}}))

      navigate('/')
    }

    const [name, setName] = useState(contact.name)
    const [number, setNumber] = useState(contact.phone_Number)


    return (
        <div>
         <h1 className='text-4xl text-gray-400 tracking-widest mb-10 text-center' >Edit</h1>
          <form onSubmit={handleSubmit} >
            <input className='w-full py-1 px-2 bg-zinc-900 border border-gray-500 rounded-lg outline-none text-white shadow-lg '
             type="text" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}} />
            <input className='w-full py-1 px-2 mt-3 bg-zinc-900 border border-gray-500 rounded-lg outline-none text-white shadow-lg '
             type="text" placeholder="Phone Number" value={number} onChange={(e) => {setNumber(e.target.value)}} />
             <button type='submit' className='w-full mt-3 py-1 px-3 bg-gray-500 rounded-xl hover:bg-gray-400 '  > Update </button>
        </form>
        </div>
        )
}

export default Edit