import {configureStore} from "@reduxjs/toolkit";

import notesReducer from "./NoteSlice/NoteSlice"

const store = configureStore({
    reducer : {
        notes : notesReducer
    }
});

export default store