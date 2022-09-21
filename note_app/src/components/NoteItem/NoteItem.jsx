import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {completedNote,deleteNote} from '../../store/NoteSlice/NoteSlice'

const NoteItem = ({note}) => {

    const dispatch = useDispatch()

    const complete = (id,isComplete) => {
        dispatch(completedNote({ id, isComplete}))
    }
    const destroy = (id) => {
        dispatch(deleteNote(id))
        
    }

    return (
    <div className={`${note.selectedColor} w-1/5 h-72 rounded-xl shadow-xl relative m-5`}>
        <div className={`${note.completed ? 'bg-gray-200' : 'bg-white'} w-full absolute top-3 left-3 h-72 p-5 rounded-lg shadow-xl`}>
            <div className='flex justify-between items-center' >
                <div>
                    <i className="fa-regular fa-clock"></i> 
                    <strong className='pl-2'>{new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()}  </strong>
                </div>
                <div>
                    <i className="fa-solid fa-rotate-left text-lg cursor-pointer " onClick={() => {complete(note.id, !note.completed)}}></i>
                </div>
            </div>
            <div className={` w-full h-full`}>
                <i className={`${note.completed ? 'flex' : 'hidden'} w-full h-full justify-center items-center text-5xl fa-solid fa-check`}> </i>
                <p className={`${note.completed ? 'hidden' : 'block'} py-2`}>{note.text}</p>

            </div>
            <button className={`${note.completed ? 'hidden' : 'block'} absolute bottom-5 right-5 border border-black py-1 px-2 rounded-xl hover:bg-slate-300`} onClick={() => complete(note.id, !note.completed)}>Complete</button>
            <button className={`${note.completed ? 'flex' : 'hidden'} absolute bottom-5 right-5 border-2 border-red-800 py-1 px-2 rounded-xl hover:bg-red-900 hover:text-white`} onClick={() => destroy(note.id)}>Delete</button>

        </div>
    </div>
  )
}

export default NoteItem