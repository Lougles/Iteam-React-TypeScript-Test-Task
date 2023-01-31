import React, { ChangeEvent, FC, useState } from 'react'
import style from'./Header.module.scss'
import steamLogo from '../../shared/images/logo/steam-logo.png'
import checkboxloggo from '../../shared/images/logo/pricelowbigbtn.png'
import Select from 'react-select'
import { colourOptions } from './data';
import Main from '../../pages/Main'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchGamesByQuery } from '../../redux/operations/game-operations'
import { Search, SortByPrice, SwitchPriceAndDate } from '../../redux/slice/dataSlice'

export enum SwitchType{
  Price = 'price',
  Date = 'date',
}

function getSwithTypeFromInput(value: string): SwitchType {
  if(value == 'price') {
    return SwitchType.Price
  } else if(value == 'date') {
    return SwitchType.Date;
  }
  return SwitchType.Price;
}

const Header: FC = () => {
  // const []
  const {items, isLoading, error} = useAppSelector(state => state.games)
  const {search, sortByPrice, switchPriceDate} = useAppSelector(state => state.data)

  const dispatch = useAppDispatch();

  const handleSwitchPriceAndDate = (data: string) => {
    dispatch(SwitchPriceAndDate(data))
  }
  const handleSortByPrice = (data: string) => {
    dispatch(SortByPrice(data))
    console.log(sortByPrice)
  }
  const handleInput =  (text: string) => {
    dispatch(Search(text))
    console.log(search)
  }

  const fetchSearchQuery = () => {
    dispatch(fetchGamesByQuery(search))
  }

  return (
    <>
      <div className={style.Infinity_Element}>
        <div className={style.Header_Wrapper}>
          <img className={style.logo} src={steamLogo} />
          <input onChange={(event) => handleInput(event.target.value)} placeholder='Enter an app name...' className={style.Header_Input}></input>
          <div className={style.dropdown}>
            <button className={style.Profile_Btn} >
            <img src={checkboxloggo} />
            </button>
            <div className={style.dropdownOptions}>
              <p onClick={() => handleSortByPrice('lowtobig')} className={style.link}>Lower to bigger</p>
              <p onClick={() => handleSortByPrice('bigtolow')} className={style.link}>Bigger to lower</p>
              {/* <p onClick={() => console.log(check(''))} className={style.link}>Check</p> */}
            </div>
          </div>
          <Select
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: '#837F7F',
                borderRadius: '10px',
                color: '#fff'
              }),
            }}
            className={style.select}
            classNamePrefix="select"
            name="color"
            // value={getValue()}
            // onChange={handlePriceOrDate}
            options={colourOptions}
          />
          <div className={style.Navlink_Wrapper}>
            <button className={style.Navlink_Btn} onClick={fetchSearchQuery}>Search</button>
            <button className={style.Navlink_Btn}>Like list</button>
          </div>
        </div>
      </div>
      <Main search={search} 
      // belowAbove={belowAbove} priceOrDate={priceOrDate}
      />
    </>
  )
}

export default Header