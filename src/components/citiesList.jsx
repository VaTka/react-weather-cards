import React from 'react';
import WeatherCard from "./weatherCard";
import {useSelector} from "react-redux";

const CitiesList = () => {

    const cities = useSelector(state => state.cities.cities)

    return (
        <div className="flex items-center flex-wrap">
            {cities.map((city) => (
                <WeatherCard key={city.cityName} {...city}/>
            ))}
        </div>
    )
}

export default CitiesList;
