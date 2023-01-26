import React, { FC } from 'react'
import style from './CustomPagination.module.scss'
import leftArrow from '../../shared/images/svg/paginationleftarrow.svg'
import rightArrow from '../../shared/images/svg/paginationrightarrow.svg'

type PropsPagination = {}

const CustomPagination: FC<PropsPagination> = () => {
  return (
    <div className={style.CP_Wrapper}>
      <button className={style.CP_ArrowBtn}>
        <img className={style.CP_ArrowImg} src={leftArrow}/>
      </button>
      <button></button>
      <button></button>
      <button></button>
      <button className={style.CP_ArrowBtn}>
        <img className={style.CP_ArrowImg} src={rightArrow}/>
      </button>
    </div>
  )
}

export default CustomPagination