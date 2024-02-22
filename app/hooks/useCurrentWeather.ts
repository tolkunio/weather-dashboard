import {useQuery} from "react-query";
import {WeatherService} from "@/app/services/weather.service";

export const useCurrentWeather=()=>{
    const appkey='2940e7c2db563c6b6dc8754f3b0c1856';
    const lat='42.8766';
    const lon='74.6070079';
    const units='metric';
    const lang='ru';
    const queryData=useQuery('currentWeather',
        ()=>WeatherService.getCurrentWeather(lat,lon,appkey,lang,units));
    console.log(queryData);
    return queryData;
}