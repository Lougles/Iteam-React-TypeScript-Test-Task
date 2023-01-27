import React, { FC } from 'react'
import style from './CustomPagination.module.scss'
import leftArrow from '../../shared/images/svg/paginationleftarrow.svg'
import rightArrow from '../../shared/images/svg/paginationrightarrow.svg'

type PropsPagination = {
  paginate: (number: number) => void;
}

const CustomPagination: FC<PropsPagination> = ({paginate}) => {
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
        <li className={style.CP_ArrowBtn}>
          <a onClick={paginate(number)}>{number}</a>
        </li>
      ))}
        <li className={style.CP_ArrowBtn}>
          <a>
            <img className={style.CP_ArrowImg} src={rightArrow}/>
          </a>
        </li>
      </ul>
      {/* <button className={style.CP_ArrowBtn}>
        <img className={style.CP_ArrowImg} src={leftArrow}/>
      </button>
      <button className={style.CP_ArrowBtn}>1</button>
      <button className={style.CP_ArrowBtn}>2</button>
      <button className={style.CP_ArrowBtn}>3</button>
      <button className={style.CP_ArrowBtn}>
        <img className={style.CP_ArrowImg} src={rightArrow}/>
      </button> */}
    </div>
  )
}

export default CustomPagination