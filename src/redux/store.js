import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import todoSlice from './slices/todosSlice'
import userSlice from './slices/userSlice'
export const store = configureStore({
    reducer: {
        productsSlice,
        todoSlice,
        userSlice
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())