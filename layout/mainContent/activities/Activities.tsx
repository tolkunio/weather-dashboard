import s from './Activities.module.scss';
import Image from "next/image";
import Activity from "@/layout/mainContent/activities/activity/Activity";

const activites = [
    {
        imgSrc: '/images/firstPlace.png',
        distance: '2km away'
    },
    {
        imgSrc: '/images/secondPlace.png',
        distance: '1.5km away'
    },
    {
        imgSrc: '/images/thirdPlace.png',
        distance: '3km away'
    },
    {
        imgSrc: '/images/fourthPlace.png',
        distance: '500m away'
    },

]

const Activities = () => {
    return (
        <div className={s.activities}>
            <div className={s.titleBlock}>
                <Image src={'/icons/heart.svg'} width={21} height={18} alt={'heart'}/>
                <span>Activities in your area</span>
            </div>
            <div className={s.content}>
                {
                    activites.map(item =>
                    <Activity key={item.imgSrc} imgSrc={item.imgSrc} distance={item.distance}/>)
                }
            </div>
        </div>
    );
};

export default Activities;
