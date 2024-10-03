import React from 'react'
import { useSelector } from 'react-redux'

const ShowHabit = () => {
  const { habits } = useSelector((state) => state.habit) // state.habit (slice name) instead of state.habits

  return (
    <ul>
      {habits.map((habit) => (
        <li key={habit.id}>
          <p>{habit.name}</p>
          <h1>{habit.frequency}</h1>
        </li>
      ))}
    </ul>
  )
}

export default ShowHabit
