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
      activeClassName={style.Pagination_activeClassName}
      pageLinkClassName={style.Pagination_pageLinkClassName}
      breakLinkClassName={style.Pagination_breakLinkClassName}
      nextLinkClassName={style.Pagination_nextLinkClassName}
      previousLinkClassName={style.Pagination_previousLinkClassName}
      pageClassName={style.Pagination_pageClassName}
      breakClassName={style.Pagination_breakClassName}
      nextClassName={style.Pagination_nextClassName}
      previousClassName={style.Pagination_previousClassName}
        />
  )
}

export default Pagination