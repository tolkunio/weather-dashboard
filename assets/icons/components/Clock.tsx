import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path
                d="M8.18836 0.0235596C3.66501 0.0235596 -0.00012207 3.68869 -0.00012207 8.21204C-0.00012207 12.7354 3.66501 16.4005 8.18836 16.4005C12.7117 16.4005 16.3768 12.7354 16.3768 8.21204C16.3768 3.68869 12.7117 0.0235596 8.18836 0.0235596ZM8.85761 8.88129H4.40906V8.21204H8.18836V3.17298H8.85761V8.88129Z"
                fill="currentColor"/>
        </svg>


    );
};
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
