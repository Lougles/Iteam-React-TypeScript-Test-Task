import { createSlice } from '@reduxjs/toolkit';



type Istate = {
  search: string | undefined,
}

const initialState: Istate = {
  search: '',
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    Search: (state, action) => {
      return state = action.payload
      // return {...state, search: action.payload}
    }
  },
})

export const {Search} = dataSlice.actions

export default dataSlice.reducer