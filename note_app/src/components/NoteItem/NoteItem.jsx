import React from 'react'

const NoteItem = () => {
  return (
    <div className='bg-slate-300 w-1/5 h-72 rounded-xl shadow-xl relative m-5'>
        <div className='bg-white w-full absolute top-3 left-3 h-72 p-5 rounded-lg shadow-xl'>
            <div className='flex justify-between items-center' >
                <div>
                    <i className="fa-regular fa-clock"></i> 
                    <strong className='pl-2'>{new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()}  </strong>
                </div>
                <div>
                    <i className="fa-solid fa-rotate-left text-lg cursor-pointer "></i>
                </div>
            </div>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis porro distinctio saepe nam est pariatur reiciendis vel expedita nulla, voluptatum harum laborum, corporis omnis, obcaecati consequuntur non numquam quaerat provident?</p>
            <button className='absolute bottom-5 right-5 border-2 border-slate-300 py-1 px-2 rounded-xl hover:bg-slate-300 '>Complete</button>
        </div>
    </div>
  )
}

export default NoteItem