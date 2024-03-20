import s from './WeatherWidget.module.scss';
import Image from "next/image";
import {useCurrentWeatherByLocation} from "@/hooks/useCurrentWeather";
import {useEffect} from "react";
import {WeatherConditionInterface, WeekDays} from "@/interfaces/weather-condition-interface";
import {Temp, Wind, Drop, Sun} from "@/assets/icons";
import {WeatherCard} from "@/layout/weatherWidget/WeatherCard/WeatherCard";
import {Monday, Tuesday, Friday, Saturday, Sunday} from "@/assets/icons"
import {Clock} from "@/assets/icons";
import {ICoordination} from "@/interfaces/data-response-interface";

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
const WeatherWidget = () => {
    let time = '6:00';
    const initialCoord: ICoordination = {lat: '-75.499901', lon: '-75.499901'};
    let parsedSelectCoord;
    useEffect(() => {
        const selectCoord = localStorage.getItem('selectCoord');
        if (selectCoord !== null) {
            parsedSelectCoord = JSON.parse(selectCoord);
        } else {
            parsedSelectCoord = initialCoord;
        }
    }, []);
    const {status, data} = useCurrentWeatherByLocation(parsedSelectCoord)

    if (status === 'success') {
        let currentData = data.list[0];
        let {dt_txt, main, wind, pop, visibility} = currentData;
        time = currentData.dt_txt.substring(11, 16);
        weatherCondition[0].value = `${main.feels_like}°`;
        weatherCondition[1].value = wind.speed;
        weatherCondition[2].value = pop;
        weatherCondition[3].value = visibility;
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
                    {weatherCondition.map((item) => <WeatherCard key={item.value} card={item}/>)}
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
