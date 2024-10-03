import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addHabit } from '../features/counter/habitSlice'
const AddHabilt = () => {
 
const[name, setName] = useState('')
const[frequency, setFrequency] = useState('')
 const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
if(name.trim()){
  dispatch(addHabit({name,frequency}))
  setName('')
  setFrequency('')
}
  }
  return (

    <>
    <form action="" onSubmit={handleSubmit} >
      <input type="text" placeholder='Enter the habits ' value={name} onChange={(e)=> setName(e.target.value)} />
      <select name="Frequency" id=""
       onChange={(e)=> setFrequency(e.target.value )} >
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
      </select>
      <button type="submit" >Add</button>
    </form>
    </>
  )
}

export default AddHabilt