import {axiosClassic} from "@/app/api/interceptors";
import {getCurrentWeather} from "@/app/configs/api.config";
import {IWeather} from "@/app/types/IWeather";

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