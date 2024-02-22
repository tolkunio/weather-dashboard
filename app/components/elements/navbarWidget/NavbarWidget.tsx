import s from './NavbarWidget.module.scss';
import Image from "next/image";

const menuItems = [
    {
        iconSrc: '/icons/weather.svg',
        title: 'weather'
    },
    {
        iconSrc: '/icons/explore.svg',
        title: 'explore'
    },
    {
        iconSrc: '/icons/cities.svg',
        title: 'cities'
    }, {
        iconSrc: '/icons/settings.svg',
        title: 'settings'
    },

]
const NavbarWidget = () => {
    return (
        <nav className={s.navbarWidget}>
            <Image className={s.img} src='/icons/avatar.svg' width={60} height={60} alt='avatar'/>
            <div className={s.elementsBlock}>
                {
                    menuItems.map(item =>
                        (
                            <div key={item.iconSrc} className={s.element}>
                                <Image src={item.iconSrc} width={50} height={50} alt={item.title}/>
                                <span>{item.title}</span>
                            </div>
                        ))
                }
            </div>

        </nav>
    );
};

export default NavbarWidget;
