import s from './HeadingSection.module.scss';
import Image from "next/image";
import {useState, useEffect} from "react";
import CustomSelect from "@/components/select/CustomSelect";
import {useCurrentWeatherByLocation} from "@/hooks/useCurrentWeather";
import {IHeadingSection} from "@/types/IWeather";
import {Location,Cloud,Arrow} from "@/assets/icons";
import {ICoordination,IData} from "@/interfaces/data-response-interface";
import {mockLocations} from "@/mock/mockForLocations";
import {ArrowDown} from "@/assets/icons";

type PropsType={
    data:IData
}
let initialData: IHeadingSection = {
    cityName: 'New York',
    temp: 10,
    weatherState: 'Cloudly',
    coordination: {lat: '40.714272', lon: '-74.005966'}
};

const HeadingSection = ({data}:PropsType) => {
    const [headingData, setHeadingData] = useState<IHeadingSection>(initialData);
    const [showSelect, setShowSelect] = useState<boolean>(false);
    const [selectCoord, setSelectCoord] = useState(initialData.coordination);
    // const {data, status, isLoading, isSuccess, refetch} = useCurrentWeatherByLocation(selectCoord);
    const currentDate = new Date().toDateString();

    useEffect(() => {
      
    }, [selectCoord]);

    useEffect(() => {
        if (status === 'success') {
            const newHeadingData: IHeadingSection = {
                cityName: data.city.name,
                coordination: data.city.coord,
                temp: data.list[0].main.temp,
                weatherState: data.list[0].weather[0].main,
            }
            setHeadingData(newHeadingData);
        }
    }, [data, status]);


    const coordSelection = (coord: ICoordination): void => {
        setSelectCoord(coord);
        localStorage.setItem(JSON.stringify(coord), 'selectCoord');
    };

    const toggleSelect = () => {
        setShowSelect(!showSelect);
    }
    return (
        <header className={s.header}>
            <div className={s.location}>
                <Location/>
                <span className={s.city}>{headingData.cityName}</span>
                <button className={s.btnToggle} onClick={toggleSelect}>
                    {showSelect?<ArrowDown/>:<Arrow/>}

                </button>
                {
                    showSelect && (<div className={s.select}>
                        <CustomSelect cities={mockLocations} showSelect={true}
                                      toggleSelect={toggleSelect}
                                      coordSelection={coordSelection}/>
                    </div>)
                }
            </div>
            <div className={s.navbarWidget}>
                <Image src='/images/avatar.png' width={30} height={30} alt='avatar'/>
            </div>
            <span className={s.weatherState}>{headingData.weatherState}</span>
            <div className={s.imgInfoBlock}>
                <Cloud/>
                <div className={s.infoBlock}>
                    <span className={s.temp}>{Math.round(headingData.temp)}°C</span>
                    <span className={s.dateInfo}>{currentDate}</span>
                </div>
            </div>
        </header>
    );
};

export default HeadingSection;
