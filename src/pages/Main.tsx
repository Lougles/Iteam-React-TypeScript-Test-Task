import React, { FC } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../redux/store';
import {getManyGames} from '../services/steamApi'

const Main: FC = () => {
  const {games} = useSelector((state: RootState) => state.games)
  const dispatch = useDispatch();

  const handleFetchStudent = () => {
    getManyGames()
  }

  return (
    <div>
      <button onClick={handleFetchStudent}>GET FETCH</button>
      {games.length ? 
      games.map(game => 
        <div key={game.id}>{game.name}</div>
        )
      :
      <h1>There is nothing</h1>
      }
    </div>
  )
}

export default Main