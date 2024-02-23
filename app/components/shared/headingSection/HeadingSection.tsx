import s from './HeadingSection.module.scss';
import Image from "next/image";
import {useCurrentWeather} from "@/app/hooks/useCurrentWeather";
const HeadingSection = () => {

    let cityName:string;
    let temp:number;
    let weatherState:string;
    const currentDate = new Date().toDateString();

    const {status,data}=useCurrentWeather();

    if(status==='success'){
       cityName=data.city.name;
       temp=data.list[0].main.temp;
       weatherState=data.list[0].weather[0].main;
    }
    return (
        <header className={s.header}>
            <div className={s.flexWrapper}>
                <div className={s.contentBlock}>
                    <div className={s.location}>
                        <Image src='/icons/location.svg' width={18} height={15} alt='location'/>
                        <span className={s.city}>{cityName}</span>
                        <Image src='/icons/arrow.svg' width={19} height={10} alt='arrow'/>
                    </div>
                    <span className={s.weatherState}>{weatherState}</span>
                    <div className={s.infoBlock}>
                        <span className={s.temp}>{Math.round(temp)}°C</span>
                        <span className={s.dateInfo}>{currentDate}</span>
                    </div>
                </div>
                <div className={s.imgBlock}>
                    <Image src='/icons/cloud.svg' width={300} height={300} alt='cloud'/>
                </div>
            </div>
        </header>
    );
};

export default HeadingSection;
