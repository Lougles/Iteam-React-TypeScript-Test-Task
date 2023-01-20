import React, { FC } from 'react'
import style from'./Header.module.scss'
import steamLogo from '../../shared/images/logo/steam-logo.png'
import checkboxloggo from '../../shared/images/logo/pricelowbigbtn.png'


const Header: FC = () => {
  return (
    <div className={style.Header_Wrapper}>
      <img className={style.logo} src={steamLogo} />
      <input placeholder='Enter an app name...' className={style.Header_Input}></input>
      <div className={style.dropdown}>
        <button className={style.Profile_Btn}>
        <img src={checkboxloggo} />
        </button>
        <div className={style.dropdownOptions}>
          <p className={style.link} >Lower to bigger</p>
          <p className={style.link} >Bigger to lower</p>
        </div>
      </div>
    </div>
  )
}

export default Header