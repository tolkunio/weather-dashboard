import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg width="884" height="66" viewBox="0 0 884 66" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path
                d="M-1.02344 1.02618C-1.02344 1.02618 95.0223 6.13268 155.372 17.569C201.82 26.3708 225.986 43.9593 272.669 47.5528C319.352 51.1464 345.203 36.5036 392.024 36.1797C450.314 35.7764 482.232 49.837 540.5 51.5C608.146 53.4306 645.888 38.609 713.5 41.5C779.107 44.3052 821.18 49.5377 885 65"
                stroke="#FFC355" stroke-width="2.04712"/>
        </svg>


    );
};
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
