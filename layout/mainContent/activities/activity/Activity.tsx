import s from './Activity.module.scss';
import Image from "next/image";
type ActivityPropsType={
    imgSrc:string,
    distance:string
}
const Activity = ({imgSrc,distance}:ActivityPropsType) => {
    return (
        <div className={s.activity}>
            <Image src={imgSrc} width={160} height={100} alt={'img'} draggable={false}/>
            <span>{distance}</span>
        </div>
    );
};

export default Activity;
