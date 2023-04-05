import { createSlice } from '@reduxjs/toolkit'

const GRID_COLS = 10;
const GRID_ROWS = 24;
const PIECES = {
  I: '',
  J: '',
  L: '',
  O: '',
  S: '',
  T: '',
  Z: '',
};

export const gameSlice = createSlice({
  initialState: {
    grid: Array(GRID_ROWS).fill(0).map(() => Array(GRID_COLS).fill(0)),
    hold: null,
    level: 1,
    next: null,
    piece: null,
    score: 0,
  },

  name: 'game',

  reducers: {
    clearRows: (state, action) => {
      console.log('clearRows', state, action)
    },

    dropHard: (state) => {
      console.log('dropHard', state)
    },

    dropSoft: (state) => {
      console.log('dropSoft', state)
    },

    moveLeft: (state) => {
      console.log('moveLeft', state)
    },

    moveRight: (state) => {
      console.log('moveRight', state)
    },

    setLevel: (state) => {
      console.log('setLevel', state)
    },

    spinLeft: (state) => {
      console.log('spinLeft', state)
    },

    spinRight: (state) => {
      console.log('spinRight', state)
    },
  }
})

export const {
  clearRows,
  dropHard,
  dropSoft,
  moveLeft,
  moveRight,
  setLevel,
  spinLeft,
  spinRight,
} = gameSlice.actions

export default gameSlice.reducer
