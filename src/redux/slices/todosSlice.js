import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todo: [{
        text: 'Learn',
        id: Date.now()
    }]
}

const todosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo.push({
                text: action.payload,
                id: Date.now()
            })
        },
        removeTodo: (state, action) => {
            state.todo = state.todo.filter(item => item.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todosSlice.actions
export default todosSlice.reducer