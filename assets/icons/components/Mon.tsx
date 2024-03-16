import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path
                d="M5.97639 4.44979L5.54431 4.01595C5.11224 3.5821 4.41428 3.59322 3.99328 4.01595L3.9822 4.02707C3.55013 4.46092 3.55013 5.16175 3.9822 5.58448L4.41428 6.01832C4.84635 6.45217 5.53323 6.45217 5.96531 6.01832L5.97639 6.0072C6.40846 5.58448 6.40846 4.87252 5.97639 4.44979V4.44979ZM2.60843 11.5249H1.47839C0.869059 11.5249 0.381592 12.0143 0.381592 12.6262V12.6373C0.381592 13.2491 0.869059 13.7386 1.47839 13.7386H2.59735C3.21776 13.7497 3.70523 13.2603 3.70523 12.6484V12.6373C3.70523 12.0143 3.21776 11.5249 2.60843 11.5249ZM12.5794 0.45616H12.5683C11.9479 0.45616 11.4604 0.94563 11.4604 1.55747V2.6254C11.4604 3.23724 11.9479 3.72671 12.5572 3.72671H12.5683C13.1887 3.73784 13.6762 3.24837 13.6762 2.63653V1.55747C13.6762 0.94563 13.1887 0.45616 12.5794 0.45616V0.45616ZM21.1543 4.02707C20.7223 3.59322 20.0243 3.59322 19.5922 4.01595L19.1602 4.44979C18.7281 4.88364 18.7281 5.58448 19.1602 6.0072L19.1712 6.01832C19.6033 6.45217 20.3013 6.45217 20.7223 6.01832L21.1543 5.58448C21.5864 5.15063 21.5864 4.46092 21.1543 4.02707V4.02707ZM19.1491 20.8248L19.5812 21.2587C20.0132 21.6925 20.7112 21.6925 21.1433 21.2587C21.5753 20.8248 21.5753 20.124 21.1433 19.6901L20.7112 19.2563C20.2791 18.8224 19.5812 18.8336 19.1602 19.2563C18.717 19.7013 18.717 20.391 19.1491 20.8248ZM21.4313 12.6262V12.6373C21.4313 13.2491 21.9188 13.7386 22.5281 13.7386H23.6471C24.2564 13.7386 24.7439 13.2491 24.7439 12.6373V12.6262C24.7439 12.0143 24.2564 11.5249 23.6471 11.5249H22.5281C21.9188 11.5249 21.4313 12.0143 21.4313 12.6262ZM12.5683 5.9627C8.90119 5.9627 5.92099 8.95515 5.92099 12.6373C5.92099 16.3195 8.90119 19.3119 12.5683 19.3119C16.2354 19.3119 19.2156 16.3195 19.2156 12.6373C19.2156 8.95515 16.2354 5.9627 12.5683 5.9627ZM12.5572 24.8184H12.5683C13.1776 24.8184 13.6651 24.329 13.6651 23.7171V22.6492C13.6651 22.0374 13.1776 21.5479 12.5683 21.5479H12.5572C11.9479 21.5479 11.4604 22.0374 11.4604 22.6492V23.7171C11.4604 24.329 11.9479 24.8184 12.5572 24.8184ZM3.9822 21.2475C4.41428 21.6814 5.11224 21.6814 5.54431 21.2475L5.97639 20.8137C6.40846 20.3798 6.39738 19.679 5.97639 19.2563L5.96531 19.2452C5.53323 18.8113 4.83527 18.8113 4.4032 19.2452L3.97112 19.679C3.55013 20.124 3.55013 20.8137 3.9822 21.2475Z"
                fill="currentColor" fill-opacity="0.8"/>
        </svg>


    );
};
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)