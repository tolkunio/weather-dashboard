import Image from "next/image";
import s from './Forecast.module.scss';
import vector from './../../../../../public/images/vector.png';
import {useCurrentWeather} from "@/app/hooks/useCurrentWeather";
import ForecastElement from "@/app/components/elements/mainContent/forecast/ForecastElement/ForecastElement";

const Forecast = () => {
    const {status, data} = useCurrentWeather();
    return (
        <div className={s.forecast}>
            <div className={s.titleBlock}>
                <Image src={'/icons/clock.svg'} width={16} height={16} alt={'clock'} draggable={false}/>
                <span>24-hour forecast</span>
            </div>
            <div className={s.forecastChart}>
                <Image className={s.img} src={'/images/vector.png'} width={730} height={63}/>
                {status === 'success' && data.list.map(item =>
                    <ForecastElement key={item.dt}
                                     temp={item.main.temp}
                                     time={item.dt_txt.substring(11, 16)}
                                     wind={item.wind.speed}/>).splice(0,7)}
            </div>
        </div>
    );
};

export default Forecast;
