import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path
                d="M14.0269 14.4628H17.1184C19.4016 14.4628 21.2526 12.6118 21.2526 10.3286C21.2526 8.38947 19.9176 6.76217 18.1165 6.31567C18.1399 6.1062 18.1519 5.8933 18.1519 5.67759C18.1519 2.53811 15.6069 -0.00694323 12.4674 -0.00694323C9.86341 -0.00694323 7.66838 1.74393 6.99531 4.13263C6.92494 4.12907 6.85411 4.12726 6.78285 4.12726C4.49959 4.12726 2.64865 5.97821 2.64865 8.26147C2.64865 8.32014 2.64987 8.37853 2.65229 8.43662C1.4461 8.86124 0.581543 10.0107 0.581543 11.3621C0.581543 13.0746 1.96975 14.4628 3.6822 14.4628H6.62601L11.0532 6.71513C11.5791 5.79491 12.9842 6.16805 12.9842 7.22792V11.3621H14.0177C14.8113 11.3621 15.3088 12.2194 14.9151 12.9085L14.0269 14.4628Z"
                fill="currentColor" fill-opacity="0.6"/>
            <path d="M7.8164 14.4628L11.9506 7.22792V12.3957H14.0177L9.8835 19.6305V14.4628H7.8164Z" fill="currentColor"
                  fill-opacity="0.6"/>
        </svg>


    );
};
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
