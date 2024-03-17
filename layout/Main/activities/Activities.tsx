import s from './Activities.module.scss';
import Activity from "@/layout/Main/activities/activity/Activity";
import {Heart} from "@/assets/icons";
import {ActivityInterface} from "@/interfaces/activity-interface";

const activites:ActivityInterface[] = [
    {
        imgUrl: '/images/firstPlace.png',
        distance: '2km away'
    },
    {
        imgUrl: '/images/secondPlace.png',
        distance: '1.5km away'
    },
    {
        imgUrl: '/images/thirdPlace.png',
        distance: '3km away'
    },
    {
        imgUrl: '/images/fourthPlace.png',
        distance: '500m away'
    },

]

const Activities = () => {
    return (
        <div className={s.activities}>
            <div className={s.titleBlock}>
               <Heart/>
                <span>Activities in your area</span>
            </div>
            <div className={s.content}>
                {
                    activites.map(item =>
                    <Activity key={item.imgUrl} imgSrc={item.imgUrl} distance={item.distance}/>)
                }
            </div>
        </div>
    );
};

export default Activities;
