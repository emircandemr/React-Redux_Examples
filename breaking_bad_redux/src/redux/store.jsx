import { configureStore } from "@reduxjs/toolkit";

import characterSlice from "./Slice/CharacterSlice";

export const store  = configureStore({
    reducer : {
        characters : characterSlice
    }
})