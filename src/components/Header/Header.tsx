import React, { ChangeEvent, FC, useState } from 'react'
import style from'./Header.module.scss'
import steamLogo from '../../shared/images/logo/steam-logo.png'
import checkboxloggo from '../../shared/images/logo/pricelowbigbtn.png'
import Select from 'react-select'
import { colourOptions } from './data';
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { Search } from '../../redux/slice/dataSlice'

const Header: FC = () => {
  const search = useAppSelector(state => state.data.search)
  // const [search, setSearch] = useState<string | undefined>('')
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleOpen = () => setIsOpen(true)
  const hanleClose = () => setIsOpen(false)
  // const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value)
  // }
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(Search(e.target.value))
  }

  return (
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
            <p onClick={hanleClose} className={style.link}>Lower to bigger</p>
            <p onClick={hanleClose} className={style.link} >Bigger to lower</p>
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
          defaultValue={colourOptions[0]}
          name="color"
          options={colourOptions}
        />
        <div className={style.Navlink_Wrapper}>
          <button className={style.Navlink_Btn}>Search</button>
          <button className={style.Navlink_Btn}>Like list</button>
        </div>
      </div>
    </div>
  )
}

export default Header