import {useQuery} from "react-query";
import {WeatherService} from "@/app/services/weather.service";
import {ICoordination} from "@/app/mock/mockForLocations";
import {APP_KEY} from "@/app/configs/api.config";

export const useCurrentWeatherByLocation = (coord: ICoordination) => {
    const fetchData = () =>
        WeatherService.getCurrentWeather(coord.lat, coord.lon, APP_KEY, 'metric')
            .then(res => res.data);
    return useQuery('currenWeatherByLocation', fetchData);
}