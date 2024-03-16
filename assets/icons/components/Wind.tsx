import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path
                d="M10.7188 9.15625C12.8761 9.15625 14.625 7.40736 14.625 5.25C14.625 3.09264 12.8761 1.34375 10.7188 1.34375C8.56139 1.34375 6.8125 3.09264 6.8125 5.25"
                stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M2.90625 9.15625H10.7188" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M3.6875 15.4062H14.625" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path
                d="M12.2812 17.75C12.2812 19.0444 13.3306 20.0938 14.625 20.0938C15.9194 20.0938 16.9688 19.0444 16.9688 17.75C16.9688 16.4556 15.9194 15.4062 14.625 15.4062"
                stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path
                d="M17.75 12.2812C19.9074 12.2812 21.6562 10.5324 21.6562 8.375C21.6562 6.21764 19.9074 4.46875 17.75 4.46875C17.5185 4.46875 17.2917 4.48889 17.0713 4.5275"
                stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M1 12H17.4062" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>

    );
};
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
