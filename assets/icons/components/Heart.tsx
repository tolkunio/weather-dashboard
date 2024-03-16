import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path
                d="M6.5 0.5625C3.02393 0.5625 0.0625 3.16163 0.0625 6.53724C0.0625 8.86594 1.15293 10.8265 2.59811 12.4505C4.03833 14.069 5.89643 15.4275 7.57622 16.5645L10.4745 18.5264C10.7919 18.7412 11.2081 18.7412 11.5255 18.5264L14.4238 16.5646C16.1036 15.4275 17.9617 14.069 19.4019 12.4505C20.8471 10.8265 21.9375 8.86594 21.9375 6.53724C21.9375 3.16163 18.9761 0.5625 15.5 0.5625C13.7082 0.5625 12.1314 1.40267 11 2.48979C9.86855 1.40267 8.29184 0.5625 6.5 0.5625Z"
                fill="currentColor"/>
        </svg>


    );
};
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
