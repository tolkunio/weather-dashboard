import s from './ForecastElement.module.scss';
import {Forecast} from "@/assets/icons";
export type ForecastELementPropsType={
        temp:number,
        wind:string,
        time:string
}
const ForecastElement = ({temp,wind,time}:ForecastELementPropsType) => {
    return (
        <div className={s.forecastElement}>
            <span>{`${temp}°`}</span>
            <div className={s.info}>
                <Forecast/>
                <span>{wind} km/h</span>
                <span>{time}</span>
            </div>
        </div>
    );
};

export default ForecastElement;
