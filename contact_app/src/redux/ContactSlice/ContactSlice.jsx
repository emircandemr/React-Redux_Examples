import {createSlice, createEntityAdapter} from "@reduxjs/toolkit"

export const ContactAdapter = createEntityAdapter();
const initialState = ContactAdapter.getInitialState(); // contactAdapter.getInitialState() returns an object with the following properties: ids, entities

export const contactSelectors = ContactAdapter.getSelectors(state => state.contacts) 

export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: ContactAdapter.addOne, // addOne is a function that takes a contact object and adds it to the state
        addContacts : ContactAdapter.addMany, // addMany is a function that takes an array of contact objects and adds them to the state
        deleteContact : ContactAdapter.removeOne, // removeOne is a function that takes a contact object and removes it from the state
        updateContact : ContactAdapter.updateOne, // updateOne is a function that takes a contact object and updates it in the state
        
    }
})

export const {addContact,deleteContact,updateContact} = contactSlice.actions;
export default contactSlice.reducer