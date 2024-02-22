import s from './MainContent.module.scss';
import Activities from "@/app/components/elements/mainContent/activities/Activities";
import Forecast from "@/app/components/elements/mainContent/forecast/Forecast";
const MainContent = () => {
    return (
        <main className={s.mainContent}>
            <Activities/>
            <Forecast/>
        </main>
    );
};

export default MainContent;
