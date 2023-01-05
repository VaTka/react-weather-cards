import './App.css';
import {Route, Routes} from "react-router-dom";
import Weather from "./components/weatherCardPage/Weather";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { fetchCities} from "./store/citySlice";
import CitiesList from "./components/citiesList";


function App() {

    const [cityName, setCityName] = useState(``)
    const dispatch = useDispatch();

    const addCities = (cityName) => {
        dispatch(fetchCities(cityName))
        setCityName('')
    }

    useEffect(() => {
        dispatch(fetchCities())
    }, [dispatch])

    return (
        <div className="flex">
            <Routes>
                <Route path='/' element={
                    <div className={"flex items-center flex-col"}>
                        <div className={"flex w-full items-center"}>
                            <input className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                                   value={cityName}
                                   onChange={(e) => setCityName(e.target.value)}/>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => {addCities(cityName)}}>Add City
                            </button>
                        </div>
                        <CitiesList />
                    </div>
                }/>
                <Route path={`/:cityName`} element={<Weather/>}/>
            </Routes>
        </div>
    );
}

export default App;
