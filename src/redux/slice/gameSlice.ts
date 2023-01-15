import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type

export const gameSlice = createSlice({
  name: 'game',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, {payload}) {
      state.isLoading = false;
      state.error = null;
      state.items.push()
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})


export const {fetchingInProgress, fetchingSuccess, fetchingError} = gameSlice.actions;


export default gameSlice.reducer
