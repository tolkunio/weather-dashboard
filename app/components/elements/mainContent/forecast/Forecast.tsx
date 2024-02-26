import Image from "next/image";
import s from './Forecast.module.scss';
import ForecastElement from "@/app/components/elements/mainContent/forecast/ForecastElement/ForecastElement";
import {useCurrentWeatherByLocation} from "@/app/hooks/useCurrentWeather";
import {ICoordination} from "@/app/mock/mockForLocations";
import {loadState} from "@/app/services/localStorageService";

const Forecast = () => {
    //default coordinate:New York
    const initialCoord: ICoordination = {lat: '-75.499901', lon: '-75.499901'};

    const parsedSelectCoord =loadState<ICoordination>('selectCoord')??initialCoord;

    const {status, data} = useCurrentWeatherByLocation(parsedSelectCoord);
    return (
        <div className={s.forecast}>
            <div className={s.titleBlock}>
                <Image src={'/icons/clock.svg'} width={16} height={16} alt={'clock'} draggable={false}/>
                <span>24-hour forecast</span>
            </div>
            <div className={s.forecastChart}>
                <Image className={s.img} src='/images/vector.png' width={730} height={63}/>
                {status === 'success' && data.list.map(item =>
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
