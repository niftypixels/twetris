import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {
  clearRows,
  dropHard,
  dropSoft,
  holdPiece,
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

  const onKeyDown = (event) => {
    const { code } = event;

    switch (code) {
      case 'ArrowDown':
      case 'KeyS':
        dispatch(dropSoft());
        break;
      case 'ArrowLeft':
      case 'KeyA':
        dispatch(moveLeft());
        break;
      case 'ArrowRight':
      case 'KeyD':
        dispatch(moveRight());
        break;
      case 'ArrowUp':
      case 'KeyW':
      case 'Enter':
      case 'Space':
        dispatch(dropHard());
        break;
      case 'BracketLeft':
      case 'KeyZ':
        dispatch(spinLeft());
        break;
      case 'BracketRight':
      case 'KeyX':
        dispatch(spinRight());
        break;
      case 'KeyC':
      case 'Backslash':
        dispatch(holdPiece());
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="App">
      <h1>Level: {level}</h1>
      <GridTable />
    </div>
  )
}

export default App
