import { useState } from 'react'
import AddHabilt from './components/AddHabilt'
import ShowHabit from './components/ShowHabit'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>good to see you</h1>
     <AddHabilt />
     <ShowHabit />
    </>
  )
}

export default App
