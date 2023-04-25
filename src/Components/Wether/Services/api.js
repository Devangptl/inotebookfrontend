import axios from "axios";

const API_KEY = 'bd6dff03805a0d0496c8e8272ffdc87b'
const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

export const getWeather = async(city,country) => {
  try {
    let response =  await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return response.data 
     
  } catch (error) {
     console.log("City not found")
  }
}

