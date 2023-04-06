
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        ADD: (state) => {
            state.count += 1
        },

        ADD_NUMBER: (state, action) => {
            state.count += action.payload
        },

        SUBTRACT: (state) => {
            state.count -= 1
        },

        RESET: (state) => {
            state.count = 0
        }
    }
})

export const { ADD, ADD_NUMBER, RESET, SUBTRACT } = counterSlice.actions

export default counterSlice.reducer