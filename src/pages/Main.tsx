import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store';
import {fetchGames} from '../redux/operations/game-operations'
import GameList from '../components/GameList/GameList';
import style from './Main.module.scss'

interface MainProps {
  search: string | undefined,
  belowAbove: string | undefined,
  priceOrDate: string,
}

const Main: FC<MainProps> = ({search, belowAbove, priceOrDate}) => {

  // console.log("search: ", search)
  // console.log("belowAbove: ", belowAbove)
  // console.log("priceOrDate: ", priceOrDate)
  const {items, isLoading, error} = useAppSelector(state => state.games)
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchGames());
  // }, [dispatch]);

  return (
    <div className={style.Infinity_Element}>
      <div className={style.Main_Wrapper}>
        <GameList games={items} />
      </div>
    </div>
  )
}

export default Main