import s from './ForecastElement.module.scss';
import Image from "next/image";
type ForecastELementPropsType={
        temp:number,
        wind:string,
        time:string
}
const ForecastElement = ({temp,wind,time}:ForecastELementPropsType) => {
    return (
        <div className={s.forecastElement}>
            <span>{`${temp}°`}</span>
            <div className={s.info}>
                <Image src={'/icons/forecast.svg'} width={24} height={24} alt={'forecastIcon'}/>
                <span>{wind}km/h</span>
                <span>{time}</span>
            </div>
        </div>
    );
};

export default ForecastElement;
