import { createSlice, nanoid}  from '@reduxjs/toolkit'

const initialState = {
  habits: [],
}
export const counterSlice = createSlice({
name:'habit',
initialState,
reducers:{
  addHabit:(state, action)=> {
const newHabit = {
  id:nanoid(),
name:action.payload.name,
frequency:action.payload.frequency,

}
 state.habits.push(newHabit)
  }
 
}
})

export const {addHabit} = counterSlice.actions
export default counterSlice.reducer