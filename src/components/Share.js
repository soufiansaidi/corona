import React from 'react'

import Facebook from './../Images/social-media/facebook.svg'
import Gmail from './../Images/social-media/gmail.svg'
import Twitter from './../Images/social-media/twitter.svg'
import Whatsapp from './../Images/social-media/whatsapp.svg'

export default function Share() {
    // let message = "https://wa.me/?text="+"\n"+"http://haamapp.com/corona"+"\n"+"عبر تطبيق هام"+"\n"+"http://haamapp.com/dowload/"
    let whatsappMessage = window.encodeURIComponent("انتشار كورونا في العالم - احصائيات مباشرة"+"\r\n"+"http://haamapp.com/corona2/"+"\r\n\r\n"+"عبر تطبيق هام"+"\r\n"+"http://haamapp.com/dowload/")
    return (
        <div className="share">
            <ul>
                <li><a href="https://www.facebook.com/sharer/sharer.php?u=http://haamapp.com/corona2/"><img src={ Facebook } alt="Share Facebook" /></a></li>
                <li><a href="https://twitter.com/home?status=http://haamapp.com/corona2/"><img src={ Twitter } alt="Share Twitter" /></a></li>
                <li><a href={"whatsapp://send?text=" + whatsappMessage}><img src={ Whatsapp } alt="Share Whatsapp" /></a></li>
                {/* <li><a href=""><img src={ Instagram } alt="Share Instagram" /></a></li> */}
                <li><a href="mailto:info@example.com?&subject=&body=http://haamapp.com/corona2/"><img src={ Gmail } alt="Share Gmail" /></a></li>
            </ul>
        </div>
    )
}
