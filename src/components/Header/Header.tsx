import React, { FC } from 'react'
import style from'./Header.module.scss'
import steamLogo from '../../shared/images/logo/steam-logo.png'
import searchLogo from '../../shared/images/logo/input-logo.png'

const Header: FC = () => {
  return (
    <div className={style.Header_Wrapper}>
      <img className={style.logo} src={steamLogo} />
      <input placeholder='Enter an app name...' className={style.Header_Input}></input>
      
    </div>
  )
}

export default Header