import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store';
import {fetchGames} from '../redux/operations/game-operations'

const Main: FC = () => {
  const {items, isLoading, error} = useAppSelector(state => state.games)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <>
      <ul>
        {
          items ? 
          items.map(item => (
            <li key={item.appId}>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </li>
          ))
          :
          <h1>There is no documents here</h1>
        }
      </ul>
    </>
  )
}

export default Main