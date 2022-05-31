import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async function () {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = resp.json()
        return data
    }
)

export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async function (id, { dispatch }) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        })
        dispatch(deleteUserId(id))
    }
)

const initialState = {
    users: [],
    status: null,
    error: null,

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        deleteUserId: (state, action) => {
            state.users = state.users.filter(item => item.id !== action.payload)
        }
    },
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.status = 'get'
            state.users = action.payload
        },
        [fetchUser.rejected]: () => { }
    }
})

export const { deleteUserId } = userSlice.actions

export default userSlice.reducer