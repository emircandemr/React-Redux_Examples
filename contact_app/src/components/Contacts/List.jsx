import React from 'react'
import { contactSelectors } from '../../redux/ContactSlice/ContactSlice'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

const List = () => {

    const contacts = useSelector(contactSelectors.selectAll)   // contactSelectors is an object with the following properties: selectAll, selectById, selectIds, selectTotal

    console.log(contacts)

    return (
        <div className='w-1/2 h-full  mt-5' >
            {contacts.map((contact) => (
                <ListItem item={contact} key={contact.id} />
            ))}
           
        </div>
    )
}

export default List