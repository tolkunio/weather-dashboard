import s from './WeatherCard.module.scss';
import {WeatherCondition} from "@/interfaces/weather-condition";
type PropsType={
    card:WeatherCondition
}
export const WeatherCard = ({card}:PropsType) => {
    return (
        <div className={s.card}>
            {card.icon}
            <div className={s.info}>
                <span className={s.desc}>{card.desc}</span>
                <span className={s.value}>{`${card.value}%`}</span>
            </div>
        </div>
    );
};

