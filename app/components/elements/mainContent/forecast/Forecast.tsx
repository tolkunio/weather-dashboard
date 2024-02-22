import Image from "next/image";
import s from './Forecast.module.scss';

const Forecast = () => {
    return (
        <div className={s.forecast}>
            <div className={s.titleBlock}>
                <Image src={'/icons/clock.svg'} width={16} height={16} alt={'clock'} draggable={false}/>
                <span>24-hour forecast</span>
            </div>
            <div className={s.forecastChart}>

            </div>
        </div>
    );
};

export default Forecast;
