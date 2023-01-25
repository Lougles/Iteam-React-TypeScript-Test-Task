import React, { FC } from 'react'
import { IGame } from '../../types/types'
import GameItem from '../GameItem/GameItem'
import Pagination from '../Pagination/Pagination'
import style from './GameList.module.scss'

interface gameListProps {
  games: IGame[]
}

const GameList: FC<gameListProps> = ({games}) => {
  return (
    <div className={style.List_Wrapper}>
      { games.length ?
      games.map(item => 
        <GameItem key={item.appId}  game={item}/>
      )
      :
      <h1 className={style.NoGame_Header}>Input a search query to find games</h1>
    }
      {/* <Pagination /> */}
    </div>
  )
}

export default GameList