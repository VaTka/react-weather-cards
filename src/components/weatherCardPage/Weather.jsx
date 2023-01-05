import React from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const Weather = () => {
    const params = useParams()
    const cities = useSelector(state => state.cities.cities)
    const result = cities.find(obj => {
        return obj.cityName === params.cityName
    })

    return (
        <div className={"w-full flex flex-col items-center text-3xl"}>
            <div className={"font-bold"}>{result.cityName}, {result.country}</div>
            <div>Temp: {result.temp}°C</div>
            <div>Weather: {result.rain}</div>
            <div>Description: {result.description}</div>
        </div>
    )
}

export default Weather;
