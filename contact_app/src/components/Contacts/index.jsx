import React from 'react'
import { useSelector } from 'react-redux'
import { contactSelectors } from '../../redux/ContactSlice/ContactSlice'
import Form from './Form'
import List from './List'

const Contacts = () => {

  const contactsLength = useSelector(contactSelectors.selectTotal)
  return (
    <>
    
    <h1 className='text-4xl text-gray-400 tracking-widest mb-10' >{`Contacts ${contactsLength ? contactsLength : ""}`}</h1>
    <Form/>
    <List/>
    
    </>
  )
}

export default Contacts