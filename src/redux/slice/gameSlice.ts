import { createSlice } from '@reduxjs/toolkit'
import {addIncome} from '../operations/game-operations'

// Define the initial state using that type

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, {payload}) {
  //     state.isLoading = false;
  //     state.error = null;
  //     console.log(payload)
  //     state.items = payload
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
  extraReducers: {

  },
})


// export const {fetchingInProgress, fetchingSuccess, fetchingError} = gameSlice.actions;


export default gameSlice.reducer
