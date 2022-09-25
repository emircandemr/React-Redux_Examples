import {createSlice} from "@reduxjs/toolkit";


export const itemSlice = createSlice({
    name : "items",
    initialState : {
        product : [],
        defaultMoney : 100000000000,
        money : 100000000000,
    },
    reducers : {
        getProducts (state,action) {
            state.product = action.payload
        },
        changeProduct (state,action) {
            const {id,count} = action.payload
            state.defaultMoney = state.money
            const product = state.product.find((item) => item.id === id)
            const quantity = count - Number(product.count)
            state.money = state.defaultMoney - (Number(product.productPrice) * Number(quantity))
            product.count = count
            console.log(Number(product.productPrice) * Number(count))
        },
    }
})

export default itemSlice.reducer
export const {getProducts,changeProduct} = itemSlice.actions