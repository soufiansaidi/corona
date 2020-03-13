import React, { useContext } from 'react'
import { DataContext } from './../Context/DataContext'

import Logo from './../img/logo.svg'
import Android from './../img/android.svg'
import Ios from './../img/ios.svg'

const Header = () => {
    const { state } = useContext(DataContext)

    return (
        <div className="logo">
            <div className="last_update">{ state.last_update }</div>
            <div>
                <img src={Logo} alt="Haam app" />
                <ul>
                    <li><a href="https://play.google.com/store/apps/details?id=com.mamacgroup.ham&hl=en"><img src={ Android } alt="android" /></a></li>
                    <li><a href="https://apps.apple.com/in/app/%D9%87%D8%A7%D9%85-ham-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-%D8%B9%D8%A7%D8%AC%D9%84/id1300593156"><img src={ Ios } alt="android" /></a></li>
                </ul>
            </div>
            <h3>احصائيات الكورونا المستجد</h3>
        </div>
    )
}
export default Header