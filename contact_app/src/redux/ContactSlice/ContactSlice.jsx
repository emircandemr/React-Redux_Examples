import {createSlice, createEntityAdapter} from "@reduxjs/toolkit"

export const ContactAdapter = createEntityAdapter();
const initialState = ContactAdapter.getInitialState(); // contactAdapter.getInitialState() returns an object with the following properties: ids, entities

export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: ContactAdapter.addOne, // addOne is a function that takes a contact object and adds it to the state
        addContacts : ContactAdapter.addMany // addMany is a function that takes an array of contact objects and adds them to the state
        
    }
})

export const {addContact} = contactSlice.actions;
export default contactSlice.reducer