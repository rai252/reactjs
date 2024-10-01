import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/Todo/todoSlice.JS' // Ensure correct path

export const store = configureStore({
    reducer: {
        todos: todoReducer, // Register the reducer
    },
})
