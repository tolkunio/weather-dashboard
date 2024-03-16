import s from './WeatherCard.module.scss';
import {WeatherConditionInterface} from "@/interfaces/weather-condition-interface";
type PropsType={
    card:WeatherConditionInterface
}
export const WeatherCard = ({card}:PropsType) => {
    return (
        <div className={s.card}>
            {card.icon}
            <div className={s.info}>
                <span className={s.desc}>{card.desc}</span>
                <span className={s.value}>{card.value}</span>
            </div>
        </div>
    );
};

