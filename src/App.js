import React, {useState} from 'react'
import axios from 'axios'
import './styles/weather.css';
import CitySearch from "./components/CitySearch";

function App() {

    const [weatherNow, setWeatherNow] = useState({});
    const [days, setDays] = useState([]);
    const [place, setPlace] = useState('');

    const onSearchSubmit = async (searchInputValue) => {
        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInputValue}?unitGroup=metric&key=QQW5GSLZ7J2ETSQ2J9HKX5ASD&contentType=json`)

        setWeatherNow(response.data.currentConditions);
        setPlace(response.data.resolvedAddress);
    }

    return (
        <div className="container my-5">
            <h1 className="text-center title">Weather in</h1>
            <CitySearch onSearchSubmit = {onSearchSubmit} />
           <div>
               <div className="card rounded my-3 shadow-lg back-card">
                   <div className="card-top text-center my-3">
                       <div className="city-name my-3">
                           {place?   <p>{place}</p> : <span>...</span>}
                       </div>
                   </div>

                   <div className="card-body my-5">
                       <div className="card-mid row">
                           <div className="col-8 text-center temp">
                               <span>{weatherNow.temp}&deg;C</span>
                           </div>
                           <div className="col-4 condition-temp">
                               <p className="condition">{weatherNow.conditions}</p>
                               <p className="low">Feels Like: {weatherNow.feelslike}&deg;C</p>
                           </div>
                       </div>

                       <div className="icon-container card shadow mx-auto">

                       </div>
                       <div className="card-bottom px-5 py-4 row">
                           <div className="col text-center">
                               <p>{weatherNow.feelslike}&deg;C</p>
                               <span>Feels Like</span>
                           </div>
                           <div className="col text-center">
                               <p>{weatherNow.humidity}%</p>
                               <span>Humidity</span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default App