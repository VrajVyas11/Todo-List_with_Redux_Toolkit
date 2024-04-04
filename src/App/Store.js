import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Features/todo/TodoSlice.js'
export const store = configureStore({
    reducer: todoReducer
})