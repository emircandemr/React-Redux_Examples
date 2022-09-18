import React from 'react'
import NoteItem from '../NoteItem/NoteItem'

const NoteList = () => {
  return (
    <div className=' mt-12 w-11/12 flex flex-wrap justify-center items-center ' >
        <NoteItem/>
        <NoteItem/>
        <NoteItem/>
        <NoteItem/>
        <NoteItem/>

    </div>
  )
}

export default NoteList