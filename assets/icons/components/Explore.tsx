import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.770874 19C0.770874 8.9323 8.93235 0.770828 19 0.770828C29.0677 0.770828 37.2292 8.9323 37.2292 19C37.2292 29.0677 29.0677 37.2292 19 37.2292C8.93235 37.2292 0.770874 29.0677 0.770874 19ZM16.6038 13.3932C14.6589 14.9933 13.3595 17.2439 12.9463 19.7283L11.5781 27.9535C11.2623 29.8524 13.4703 31.1271 14.9568 29.9041L21.396 24.6067C23.3409 23.0066 24.6403 20.7561 25.0535 18.2717L26.4217 10.0465C26.7375 8.14755 24.5296 6.87278 23.043 8.09578L16.6038 13.3932Z"
                  fill="currentColor"/>
            <path
                d="M15.875 19C15.875 17.2741 17.2742 15.875 19 15.875C20.7259 15.875 22.125 17.2741 22.125 19C22.125 20.7259 20.7259 22.125 19 22.125C17.2742 22.125 15.875 20.7259 15.875 19Z"
                fill="currentColor"/>
        </svg>


    );
};
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
