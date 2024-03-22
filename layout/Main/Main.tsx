import s from './Main.module.scss';
import Activities from "@/layout/main/activities/Activities";
import Forecast from "@/layout/main/forecast/Forecast";
import {IData} from "@/interfaces/data-response-interface";
type PropsType={
    data:IData|undefined
}
const Main = ({data}:PropsType) => {
    return (
        <main className={s.main}>
            <Activities/>
            <Forecast list={data?.list}/>
        </main>
    );
};

export default Main;
