import axios from 'axios';

const API_KEY = 'cdf02d233793c63f30e54556c668587a';
// another: 8ad14f98d92493b6a57a54200c2c7bcd
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// to keep types the same from actions and reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log("Request: ", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
