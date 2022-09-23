import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const char_limit = 12

export const fetchCharacters = createAsyncThunk("characters/getCharacters" , async(page) => {
    const response = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}characters?limit=${char_limit}&offset=${page*char_limit}`);
    return response.data;
} )

export const characterSlice = createSlice({
    name: "character",
    initialState: {
        personName : [],
        status : "idle",
        page : 0 ,
        hasNextPage : true , 
    },
    reducers: {},
    extraReducers: {
        [fetchCharacters.pending] : (state,action) => {
            state.status = "loading";
        },
        [fetchCharacters.fulfilled] : (state, action) => {
           state.personName = [...state.personName , ...action.payload]
           state.status = "succeeded";
           state.page = state.page +1 ;
           
           if(action.payload.length < char_limit){
                state.hasNextPage = false;
           }
        },
        [fetchCharacters.rejected] : (state,action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
     }
})

export default characterSlice.reducer;