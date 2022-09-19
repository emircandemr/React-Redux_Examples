import {createSlice} from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState : {
        noteList : []
    },
    reducers : {
        addNotes(state, action) {
            return {
                ...state,
                noteList : [...state.noteList, action.payload]
            }
        },
        completedNote (state, action) {
            return {
                ...state,
                noteList : state.noteList.map(note => {
                    if(note.id === action.payload.id) {
                        return {
                            ...note,
                            completed : action.payload.isComplete
                        }
                    }
                    return note
                })
            }
        },
        deleteNote (state, action) {
            return {
                ...state,
                noteList : state.noteList.filter(note => note.id !== action.payload)
            }
        },

    }
})

export const {addNotes,completedNote,deleteNote} = notesSlice.actions 
export default notesSlice.reducer
