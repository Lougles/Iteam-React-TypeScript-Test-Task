import { RootState } from '../store';
import { createSlice, AnyAction, PayloadAction } from '@reduxjs/toolkit'
import {fetchGames} from '../operations/game-operations'
import { Game, Post } from '../operations/types';


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
    builder
    .addCase(fetchGames.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchGames.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    })
    .addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    })
  }
})

export default gameSlice.reducer

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
