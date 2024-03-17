import HeadingSection from "@/layout/HeadingSection/HeadingSection";
import {LayoutProps} from "@/layout/Layout.props";
import s from './Layout.module.scss'
import {ReactElement} from "react";

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className={s.layout}>
            <HeadingSection/>
            {children}
        </div>
    );
};

