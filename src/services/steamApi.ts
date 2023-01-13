import {createAsyncThunk} from 'react-redux'
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// interface Game {
//   id: number
//   name: string
// }
// type GameResponse = Game[]

// export const steamApi = createApi({
//   reducerPath: 'steamApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://steam2.p.rapidapi.com/' }),
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query<GameResponse, string>({
//       query: () => `posts`,
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi




import { getGames} from "../redux/slice/gameSlice"
import { AppDispatch } from "../redux/store";


// export const getManyGames = () => {
//   return (dispatch: AppDispatch) => {
//     try {      
//       fetch('https://steam2.p.rapidapi.com/search/Ticket/page/1')
//       .then(response => response.json())
//       .then(json => dispatch(getGames(json)));
//     } catch (e:string | any) {
//       console.log(e.message);
//     }
//   }
// }
