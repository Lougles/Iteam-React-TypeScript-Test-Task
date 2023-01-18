import React, { FC, useEffect } from 'react'
import { RootState, store, useAppDispatch, useAppSelector } from '../redux/store';
// import {fetchDataFromDB} from '../redux/operations/game-operations'

const Main: FC = () => {
  // const {items, isLoading, error } = useAppSelector((state: RootState) => state.games.State)
  // const dispatch = useAppDispatch();

  const handleFetchStudent = async() => {
    // const data = await dispatch(fetchDataFromDB())
    // console.log(data);
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