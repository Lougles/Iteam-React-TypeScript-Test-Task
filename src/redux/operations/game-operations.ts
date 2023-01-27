import { createAsyncThunk } from '@reduxjs/toolkit';
import {IGame, IPost} from '../../types/types'

export const fetchGames = createAsyncThunk<IGame[], void, {rejectValue: string}>(
  'games/fetchGames',
  async (_, {rejectWithValue}) => {

      const response = await fetch('https://steam2.p.rapidapi.com/search/Counter/page/1', 
        {
          headers: {
            'X-RapidAPI-Key': '3c8777c356mshc593cd3afda5fc9p142607jsnf6011a527231',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
          }
        }
      );

      if(!response.ok){
        rejectWithValue('Error')
      }
      return (await response.json()) as IPost[]
  },
);

export const fetchGamesByQuery = createAsyncThunk<IGame[], string | undefined, {rejectValue: string}>(
  'games/fetchGamesByQuery',
  async (query, {rejectWithValue}) => {

      const response = await fetch(`https://steam2.p.rapidapi.com/search/${query}`, 
        {
          headers: {
            'X-RapidAPI-Key': '3c8777c356mshc593cd3afda5fc9p142607jsnf6011a527231',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
          }
        }
      );

      if(!response.ok){
        rejectWithValue('Error')
      }
      return (await response.json()) as IPost[]
  },
);