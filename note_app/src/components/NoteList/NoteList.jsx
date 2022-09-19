import React from 'react'
import NoteItem from '../NoteItem/NoteItem'
import { useSelector } from 'react-redux'

const NoteList = () => {

  const {noteList} = useSelector(state => state.notes)

  return (
    <div className=' mt-12 w-11/12 flex flex-wrap justify-start items-center ' >
      {noteList.map((note) => {
        return (
          <NoteItem note={note} key={note.id}/>
      )}
      )}
    </div>
  )
}

export default NoteList