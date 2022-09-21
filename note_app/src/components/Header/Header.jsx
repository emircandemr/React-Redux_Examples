import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeFilterFunc } from '../../store/NoteSlice/NoteSlice'

const Header = () => {

  const dispatch = useDispatch()
  const {activeFilter} = useSelector(state => state.notes)

  useEffect( () => {
    localStorage.setItem("activeFilter", activeFilter)
  }, [activeFilter])

  return (
    <div className='h-24 w-full flex px-9 h-min-24 justify-around shadow-lg items-center '>
        <h1 className='text-black  text-2xl' >Notes App</h1>
      <div className=' flex justify-between w-1/5'>
        <button className={`header__button ${activeFilter === "Active" ? "selected" : "" } `} onClick={(e) => {dispatch(activeFilterFunc(e.target.innerHTML))}} >Active</button>
        <button  className={`header__button ${activeFilter === "Completed" ? "selected" : "" } `} onClick={(e) => {dispatch(activeFilterFunc(e.target.innerHTML))}} >Completed</button>
        <button  className={`header__button ${activeFilter === "All" ? "selected" : "" } `} onClick={(e) => {dispatch(activeFilterFunc(e.target.innerHTML))}}>All</button>

      </div>
        <input className='w-2/6 border border-gray-300 bg-gray-100 outline-none px-2 py-1 rounded-xl shadow-md' placeholder='Search' />
    </div>
  )
}

export default Header