import {axiosClassic} from "@/api/interceptors";
import {getCurrentWeather} from "@/configs/api.config";
import {IWeather} from "@/types/IWeather";

export const WeatherService={
    async getCurrentWeather(lat:string,lon:string,appKey:string,units:string){
        const res=axiosClassic.get(getCurrentWeather(''),{
            params:{
                lat:lat,
                lon:lon,
                appId:appKey,
                units:units
            }
        });
        return res;
    }
}