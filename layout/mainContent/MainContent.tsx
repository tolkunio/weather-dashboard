import s from './MainContent.module.scss';
import Activities from "@/layout/mainContent/activities/Activities";
import Forecast from "@/layout/mainContent/forecast/Forecast";
const MainContent = () => {
    return (
        <main className={s.mainContent}>
            <Activities/>
            <Forecast/>
        </main>
    );
};

export default MainContent;
