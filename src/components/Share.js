import React from 'react'

import Facebook from './../img/social-media/facebook.svg'
import Gmail from './../img/social-media/gmail.svg'
// import Instagram from './../img/social-media/instagram.svg'
import Twitter from './../img/social-media/twitter.svg'
import Whatsapp from './../img/social-media/whatsapp.svg'

export default function Share() {
    // let message = "https://wa.me/?text="+"\n"+"http://haamapp.com/corona"+"\n"+"عبر تطبيق هام"+"\n"+"http://haamapp.com/dowload/"
    let whatsappMessage= window.encodeURIComponent("انتشار كورونا في العالم - احصائيات مباشرة"+"\r\n"+"http://haamapp.com/corona"+"\r\n\r\n"+"عبر تطبيق هام"+"\r\n"+"http://haamapp.com/dowload/")
    return (
        <div className="share">
            <ul>
                <li><a href="https://www.facebook.com/sharer/sharer.php?u=http://haamapp.com/corona/"><img src={ Facebook } alt="Share Facebook" /></a></li>
                <li><a href="https://twitter.com/home?status=http://haamapp.com/corona/"><img src={ Twitter } alt="Share Twitter" /></a></li>
                <li><a href={"whatsapp://send?text=" + whatsappMessage}><img src={ Whatsapp } alt="Share Whatsapp" /></a></li>
                {/* <li><a href=""><img src={ Instagram } alt="Share Instagram" /></a></li> */}
                <li><a href="mailto:info@example.com?&subject=&body=http://haamapp.com/corona/"><img src={ Gmail } alt="Share Gmail" /></a></li>
            </ul>
        </div>
    )
}
