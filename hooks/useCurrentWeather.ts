import {useQuery} from "react-query";
import {WeatherService} from "@/services/weather.service";
import {ICoordination} from "@/mock/mockForLocations";
import {APP_KEY} from "@/configs/api.config";

export const useCurrentWeatherByLocation = (coord?: ICoordination) => {
    const defaultCoord = { lat: '-75.499901', lon: '-75.499901' };
    const finalCoord = coord || defaultCoord;
    const fetchData = () =>
        WeatherService.getCurrentWeather(finalCoord.lat, finalCoord.lon, APP_KEY, 'metric')
            .then(res => res.data);
    return useQuery('currenWeatherByLocation', fetchData);
}