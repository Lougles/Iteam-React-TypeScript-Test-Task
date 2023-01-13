import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface GameState {
  games: [],
}

// Define the initial state using that type
const initialState = {
  games: [],
}

export const gameSlice = createSlice({
  name: 'game',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getGames: (state, action) => {
      return {...state, games: [...state.games, ...action.payload]}
    }
  },
})


export const {getGames} = gameSlice.actions;


export default gameSlice.reducer
