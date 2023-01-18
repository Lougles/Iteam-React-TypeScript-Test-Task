import { createAsyncThunk } from '@reduxjs/toolkit';
import {getData} from '../../services/api'
import {Game} from './types'

export const fetchGames = createAsyncThunk<Game[], void, {rejectValue: string}>(
  'games/fetchGames',
  async (_, {rejectWithValue}) => {

      const response = await fetch('https://steam2.p.rapidapi.com/search/Counter/page/1');

      if(!response.ok){
        rejectWithValue('Error')
      }
      return (await response.json()) as Game[]
  },
);
