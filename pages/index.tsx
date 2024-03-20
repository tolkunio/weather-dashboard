import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.scss";
import NavbarWidget from "@/layout/navbarWidget/NavbarWidget";
import Main from "@/layout/Main/Main";
import WeatherWidget from "@/layout/weatherWidget/WeatherWidget";
import {Layout} from "@/layout/Layout";
import {axiosClassic} from "@/api/interceptors";
import {getCurrentWeather} from "@/configs/api.config";
import {APP_KEY} from "@/configs/api.config";
import HeadMeta from "@/components/headMeta/HeadMeta"
import {IData} from "@/interfaces/data-response-interface";
import HeadingSection from "@/layout/headingSection/HeadingSection";

const inter = Inter({subsets: ["latin"]});
type PropsType = {
    data: IData
};
export const getServerSideProps = async () => {
    const lat = '-75.499901'
    const lon = '-75.499901'
    const data = await axiosClassic.get<IData>(getCurrentWeather(''), {
        params: {
            lat: lat,
            lon: lon,
            appId: APP_KEY,
            units: 'metric'
        }
    }).then(res => res.data);
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            data
        }
    }
}

function Home(props:PropsType) {
    console.log(props.data);
    return (
        <>
            <HeadMeta title={'Weather Dashboard'}/>
            <main className={`${styles.main} ${inter.className}`}>
                    <HeadingSection/>
                    <div className={styles.content}>
                        <NavbarWidget/>
                        <Main/>
                        <WeatherWidget/>
                    </div>
            </main>
        </>
    );
}

export default Home;
