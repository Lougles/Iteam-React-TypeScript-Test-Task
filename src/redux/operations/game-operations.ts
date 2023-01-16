import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import {getData} from '../../services/api'
import {Game} from './types'

export const addIncome = createAsyncThunk <Game, string>(
  'transaction/add-income',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getData();
      return data;
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  },
);


// export const fetchPokemonByName = createAsyncThunk<Pokemon, string>(
//   'pokemon/fetchByName',
//   async (name, { rejectWithValue }) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     const data = await response.json()
//     if (response.status < 200 || response.status >= 300) {
//       return rejectWithValue(data)
//     }
//     return data
//   }
// )