import React, { FC, useState } from 'react'
import { IGame } from '../../types/types'
import GameItem from '../GameItem/GameItem'
import CustomPagination from '../CustomPagination/CustomPagination'
import Pagination from '../Pagination/Pagination'
import style from './GameList.module.scss'

interface gameListProps {
  games: IGame[]
}

const GameList: FC<gameListProps> = ({games}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // const paginate = (number: number) => {
  //   setCurrentPage(number);
  // }

  return (
    <div>
      <div className={style.List_Wrapper}>
      { games.length ?
      games.map(item => 
        <GameItem key={item.appId}  game={item}/>
      )
      :
      <h1 className={style.NoGame_Header}>Input a search query to find games</h1>
      }
      </div>
      {
        games.length && <CustomPagination/>
      }
      {/* <Pagination /> */}
    </div>
  )
}

export default GameList