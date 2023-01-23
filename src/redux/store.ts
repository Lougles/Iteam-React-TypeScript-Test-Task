import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './slice/gameSlice'
import dataSlice from './slice/dataSlice'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'


export const store = configureStore({
  reducer: {
    games: gameSlice,
    data: dataSlice
  },

})

export type RootState = ReturnType<typeof store.getState >
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector