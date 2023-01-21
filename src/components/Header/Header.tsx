import React, { FC, useState } from 'react'
import style from'./Header.module.scss'
import steamLogo from '../../shared/images/logo/steam-logo.png'
import checkboxloggo from '../../shared/images/logo/pricelowbigbtn.png'
import Select from 'react-select'
import { colourOptions } from './data';



const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true)
  const hanleClose = () => setIsOpen(false)


  return (
    <div className={style.Header_Wrapper}>
      <img className={style.logo} src={steamLogo} />
      <input placeholder='Enter an app name...' className={style.Header_Input}></input>
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
        className={style.select}
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        name="color"
        options={colourOptions}
      />
    </div>
  )
}

export default Header