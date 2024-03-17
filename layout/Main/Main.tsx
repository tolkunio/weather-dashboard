import s from './Main.module.scss';
import Activities from "@/layout/Main/activities/Activities";
import Forecast from "@/layout/Main/forecast/Forecast";
const Main = () => {
    return (
        <main className={s.main}>
            <Activities/>
            <Forecast/>
        </main>
    );
};

export default Main;
