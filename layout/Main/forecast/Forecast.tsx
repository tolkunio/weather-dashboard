import Image from "next/image";
import s from './Forecast.module.scss';
import ForecastElement from "@/layout/Main/forecast/ForecastElement/ForecastElement";
import {Clock} from "@/assets/icons";
import {IList} from "@/interfaces/data-response-interface";
type PropsType={
    list:IList[] |undefined
}
const Forecast = ({list}:PropsType) => {
    return (
        <div className={s.forecast}>
            <div className={s.titleBlock}>
                <Clock/>
                <span>24-hour forecast</span>
            </div>
            <div className={s.forecastChart}>
                <Image className={s.img} src='/images/vector.png' width={730} height={63} alt={'vector'}/>
                {list && list.map((item) =>
                    <ForecastElement key={item.dt}
                                     temp={item.main.temp}
                                     time={item.dt_txt.substring(11, 16)}
                                     wind={item.wind.speed}/>).splice(0, 7)}
            </div>
            <button className={s.btn}>5-day forecast</button>
        </div>
    );
};

export default Forecast;
