import s from "@/styles/Home.module.scss";
import NavbarWidget from "@/layout/navbarWidget/NavbarWidget";
import Main from "@/layout/Main/Main";
import WeatherWidget from "@/layout/weatherWidget/WeatherWidget";
import HeadMeta from "@/components/headMeta/HeadMeta"
import {useState} from "react";
import {IData} from "@/interfaces/data-response-interface";
import {Location, Cloud} from "@/assets/icons";
import {Select} from "@/components/select/Select";
import {mockLocations} from "@/mock/mockForLocations";
import {ICoordination} from "@/interfaces/data-response-interface";
import {axiosClassic} from "@/api/interceptors";
import {getCurrentWeather} from "@/configs/api.config";
import {APP_KEY} from "@/configs/api.config";
import Image from "next/image";
import {Inter} from "next/font/google";
const inter = Inter({subsets: ["latin"]});

const capitalizeFirstLetter=(sentence)=>{
    return sentence.split(' ').map((el)=>el.charAt(0).toUpperCase()+el.slice(1)).join(' ');
};
function Home() {

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
        <>
            <HeadMeta title={'Weather Dashboard'}/>
            <main className={`${s.main} ${inter.className}`}>
                <header className={s.header}>
                    <div className={s.location}>
                        <Location/>
                            <Select options={mockLocations} value={selectCity} onValueChange={onSelectValueChange}/>

                    </div>
                    <div className={s.navbarWidget}>
                        <Image src='/images/avatar.png' width={30} height={30} alt='avatar'/>
                    </div>
                    <span className={s.weatherState}>
                        {data ? capitalizeFirstLetter(data.list[0].weather[0].description ): 'Cloudy'}
                    </span>
                    <div className={s.imgInfoBlock}>
                        <Cloud/>
                        <div className={s.infoBlock}>
                         <span className={s.temp}>{data ? Math.round(data.list[0].main.temp as number) : 26}°C</span>
                         <span className={s.dateInfo}>{currentDate}</span>
                        </div>
                    </div>
                </header>
                <div className={s.content}>
                    <NavbarWidget/>
                    <Main data={data}/>
                    <WeatherWidget list={data?.list}/>
                </div>
            </main>
        </>
    );
}
export default Home;
