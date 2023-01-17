import { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type


type Istate = {
  items: any[],
  isLoading: boolean,
  error: string | null
}

const State: Istate = {
  items: [],
  isLoading: false,
  error: null,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    State
  },
  reducers: {
    fetchingInProgress(state) {
      state.State.isLoading = true;
    },
    fetchingSuccess(state, {payload}) {
      state.State.isLoading = false;
      state.State.error = null;
      console.log(payload)
      state.State.items.push(payload)
    },
    fetchingError(state, action) {
      state.State.isLoading = false;
      state.State.error = action.payload;
    },
  },
})


// export const {fetchingInProgress, fetchingSuccess, fetchingError} = gameSlice.actions;


export default gameSlice.reducer
