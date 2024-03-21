import s from './WeatherWidget.module.scss';
import {WeatherConditionInterface, WeekDays} from "@/interfaces/weather-condition-interface";
import {Monday, Tuesday, Friday, Saturday, Sunday, Temp, Wind, Drop, Sun, Clock} from "@/assets/icons";
import {WeatherCard} from "@/layout/weatherWidget/WeatherCard/WeatherCard";
import {IList} from "@/interfaces/data-response-interface";

type PropsType = {
    list: IList[] | undefined
}
let weatherCondition: WeatherConditionInterface[] = [
    {
        id: 1,
        icon: <Temp/>,
        desc: 'Real Feel',
        value: '30'
    },
    {
        id: 2,
        icon: <Wind/>,
        desc: 'Wind',
        value: '0.8 km/hr'
    },
    {
        id: 3,
        icon: <Drop/>,
        desc: 'Chance of rain',
        value: '2%'
    },
    {
        id: 4,
        icon: <Sun/>,
        desc: 'Visibility',
        value: '4'
    }
]

const weekdays: WeekDays[] = [
    {
        name: 'FR',
        icon: <Friday/>
    },
    {
        name: 'SAT',
        icon: <Saturday/>
    },
    {
        name: 'SUN',
        icon: <Sunday/>
    },
    {
        name: 'MON',
        icon: <Monday/>
    },
    {
        name: 'TUES',
        icon: <Tuesday/>
    },

]
const WeatherWidget = ({list}: PropsType) => {
    let time = '9:00'
    if (list) {
        time = list[0].dt_txt.substring(11, 16);
        weatherCondition[0].value = `${list[0].main.feels_like}°`;
        weatherCondition[1].value = list[0].wind.speed as string;
        weatherCondition[2].value = list[0].pop as string;
        weatherCondition[3].value = list[0].visibility as string;
    }

    return (

        <div className={s.weatherWidget}>
            <div className={s.weekdays}>
                {
                    weekdays.map(day => <div key={day.name} className={s.daysBlock}>
                        <span>{day.name}</span>
                        {day.icon}
                    </div>)
                }
            </div>
            <div className={s.timeGmt}>
                <Clock/>
                <span>{time} GMT</span>
            </div>
            <div className={s.airConditions}>
                <span className={s.title}>AIR CONDITIONS</span>
                <div className={s.airInfoBlock}>
                    {
                        weatherCondition.map((item) =>
                            <WeatherCard key={item.value} card={item}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
