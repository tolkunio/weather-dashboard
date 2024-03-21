import s from './HeadingSection.module.scss';
import Image from "next/image";
import {useState} from "react";
import {Location, Cloud} from "@/assets/icons";
import {IData,ICoordination} from "@/interfaces/data-response-interface";
import {mockLocations} from "@/mock/mockForLocations";
import {Select} from "@/components/select/Select";
import {axiosClassic} from "@/api/interceptors";
import {getCurrentWeather} from "@/configs/api.config";
import {APP_KEY} from "@/configs/api.config";

const HeadingSection = () => {
    const [data, setData] = useState<IData>()
    const [selectCity, setSelectCity] = useState(mockLocations[10].city);
    const currentDate = new Date().toDateString();

    const onSelectValueChange = (cityName: string) => {
        setSelectCity(cityName);

        const selectCoord = mockLocations.find((item) => item.city === cityName);
        if (selectCoord) {
            getWeatherStateByCoordination(selectCoord.coord);
            localStorage.setItem(JSON.stringify(selectCoord.coord), 'selectCoord');
        }
    }
    const getWeatherStateByCoordination = async (coord: ICoordination) => {
        const data = await axiosClassic.get<IData>(getCurrentWeather(''), {
            params: {
                lat: coord.lat,
                lon: coord.lon,
                appId: APP_KEY,
                units: 'metric'
            }
        }).then(res => res.data);
        setData(data);
    }

    return (
        <header className={s.header}>
            <div className={s.location}>
                <Location/>
                <Select options={mockLocations} value={selectCity} onValueChange={onSelectValueChange}/>
            </div>
            <div className={s.navbarWidget}>
                <Image src='/images/avatar.png' width={30} height={30} alt='avatar'/>
            </div>
            <span className={s.weatherState}>
                {data?data.list[0].weather[0].description:'Cloudy'}
            </span>
            <div className={s.imgInfoBlock}>
                <Cloud/>
                <div className={s.infoBlock}>
                    <span className={s.temp}>
                        {
                            data?Math.round(data.list[0].main.temp as number):26
                        }°C</span>
                    <span className={s.dateInfo}>{currentDate}</span>
                </div>
            </div>
        </header>
    );
};

export default HeadingSection;
