import React, { useContext } from 'react'
import Country from './Country'

// import Swiper from 'react-id-swiper'
// import 'swiper/css/swiper.css'

import { DataContext } from './../Context/DataContext'

export default function CountriesSwiper() {
    const { state } = useContext(DataContext)
    
    // let params
    // if(state.countries.length > 2){
    //     params = { 
    //         direction: 'vertical',
    //         // grabCursor: true,
    //         // slidesPerView: 3,
    //         // mousewheel: true, 
    //         // spaceBetween: 24, 
    //         // centeredSlides: true, 
    //         // loop: true,
    //         // rebuildOnUpdate: true,
    //         // shouldSwiperUpdate: true,
    //         // breakpoints: {
    //         //     0: {slidesPerView: 'auto'},
    //         //     600: {slidesPerView: 3},
    //         // },
    //         // navigation: {
    //         //     nextEl: '.swiper-button-next',
    //         //     prevEl: '.swiper-button-prev'
    //         // },
    //     }
    // }else{
    //     params = { 
    //         grabCursor: true,
    //         slidesPerView: 1,
    //         rebuildOnUpdate: true,
    //         shouldSwiperUpdate: true,
    //         loop: false
    //     }
    // }

    return (
        <div className="countries">
            { (state.countries.length < 1) ?
                <h1>لا توجد نتائج</h1>
            :
                <div className="list-countries">
                    { 
                        state.countries.map(
                            (entry, i) => (
                                <div key={i} className="single-swiper text-center">
                                    <Country data={entry} counter={i + 1} />
                                </div>
                            )
                        )
                    }
                </div>
            }
        </div>
    )
}
