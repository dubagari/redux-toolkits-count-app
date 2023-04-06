
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        isLoggedIn: true
    },
    reducers: {
        TOOGLE_AUTH: (state) => {
            state.isLoggedIn = !state.isLoggedIn
        }
    }
})

export const { TOOGLE_AUTH } = authSlice.actions

export default authSlice.reducer