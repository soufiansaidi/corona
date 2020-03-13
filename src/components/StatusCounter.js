import React, {useContext} from 'react'
import TotalCounter from './TotalCounter'

import { DataContext } from './../Context/DataContext'

const StatusCounter = () => {
    const { state } = useContext(DataContext)

    return (
        <div className="general-statics">
            <div className="single-static cases">
                <TotalCounter title="الإصابات" total={ state.counters.total_cases } />
            </div>
            <div className="single-static death">
                <TotalCounter title="الوفيات" total={ state.counters.total_deaths } />
            </div>
            <div className="single-static recovery">
                <TotalCounter title="تعافى" total={ state.counters.total_recoverds } />
            </div>
            <div className="single-static still_cases">
                <TotalCounter title="المتبقي" total={ state.counters.total_cases_still } />
            </div>
        </div>
    )
}
export default StatusCounter 