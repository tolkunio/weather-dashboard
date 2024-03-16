import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg width="30" height="42" viewBox="0 0 30 42" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path
                d="M15 0C6.71786 0 0 6.5835 0 14.7C0 25.725 15 42 15 42C15 42 30 25.725 30 14.7C30 6.5835 23.2821 0 15 0ZM15 19.95C12.0429 19.95 9.64286 17.598 9.64286 14.7C9.64286 11.802 12.0429 9.45 15 9.45C17.9571 9.45 20.3571 11.802 20.3571 14.7C20.3571 17.598 17.9571 19.95 15 19.95Z"
                fill="currentColor"/>
        </svg>

    );
};
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
