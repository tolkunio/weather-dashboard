import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path
                d="M9.17716 1.33333L8.50008 0.75L7.823 1.33333C7.45842 1.60417 0.166748 7.95833 0.166748 13.5833C0.166748 15.7935 1.04472 17.9131 2.60752 19.4759C4.17033 21.0387 6.28994 21.9167 8.50008 21.9167C10.7102 21.9167 12.8298 21.0387 14.3926 19.4759C15.9554 17.9131 16.8334 15.7935 16.8334 13.5833C16.8334 7.95833 9.54175 1.60417 9.17716 1.33333ZM10.823 18.2396L9.89591 16.375C10.4148 16.116 10.8514 15.7176 11.1567 15.2246C11.4621 14.7316 11.6243 14.1633 11.6251 13.5833H13.7084C13.7074 14.5509 13.4369 15.499 12.9273 16.3214C12.4176 17.1439 11.689 17.8081 10.823 18.2396Z"
                fill="currentColor"/>
        </svg>


    );
};
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
