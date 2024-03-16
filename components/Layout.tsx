import {ReactNode} from "react";
import HeadingSection from "@/components/headingSection/HeadingSection";

type LayoutProps = {
    children?: ReactNode
}
const Layout = ({children}: LayoutProps) => {
    return (
        <div>
            <HeadingSection/>
            { children }
        </div>
    );
};

export default Layout;
