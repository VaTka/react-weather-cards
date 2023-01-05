import React from 'react';
import {Link} from "react-router-dom";
import {removeCity} from '../store/citySlice'
import {useDispatch} from "react-redux";

const WeatherCard = ({cityName, temp}) => {

    const dispatch = useDispatch()

    return (
        <div className="flex items-center flex-col bg-blue-400 py-5 px-3 my-6 mx-3 rounded-3xl block">
            <div className="font-bold text-black text-4xl my-2">{temp}°C</div>
            <div className="font-bold text-black text-3xl text-white my-7">{cityName}</div>

            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full text-center mb-2 border-2"
                  to={`/${cityName}`}>More info</Link>

            <button onClick={() => dispatch(removeCity({cityName}))}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full text-center border-2">
                Delete
            </button>
        </div>
    )
}

export default WeatherCard;
