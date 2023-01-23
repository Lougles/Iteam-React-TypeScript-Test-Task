import React, { FC } from 'react'
import { IGame } from '../../types/types'
import style from './GameItem.module.scss'
interface GameItemProps {
  game: IGame
}

const GameItem: FC<GameItemProps> = ({game}) => {
  return (
    <div className={style.Item_Wrapper}>
      <img className={style.Item_Img} alt={game.imgUrl} src={game.imgUrl} />
      <div className={style.Info_Wrapper}>
        <h4 className={style.Item_Header}>{game.title}</h4>
        <p className={style.Item_Date}>{game.released}</p>
        <p>{game.price}</p>
      </div>
    </div>
  )
}

export default GameItem