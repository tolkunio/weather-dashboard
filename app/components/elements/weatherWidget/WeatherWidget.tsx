import s from './WeatherWidget.module.scss';
import Image from "next/image";
import {useCurrentWeatherByLocation} from "@/app/hooks/useCurrentWeather";
import {useEffect} from "react";
import {ICoordination} from "@/app/mock/mockForLocations";

let tempCondition = {
    iconUrl: '/icons/temp.svg',
    desc: 'Real Feel',
    temp: '30'
};
let windCondition = {
    iconUrl: '/icons/wind.svg',
    desc: 'Wind',
    speed: '0.8 km/hr'
}
let rainCondition = {
    iconUrl: '/icons/drop.svg',
    desc: 'Chance of rain',
    precipitation: '2%'
}
let visibilityCondition = {
    iconUrl: '/icons/sun.svg',
    desc: 'Visibility',
    value: '4'
}

const weekdays = [
    {
        week: 'FR',
        weekIcon: '/icons/weekDays/FR.svg'
    },
    {
        week: 'SAT',
        weekIcon: '/icons/weekDays/SAT.svg'
    },
    {
        week: 'SUN',
        weekIcon: '/icons/weekDays/SUN.svg'
    },
    {
        week: 'MON',
        weekIcon: '/icons/weekDays/MON.svg'
    },
    {
        week: 'TUES',
        weekIcon: '/icons/weekDays/TUES.svg'
    },

]
const WeatherWidget = () => {
    let time='6:00';
    const initialCoord: ICoordination = {lat: '-75.499901', lon: '-75.499901'};
    let parsedSelectCoord;
    useEffect(() => {
        const selectCoord=localStorage.getItem('selectCoord');
        if(selectCoord!==null){
            parsedSelectCoord=JSON.parse(selectCoord);
        }
        else {
            parsedSelectCoord=initialCoord;
        }
    }, []);
    const {status, data} = useCurrentWeatherByLocation(parsedSelectCoord)
    if (status === 'success') {
        let currentData = data.list[0];
        time=currentData.dt_txt.substring(11,16)
        tempCondition.temp = `${currentData.main.feels_like}°`;
        windCondition.speed = currentData.wind.speed;
        rainCondition.precipitation = currentData.pop;
        visibilityCondition.value = currentData.visibility;
    }

    return (
        <div className={s.weatherWidget}>
            <div className={s.weekdays}>
                {
                    weekdays.map(day => <div key={day.week} className={s.daysBlock}>
                        <span>{day.week}</span>
                        <Image src={day.weekIcon} width={24} height={24} alt={day.week}/>
                    </div>)
                }
            </div>
            <div className={s.timeGmt}>
                <Image src={'/icons/clock.svg'} width={20} height={20} alt={'clock'}/>
                <span>{time} GMT</span>
            </div>
            <div className={s.airConditions}>
                <span className={s.title}>AIR CONDITIONS</span>
                <div className={s.airInfoBlock}>
                    <div className={s.blockValues}>
                        <Image src={tempCondition.iconUrl} width={25} height={25} alt={tempCondition.desc}/>
                        <div className={s.info}>
                            <span className={s.desc}>{tempCondition.desc}</span>
                            <span className={s.temp}>{tempCondition.temp}</span>
                        </div>
                    </div>
                    <div className={s.blockValues}>
                        <Image src={windCondition.iconUrl} width={25} height={25} alt={windCondition.desc}/>
                        <div className={s.info}>
                            <span className={s.desc}>{windCondition.desc}</span>
                            <span className={s.temp}>{windCondition.speed}</span>
                        </div>
                    </div>
                    <div className={s.blockValues}>
                        <Image src={rainCondition.iconUrl} width={25} height={25} alt={rainCondition.desc}/>
                        <div className={s.info}>
                            <span className={s.desc}>{rainCondition.desc}</span>
                            <span className={s.temp}>{rainCondition.precipitation}%</span>
                        </div>
                    </div>
                    <div className={s.blockValues}>
                        <Image src={visibilityCondition.iconUrl} width={25} height={25} alt={visibilityCondition.desc}/>
                        <div className={s.info}>
                            <span className={s.desc}>{visibilityCondition.desc}</span>
                            <span className={s.temp}>{visibilityCondition.value}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WeatherWidget;
