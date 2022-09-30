import React from 'react'
import { deleteContact } from '../../redux/ContactSlice/ContactSlice'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

const ListItem = ({item}) => {
    const dipatch = useDispatch()

    const handleDelete = (id) => {
      if(window.confirm("Are you sure you want to delete this contact?")){
        dipatch(deleteContact(id))
      }  
    }

  return (
    <div className='w-full py-3 px-2 mt-3 flex justify-between bg-zinc-800 border border-gray-600 rounded-md outline-none text-gray-300 shadow-md'>
        <div>
          {item.name}
        </div>
        <div>
          {item.phone_Number}
        </div>
        <div>
          <button onClick={ () => {handleDelete(item.id)}} className='w-6 h-6 mr-2 bg-red-800 rounded-full hover:bg-red-500' > X </button>
          <Link to={`/edit/${item.id}`} className='py-1 px-2 text-center bg-gray-500 rounded-md hover:bg-slate-600' > Edit </Link>

        </div>
    </div>
  )
}

export default ListItem