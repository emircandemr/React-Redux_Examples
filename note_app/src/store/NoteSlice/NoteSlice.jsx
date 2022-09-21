import {createSlice} from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState : {
        noteList : JSON.parse(localStorage.getItem("noteList")) || [],
        activeFilter : localStorage.getItem("activeFilter") || "All",
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
        activeFilterFunc (state, action) {
            state.activeFilter = action.payload
        }

    }
});

export const changeActiveFilter = (state) => {
    return state.notes.activeFilter === "Active" ? state.notes.noteList.filter(note => note.completed === false) :  state.notes.activeFilter === "Completed" ? state.notes.noteList.filter(note => note.completed === true) : state.notes.noteList
}

export const {addNotes,completedNote,deleteNote,activeFilterFunc} = notesSlice.actions 
export default notesSlice.reducer
