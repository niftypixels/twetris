import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {
  clearRows,
  dropHard,
  dropSoft,
  moveLeft,
  moveRight,
  setLevel,
  spinLeft,
  spinRight,
} from './store/slices/gameSlice'

function App() {
  const game = useSelector((state) => state.game)
  const {
    grid,
    level,
  } = game;
  const dispatch = useDispatch()

  console.table(grid)

  return (
    <div className="App">
      <h1>Level: {level}</h1>
      <table>

      </table>
    </div>
  )
}

export default App
