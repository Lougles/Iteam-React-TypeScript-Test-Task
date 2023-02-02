import { createSlice } from '@reduxjs/toolkit';


export enum SortPrice {
  HighLow = 'highlow',
  LowHigh = 'lowhigh'
}
export enum SwitchPriceDate {
  Price = 'price',
  Date = 'date'
}

type Istate = {
  search: string | undefined,
  sortByPrice: SortPrice,
  switchPriceDate: SwitchPriceDate
}

const initialState: Istate = {
  search: '',
  sortByPrice: SortPrice.LowHigh,
  switchPriceDate: SwitchPriceDate.Price
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    Search: (state, action) => {
       state.search = action.payload
      // return {...state, search: action.payload}
    },
    SortByPrice: (state, action) => {
      state.sortByPrice = action.payload;
    },
    SwitchPriceAndDate: (state, action) => {
      state.switchPriceDate = action.payload
    },
  },
})

export const {Search, SortByPrice, SwitchPriceAndDate} = dataSlice.actions

export default dataSlice.reducer