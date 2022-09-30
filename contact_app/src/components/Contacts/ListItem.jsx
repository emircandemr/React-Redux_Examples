import React from 'react'

const ListItem = ({item}) => {
  return (
    <div className='w-full py-2 px-2 mt-3 bg-zinc-800 border border-gray-600 rounded-md outline-none text-gray-300 shadow-md'>
        {item.name}
    </div>
  )
}

export default ListItem