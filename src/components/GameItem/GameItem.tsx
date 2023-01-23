import React, { FC } from 'react'
import { IGame } from '../../types/types'

interface GameItemProps {
  game: IGame
}

const GameItem: FC<GameItemProps> = ({game}) => {
  return (
    <div>
      <img src={game.imgUrl} />
      <h4>{game.title}</h4>
      <p>{game.released}</p>
      <p>{game.price}</p>
    </div>
  )
}

export default GameItem