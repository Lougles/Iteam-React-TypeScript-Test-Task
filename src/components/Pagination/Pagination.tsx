import React, { FC } from 'react'
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss'

interface PaginationProps {
  initialPage?: number,
  marginPagesDisplayed?: number,
  pageCount: number,
  pageRangeDisplayed?: number,
  onChange: ({selected}: {selected: number}) => void
}

const Pagination: FC<PaginationProps> = ({initialPage, marginPagesDisplayed, pageCount, pageRangeDisplayed, onChange}) => {
  return (
      <ReactPaginate 
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onChange}
      className={style.Pagination}
        />
  )
}

export default Pagination