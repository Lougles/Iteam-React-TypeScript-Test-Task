import React, { FC, useEffect } from 'react'
import { RootState, store, useAppDispatch, useAppSelector } from '../redux/store';

const Main: FC = () => {
  const {items, isLoading, error} = useAppSelector((state: RootState) => state.games)
  const dispatch = useAppDispatch();

  const handleFetchStudent = async() => {
    // await dispatch(fetchTasks())
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