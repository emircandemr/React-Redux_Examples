import {configureStore} from "@reduxjs/toolkit";

import notesReducer from "./NoteSlice/NoteSlice"
import colorReducer from "./ButtonSlice/ButtonSlice"

const store = configureStore({
    reducer : {
        notes : notesReducer,
        colors : colorReducer
    }
});

export default store