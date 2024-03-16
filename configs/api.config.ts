export const API_URL = `https://api.openweathermap.org/data/2.5`
export const APP_KEY='2940e7c2db563c6b6dc8754f3b0c1856';

export const getCurrentWeather = (str:string)=>`/forecast?${str}`;
