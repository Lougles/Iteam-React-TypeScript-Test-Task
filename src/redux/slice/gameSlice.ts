import { createSlice, AnyAction, PayloadAction } from '@reduxjs/toolkit'
import {fetchGames} from '../operations/game-operations'
import { IGame } from '../../types/types';
import example from '../../shared/images/logo/example.png'


type Istate = {
  items: IGame[],
  isLoading: boolean,
  error: string | null
}

const initialState: Istate = {
  items: [
    {'appId': '1',
     'price': '8,19€',
     'title': 'Counter-Strike: Global Offensive',
     'released': '21 Aug, 2012',
     'imgUrl': example
    },
    {'appId': '2',
     'price': '8,19€',
     'title': 'Counter-Strike: Global Offensive',
     'released': '21 Aug, 2012',
     'imgUrl': example
    },
    {'appId': '3',
     'price': '8,19€',
     'title': 'Counter-Strike: Global Offensive',
     'released': '21 Aug, 2012',
     'imgUrl': example
    },
    {'appId': '4',
     'price': '8,19€',
     'title': 'Counter-Strike: Global Offensive',
     'released': '21 Aug, 2012',
     'imgUrl': example
    },
  ],
  isLoading: false,
  error: null,
}

export const gameSlice = createSlice({
  name: 'Games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchGames.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchGames.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    })
    .addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    })
  }
})

export default gameSlice.reducer

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
