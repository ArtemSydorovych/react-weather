import React, {useState} from 'react'
import '../styles/weather.css'

const CitySearch = (props) =>{
    const [searchInputValue, setSearchInputValue] = useState()

    const onFormSubmit = (event) =>{
        event.preventDefault();
        props.onSearchSubmit(searchInputValue)

    }
        return(
            <form className="search-loaction" onSubmit={onFormSubmit}>
                <input
                    type="text"
                    name="city"
                    placeholder="What city?"
                    onChange={(event) => setSearchInputValue(event.target.value)}
                    className="form-control text-muted form-rounded p-4 shadow-sm" />
            </form>
        )
}

export default CitySearch;