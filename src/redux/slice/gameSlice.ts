import { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit'
import {fetchGames} from '../operations/game-operations'
import { Game } from '../operations/types';


type Istate = {
  items: Game[],
  isLoading: boolean,
  error: string | null
}

const initialState: Istate = {
  items: [],
  isLoading: false,
  error: null,
}

export const gameSlice = createSlice({
  name: 'Games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    })
  }
})

export default gameSlice.reducer
