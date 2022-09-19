import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: "colors",
    initialState: {
        colors : [
            {
                id:1,
                color : "bg-red-200",
                isActive : false
            },
            {
                id:2,
                color : "bg-slate-300",
                isActive : false

            },
            {
                id:3,
                color : "bg-green-200",
                isActive : false
            },
            {
                id:4,
                color : "bg-blue-300",
                isActive : false
            },
            {
                id:5,
                color : "bg-stone-400",
                isActive : false
            },
        ]
    },
    reducers:{
        selectColor (state,action) {

            const selectedColor = state.colors.find(color => color.id === action.payload)
            selectedColor.isActive = !selectedColor.isActive
            state.colors.filter( (color) => color.id !== action.payload).map( (color) => color.isActive = false )
        }}
    
    })

export const {selectColor} = colorSlice.actions
export default colorSlice.reducer