import {useQuery} from "react-query";
import {WeatherService} from "@/app/services/weather.service";
import {IWeather} from "@/app/types/IWeather";
import {IList} from "@/app/types/IWeather";
import {list} from "postcss";

export const useCurrentWeather=()=>{
    const appkey='2940e7c2db563c6b6dc8754f3b0c1856';
    const lat='42.8766';
    const lon='74.6070079';
    const units='metric';
    const queryData=useQuery('currentWeather',
        ()=>WeatherService.getCurrentWeather(lat,lon,appkey,units).then(res=>res.data));
    return queryData;
}