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
const weekdays=[
    {
        week:'FR',
        weekIcon:'/icons/weekDays/FR.svg'
    },
    {
        week:'SAT',
        weekIcon:'/icons/weekDays/SAT.svg'
    },
    {
        week:'SUN',
        weekIcon:'/icons/weekDays/SUN.svg'
    },
    {
        week:'MON',
        weekIcon:'/icons/weekDays/MON.svg'
    },
    {
        week:'TUES',
        weekIcon:'/icons/weekDays/TUES.svg'
    },

]
const WeatherWidget = () => {
    return (
        <div className={s.weatherWidget}>
            <div className={s.weekdays}>
                {
                    weekdays.map(day=><div key={day.week} className={s.daysBlock}>
                        <span>{day.week}</span>
                        <Image src={day.weekIcon} width={24} height={24} alt={day.week}/>
                    </div>)
                }
            </div>
            <div className={s.timeGmt}>
                <Image src={'/icons/clock.svg'} width={20} height={20} alt={'clock'}/>
                <span>8:00PM GMT</span>
            </div>
            <div className={s.airConditions}>
                <span className={s.title}>AIR CONDITIONS</span>
                <div className={s.airInfoBlock}>
                    {
                        airConditions.map(item=>
                            <div key={item.iconUrl} className={s.blockValues}>
                                <Image src={item.iconUrl} width={25} height={25} alt={item.desc}/>
                                <div className={s.info}>
                                    <span className={s.desc}>{item.desc}</span>
                                    <span className={s.temp}>{item.temp}</span>
                                </div>
                            </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default WeatherWidget;
