import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import todoSlice from './slices/todosSlice'
export const store = configureStore({
    reducer: {
        productsSlice,
        todoSlice
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())