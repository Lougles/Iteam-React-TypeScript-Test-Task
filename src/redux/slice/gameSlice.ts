import { createSlice, AnyAction, PayloadAction } from '@reduxjs/toolkit'
import {fetchGames, fetchGamesByQuery} from '../operations/game-operations'
import { IGame } from '../../types/types';
import example from '../../shared/images/logo/example.png'
import {mockData} from './mockData'

type Istate = {
  items: IGame[],
  isLoading: boolean,
  error: string | null
}

const initialState: Istate = {
  items: mockData,
  isLoading: false,
  error: null,
}

export const gameSlice = createSlice({
  name: 'games',
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
    .addCase(fetchGamesByQuery.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchGamesByQuery.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload
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
