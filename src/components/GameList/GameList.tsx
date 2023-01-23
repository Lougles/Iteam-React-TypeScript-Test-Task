import React, { FC } from 'react'
import { IGame } from '../../types/types'
import GameItem from '../GameItem/GameItem'

interface gameListProps {
  games: IGame[]
}

const GameList: FC<gameListProps> = ({games}) => {
  return (
    <div>
      {games.map(item => 
        <GameItem key={item.appId}  game={item}/>
      )}
    </div>
  )
}

export default GameList