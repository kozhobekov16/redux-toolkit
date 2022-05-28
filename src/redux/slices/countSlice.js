import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [{
        text: 'Learn',
        id: Date.now()
    }],
}

export const countSlice = createSlice({
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


export const {addToCart, removeProduct} = countSlice.actions

export default countSlice.reducer