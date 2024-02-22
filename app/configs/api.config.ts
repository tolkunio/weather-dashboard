export const API_URL = `https://api.openweathermap.org/data/2.5`

export const getCurrentWeather = (str:string)=>`/forecast?${str}`;
