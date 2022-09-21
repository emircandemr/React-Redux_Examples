import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNotes } from '../../store/NoteSlice/NoteSlice'
const Input = () => {

  const [text, setText] = useState("")
  const dispatch = useDispatch()
  
  const {colors} = useSelector(state => state.colors)
  const getColors = colors.filter((color) => color.isActive === true )
  const selectedColor = getColors.length>0 ? getColors[0].color : "bg-gray-200"

  const newNotes = () => {

    const note ={
      id : new Date().getTime(),
      text,
      completed : false,
      selectedColor
    }
    dispatch(addNotes(note))
    setText("")
  }



  return (
    <div className='w-1/5 h-72 rounded-xl '>
        <textarea onKeyPress={(e) => e.key === "Enter" ? newNotes() : null}  value={text}
        className={`${selectedColor} w-full h-full rounded-md shadow-xl p-8 focus:outline-none placeholder:text-black  `} placeholder='Create new note...' onChange={(e) => {setText(e.target.value)}} ></textarea>
    </div>
    )
}

export default Input