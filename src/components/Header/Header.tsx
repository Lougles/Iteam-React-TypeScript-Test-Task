import React, { ChangeEvent, FC, useState } from 'react'
import style from'./Header.module.scss'
import steamLogo from '../../shared/images/logo/steam-logo.png'
import checkboxloggo from '../../shared/images/logo/pricelowbigbtn.png'
import Select from 'react-select'
import { colourOptions } from './data';
import Main from '../../pages/Main'
import { useAppDispatch, useAppSelector } from '../../redux/store'

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

  //get data from redux
  const {items, isLoading, error} = useAppSelector(state => state.games)
  const dispatch = useAppDispatch();

  //data from input and btns
  const [search, setSearch] = useState<string | undefined>('')
  const [belowAbove, setBelowAbove] = useState<string | undefined>('');
  const [priceOrDate, setPriceOrDate] = useState<string>(colourOptions[0].value);
  const [isOpen, setIsOpen] = useState(false);

  //functions for btns and inputs
  const handleOpen = () => setIsOpen(true)
  // const hanleClose = () => setIsOpen(false)
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleBelowAboveBtn = (text:string):void => {
    setIsOpen(false)
    setBelowAbove(text)
    console.log(belowAbove)
  }
  const getValue = () => {
    return priceOrDate ? colourOptions.find(item => item.value === priceOrDate) : '';
  }
  const handlePriceOrDate = (data: any):void => {
    let value: SwitchType = getSwithTypeFromInput(data.value.toString());
    setPriceOrDate(value)
  }

  return (
    <>
      <div className={style.Infinity_Element}>
        <div className={style.Header_Wrapper}>
          <img className={style.logo} src={steamLogo} />
          <input onChange={handleSearch} value={search} placeholder='Enter an app name...' className={style.Header_Input}></input>
          <div className={style.dropdown}>
            <button className={style.Profile_Btn} onClick={handleOpen}>
            <img src={checkboxloggo} />
            </button>
            {
              isOpen &&
            <div className={style.dropdownOptions}>
              <p onClick={() => handleBelowAboveBtn('Low')} className={style.link}>Lower to bigger</p>
              <p onClick={() => handleBelowAboveBtn('Big')} className={style.link} >Bigger to lower</p>
            </div>
            }
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
            value={getValue()}
            onChange={handlePriceOrDate}
            options={colourOptions}
          />
          <div className={style.Navlink_Wrapper}>
            <button className={style.Navlink_Btn}>Search</button>
            <button className={style.Navlink_Btn}>Like list</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header