import Image from "next/image";
import s from './Forecast.module.scss';
import ForecastElement from "@/layout/mainContent/forecast/ForecastElement/ForecastElement";
import {useCurrentWeatherByLocation} from "@/hooks/useCurrentWeather";
import {ICoordination} from "@/mock/mockForLocations";
import {useEffect} from "react";
import {Clock} from "@/assets/icons";

const Forecast = () => {
    //default coordinate:New York
    const initialCoord: ICoordination = {lat: '-75.499901', lon: '-75.499901'};
    let parsedSelectCoord;
    useEffect(() => {
        const selectCoord=localStorage.getItem('selectCoord');
        if(selectCoord!==null){
            parsedSelectCoord=JSON.parse(selectCoord);
        }
        else {
            parsedSelectCoord=initialCoord;
        }
    }, []);


    const {status, data} = useCurrentWeatherByLocation(parsedSelectCoord);
    return (
        <div className={s.forecast}>
            <div className={s.titleBlock}>
                <Clock/>
                <span>24-hour forecast</span>
            </div>
            <div className={s.forecastChart}>
                <Image className={s.img} src='/images/vector.png' width={730} height={63} alt={'vector'}/>
                {status === 'success' && data.list.map((item:any)=>
                    <ForecastElement key={item.dt}
                                     temp={item.main.temp}
                                     time={item.dt_txt.substring(11, 16)}
                                     wind={item.wind.speed}/>).splice(0,7)}
            </div>
            <button className={s.btn}>5-day forecast</button>
        </div>
    );
};

export default Forecast;
