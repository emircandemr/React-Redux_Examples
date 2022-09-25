import {configureStore} from "@reduxjs/toolkit";

import itemSlice from "./ItemSlice/ItemSlice"

const store = configureStore({
    reducer : {
        items : itemSlice
    }
})

export default store    