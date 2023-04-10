import { createSlice } from '@reduxjs/toolkit'

const GRID_COLS = 10;
const GRID_ROWS = 24;
const PIECES = {
  I: 'i',
  J: 'j',
  L: 'l',
  O: 'o',
  S: 's',
  T: 't',
  Z: 'z',
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

    holdPiece: (state) => {
      console.log('holdPiece', state)
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

    spawnPiece: (state) => {
      console.log('spawnPiece', state)
      const keys = Object.keys(PIECES)
      const piece = PIECES[keys[keys.length * Math.random() << 0]]
      console.log(piece)
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
  holdPiece,
  moveLeft,
  moveRight,
  setLevel,
  spawnPiece,
  spinLeft,
  spinRight,
} = gameSlice.actions

export default gameSlice.reducer
