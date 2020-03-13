import React, { useContext, useState } from 'react'
import { DataContext } from './../Context/DataContext'

const FilterForm = () => {
    const { state, dispatch } = useContext(DataContext)
    const [search, setSearch] = useState('')

    const _handleSelection = (selected) => {
        dispatch({type: selected, payload: state.countries})
        dispatch({type: selected, payload: state.countries})
        dispatch({type: selected, payload: state.countries})
    }

    const _handleSearch = (val) => {
        setSearch(val)
        dispatch({type: "SEARCH", payload: search})
    }

    return (
        <div className="form-filter">
            <select className="select-filter" onChange={ (e) => _handleSelection(e.target.value) }>
                <option value="CASES">ألاكثر اصابات</option>
                <option value="DEATH">ألاكثر وفيات</option>
                <option value="RECOVERY">ألاكثر تعافي</option>
            </select>
            <input type="text" className="search-filter" placeholder="ابحث عن البلد" onChange={(e) => _handleSearch(e.target.value)} value={search} />
        </div>
    )
}
export default FilterForm