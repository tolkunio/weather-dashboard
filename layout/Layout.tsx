import HeadingSection from "@/layout/headingSection/HeadingSection";
import {LayoutProps} from "@/layout/Layout.props";
import s from './Layout.module.scss'

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className={s.layout}>
            {children}
        </div>
    );
};

