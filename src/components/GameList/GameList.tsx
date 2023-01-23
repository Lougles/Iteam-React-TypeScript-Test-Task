import React, { FC } from 'react'
import { IGame } from '../../types/types'
import GameItem from '../GameItem/GameItem'
import style from './GameList.module.scss'

interface gameListProps {
  games: IGame[]
}

const GameList: FC<gameListProps> = ({games}) => {
  return (
    <div className={style.List_Wrapper}>
      {games.map(item => 
        <GameItem key={item.appId}  game={item}/>
      )}
    </div>
  )
}

export default GameList