import s from './NavbarWidget.module.scss'
import Image from "next/image";
import Weather from "@/assets/icons/components/Weather";
import {MenuItem} from "@/interfaces/menu-interface";
import Explore from "@/assets/icons/components/Explore";
import City from "@/assets/icons/components/City";
import Settings from "@/assets/icons/components/Settings";

const menuItems: MenuItem[] = [
    {
        icon: <Weather/>,
        title: 'weather',
        route: 'weather'
    },
    {
        icon: <Explore/>,
        title: 'explore',
        route: 'explore'
    },
    {
        icon: <City/>,
        title: 'cities',
        route: 'city'
    }, {
        icon: <Settings/>,
        title: 'settings',
        route: 'settings'
    },

]
const NavbarWidget = () => {
    return (
        <nav className={s.navbarWidget}>
            <Image src='/images/avatar.png' width={60} height={60} alt='avatar'/>
            <div className={s.elementsBlock}>
                {
                    menuItems.map(item =>
                        (
                            <div key={item.route} className={s.element}>
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                        ))
                }
            </div>
        </nav>
    );
};

export default NavbarWidget;
