import s from './HeadingSection.module.scss';
import Image from "next/image";
import {useState,useEffect} from "react";
import {mockLocations} from "@/app/mock/mockForLocations";
import {ICoordination} from "@/app/mock/mockForLocations";
import DropDown from "@/app/components/shared/dropDown/DropDown";
import {useCurrentWeatherByLocation} from "@/app/hooks/useCurrentWeather";
import {IHeadingSection} from "@/app/types/IWeather";
import {setItem} from "@/app/services/localStorageService";

let initialData: IHeadingSection = {
    cityName: 'New York',
    temp: 10,
    weatherState: 'Cloudly',
    coordination: {lat: '40.714272', lon: '-74.005966'}
};

const HeadingSection = () => {
    const [headingData, setHeadingData] = useState<IHeadingSection>(initialData);
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectCoord, setSelectCoord] = useState<ICoordination>(initialData.coordination);
    const {data, status, isLoading, isSuccess,refetch} = useCurrentWeatherByLocation(selectCoord);
    const currentDate = new Date().toDateString();

    useEffect(() => {
        refetch();
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
    }, [data,status]);


    const coordSelection = (coord: ICoordination): void => {
        setSelectCoord(coord);
        setItem<ICoordination>(coord,'selectCoord');
    };

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    }
    return (
        <header className={s.header}>
            <div className={s.location}>
                <Image src='/icons/location.svg' width={18} height={25} alt='location'/>
                <span className={s.city}>{headingData.cityName}</span>
                <button className={s.dropDownToggle} onClick={toggleDropDown}>
                    <Image src='/icons/arrow.svg' width={20} height={15} alt='arrow'/>
                </button>
                {
                    showDropDown && (<div className={s.dropDown}>
                        <DropDown cities={mockLocations} showDropDown={true}
                                  toggleDropDown={toggleDropDown}
                                  coordSelection={coordSelection}/>
                    </div>)
                }
            </div>
            <div className={s.navbarWidget}>
                <Image src='/icons/avatar.svg' width={30} height={30} alt='avatar'/>
            </div>
            <span className={s.weatherState}>{headingData.weatherState}</span>
            <div className={s.imgInfoBlock}>
                <Image className={s.imgBlock} src='/icons/cloud.svg' width={0} height={0} alt='cloud'/>
                <div className={s.infoBlock}>
                    <span className={s.temp}>{Math.round(headingData.temp)}°C</span>
                    <span className={s.dateInfo}>{currentDate}</span>
                </div>
            </div>
        </header>
    );
};

export default HeadingSection;
