import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const API_KEY = "Your Key"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

export const fetchCities = createAsyncThunk(
    'city/fetchCities',
    async function(cityName) {
        if (cityName) {
            const response = await fetch(`${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
            const data = await response.json()
            console.log(data)

            return data
        }
    }
)

const citySlice = createSlice({
    name: 'city',
    initialState: {
        cities: [],
        status: null,
        error: null,
    },
    reducers: {
        addCity(state, action) {
            state.cities.push({
                cityName: action.payload.cityName
            })
        },
        removeCity(state, action) {
            state.cities = state.cities.filter(city => city.cityName !== action.payload.cityName)
        },
        refreshCity(state, action){

        }
    },
    extraReducers: {
      [fetchCities.pending] : (state) => {
          state.status = "loading"
          state.error = null
      },
      [fetchCities.fulfilled] : (state, action) => {
          if (action.payload.name !== undefined) {
              state.status = "resolved"
              state.cities.push({
                  cityName: action.payload.name,
                  country: action.payload.sys.country,
                  temp: action.payload.main.temp.toFixed(1),
                  rain: action.payload.weather[0].main,
                  description: action.payload.weather[0].description,
              })
          }
      },
      [fetchCities.rejected] : (state, action) => {},
    },
});

export const {addCity, removeCity, refreshCity} = citySlice.actions

export default citySlice.reducer
