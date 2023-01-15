import React, { FC, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';
import { fetchTasks } from '../services/steamApi';

const Main: FC = () => {
  const {items, isLoading, error} = useSelector((state: RootState) => state.games)
  // const games = useAppSelector(state => state.games.items)
  const dispatch = useAppDispatch();

  const handleFetchStudent = () => {
    dispatch(fetchTasks())
    console.log(items);
  }
  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <div>
      <button onClick={handleFetchStudent}>GET FETCH</button>
    </div>
  )
}

export default Main