import s from './HeadingSection.module.scss';
import Image from "next/image";

const HeadingSection = () => {
    return (
        <header className={s.header}>
            <div className={s.flexWrapper}>
                <div className={s.contentBlock}>
                    <div className={s.location}>
                        <Image src='/icons/location.svg' width={18} height={15} alt='location'/>
                        <span className={s.city}>{'New York'}</span>
                        <Image src='/icons/arrow.svg' width={19} height={10} alt='arrow'/>
                    </div>
                    <span className={s.weatherState}>{'Cloudy'}</span>
                    <div className={s.infoBlock}>
                        <span className={s.temp}>26°C</span>
                        <span className={s.dateInfo}>Sunday | 12 Dec 2023</span>
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
