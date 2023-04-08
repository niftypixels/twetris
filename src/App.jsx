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
import GridTable from './components/GridTable'

function App() {
  const dispatch = useDispatch()
  const { level } = useSelector((state) => state.game)

  return (
    <div className="App">
      <h1>Level: {level}</h1>
      <GridTable />
    </div>
  )
}

export default App
