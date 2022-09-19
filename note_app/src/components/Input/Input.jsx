import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNotes } from '../../store/NoteSlice/NoteSlice'
const Input = () => {

  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const newNotes = () => {

    const note ={
      id : new Date().getTime(),
      text,
      completed : false
    }

    dispatch(addNotes(note))

    setText("")

  }

  return (
    <div className='w-1/5 h-72 rounded-xl '>
        <textarea onKeyPress={(e) => e.key === "Enter" ? newNotes() : null}  value={text}
        className='w-full h-full bg-slate-300 rounded-md shadow-xl p-8 focus:outline-none ' placeholder='Create new note...' onChange={(e) => {setText(e.target.value)}} ></textarea>
    </div>
    )
}

export default Input