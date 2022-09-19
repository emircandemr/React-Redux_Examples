import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {selectColor} from "../../store/ButtonSlice/ButtonSlice"

const ColorButton = () => {

  const {colors} = useSelector(state => state.colors)
  const dispatch = useDispatch()

  const selectedColor = (id) => {
    dispatch(selectColor(id))
  }
  
  return (
    <div className='ml-2 mb-2 flex flex-col justify-between items-center'>
      {colors.map((color) => {
        return (
          <button onClick={() => selectedColor(color.id)} key={color.id}
             className={`${color.color} w-12 h-12 mt-2 rounded-full flex justify-center items-center`}>
            <span> <i className={`${color.isActive ? 'block' : 'hidden' } fa-solid fa-check`}></i> </span>
          </button>
        )
      })}
    </div>
  )
}

export default ColorButton