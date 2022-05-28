import {configureStore} from "@reduxjs/toolkit";
import countSlice from "./slices/countSlice";
import todoSlice from './slices/todosSlice'
export const store = configureStore({
    reducer: {
        countSlice,
        todoSlice
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())