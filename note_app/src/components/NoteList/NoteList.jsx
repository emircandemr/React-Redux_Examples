import React, { useEffect } from 'react'
import NoteItem from '../NoteItem/NoteItem'
import { useSelector } from 'react-redux'
import { changeActiveFilter } from '../../store/NoteSlice/NoteSlice'

const NoteList = () => {

  const {noteList} = useSelector(state => state.notes)
  const filteredList = useSelector(changeActiveFilter)

  useEffect( () => {
    localStorage.setItem("noteList", JSON.stringify(noteList))
  }, [noteList])

  return (
    <div className=' mt-12 w-11/12 flex flex-wrap justify-center items-center ' >
      {filteredList.map((note) => {
        return (
          <NoteItem note={note} key={note.id}/>
      )}
      )}
    </div>
  )
}

export default NoteList