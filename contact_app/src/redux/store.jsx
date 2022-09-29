
import {configureStore} from "@reduxjs/toolkit";
import ContactSlice from "./ContactSlice/ContactSlice";

const store = configureStore( {
 
        reducer : {
            contacts: ContactSlice
        }
})

export default store