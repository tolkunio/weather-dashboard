import s from './WeatherWidget.module.scss';
import Image from "next/image";
const airConditions=[
    {
        iconUrl:'/icons/temp.svg',
        desc:'Real Feel',
        temp:'30°'
    },
    {
        iconUrl:'/icons/wind.svg',
        desc:'Wind',
        temp:'0.8 km/hr'
    },
    {
        iconUrl:'/icons/drop.svg',
        desc:'Chance of rain',
        temp:'2%'
    },
    {
        iconUrl:'/icons/sun.svg',
        desc:'UV Index',
        temp:'4'
    },
]
const WeatherWidget = () => {
    return (
        <div className={s.weatherWidget}>
            <div className={s.weekdays}>
                <span></span>
                <Image/>
            </div>
            <div className={s.timeGmt}>
                <Image/>
                <span></span>
            </div>
            <div className={s.airConditions}>
                {airConditions.map(item=><div key={item.iconUrl} className={s.block}>
                    <Image/>
                    <div className={s.infoBlock}>
                        <span>{item.desc}</span>
                        <span>{item.temp}</span>
                    </div>

                </div>)}
            </div>
        </div>
    );
};

export default WeatherWidget;
