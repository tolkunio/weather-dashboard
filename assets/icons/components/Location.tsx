import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path
                d="M9 0C4.03071 0 0 3.91875 0 8.75C0 15.3125 9 25 9 25C9 25 18 15.3125 18 8.75C18 3.91875 13.9693 0 9 0ZM9 11.875C7.22571 11.875 5.78571 10.475 5.78571 8.75C5.78571 7.025 7.22571 5.625 9 5.625C10.7743 5.625 12.2143 7.025 12.2143 8.75C12.2143 10.475 10.7743 11.875 9 11.875Z"
                fill="currentColor"/>
        </svg>


    );
};
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
