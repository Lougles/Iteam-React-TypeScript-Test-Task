import React, { FC } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';
import { fetchTasks } from '../services/steamApi';

const Main: FC = () => {
  const games = useAppSelector(state => state.games.items)
  const dispatch = useAppDispatch();

  const handleFetchStudent = () => {
    dispatch(fetchTasks())
    console.log(games);
  }

  return (
    <div>
      <button onClick={handleFetchStudent}>GET FETCH</button>
    </div>
  )
}

export default Main