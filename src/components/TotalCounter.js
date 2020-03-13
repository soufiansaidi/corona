import React from 'react'

import CountUp from 'react-countup'

const TotalCounter = ( props ) => {
    const { title, total } = props
    return (
        <>
            <h3>{ title }</h3>
            <div>{(total) ? <CountUp separator="," end={ total } /> : 0 }</div>
        </>
    )
}
export default TotalCounter