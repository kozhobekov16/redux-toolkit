import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

export const productsSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(elem => elem.id !== action.payload)
        }
    }
})


export const {addToCart, removeProduct} = productsSlice.actions

export default productsSlice.reducer