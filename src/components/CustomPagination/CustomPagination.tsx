import React, { FC } from 'react'
import style from './CustomPagination.module.scss'
import leftArrow from '../../shared/images/svg/paginationleftarrow.svg'
import rightArrow from '../../shared/images/svg/paginationrightarrow.svg'


const CustomPagination: FC = () => {
  const pageNumbers = [1,2,3]
  return (
    <div>
      <ul className={style.CP_Wrapper}>
        <li className={style.CP_ArrowBtn}>
          <a>
            <img className={style.CP_ArrowImg} src={leftArrow}/>
          </a>
        </li>
      {pageNumbers.map(number => (
        <li key={number} className={style.CP_ArrowBtn}>
          <a>{number}</a>
        </li>
      ))}
        <li className={style.CP_ArrowBtn}>
          <a>
            <img className={style.CP_ArrowImg} src={rightArrow}/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default CustomPagination