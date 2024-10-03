import { configureStore } from '@reduxjs/toolkit'
import habitReducer from '../features/counter/habitSlice'

export const store = configureStore({
  reducer: {
    habit: habitReducer,
  },
})

