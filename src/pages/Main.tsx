import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store';
import {fetchGames} from '../redux/operations/game-operations'

const Main: FC = () => {
  const {items, isLoading, error} = useAppSelector(state => state.games)
  const dispatch = useAppDispatch();

  const handleFetchStudent = async() => {
    console.log(items);
    // dispatch(fetchGames())
    console.log('QWERTY: ', items)
  }
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div>
      <button onClick={handleFetchStudent}>GET FETCH</button>
    </div>
  )
}

export default Main