import {axiosClassic} from "@/app/api/interceptors";
import {getCurrentWeather} from "@/app/configs/api.config";

export const WeatherService={
    async getCurrentWeather(lat:string,lon:string,appKey:string,lang:string,units:string){
        const res=axiosClassic.get(getCurrentWeather(''),{
            params:{
                lat:lat,
                lon:lon,
                appId:appKey,
                lang:lang,
                units:units
            }
        });
        return res;
    }
}