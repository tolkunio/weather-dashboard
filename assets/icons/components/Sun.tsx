import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M12.4999 1.30209C12.9314 1.30209 13.2812 1.65187 13.2812 2.08334V3.12501C13.2812 3.55648 12.9314 3.90626 12.4999 3.90626C12.0684 3.90626 11.7187 3.55648 11.7187 3.12501V2.08334C11.7187 1.65187 12.0684 1.30209 12.4999 1.30209Z"
                fill="currentColor"/>
            <path
                d="M12.4999 6.51043C9.19196 6.51043 6.51034 9.19206 6.51034 12.5C6.51034 15.808 9.19196 18.4896 12.4999 18.4896C15.8079 18.4896 18.4895 15.808 18.4895 12.5C18.4895 9.19206 15.8079 6.51043 12.4999 6.51043Z"
                fill="currentColor"/>
            <path
                d="M5.68667 4.58191C5.38157 4.27681 4.88691 4.27681 4.58181 4.58191C4.27671 4.88701 4.27671 5.38167 4.58181 5.68677L5.31838 6.42334C5.62348 6.72843 6.11814 6.72843 6.42323 6.42334C6.72833 6.11824 6.72833 5.62358 6.42323 5.31848L5.68667 4.58191Z"
                fill="currentColor"/>
            <path
                d="M23.6978 12.5C23.6978 12.9315 23.3481 13.2813 22.9166 13.2813H21.8749C21.4434 13.2813 21.0937 12.9315 21.0937 12.5C21.0937 12.0685 21.4434 11.7188 21.8749 11.7188H22.9166C23.3481 11.7188 23.6978 12.0685 23.6978 12.5Z"
                fill="currentColor"/>
            <path
                d="M20.418 5.68676C20.7231 5.38166 20.7231 4.887 20.418 4.5819C20.1129 4.27681 19.6183 4.27681 19.3132 4.5819L18.5766 5.31847C18.2715 5.62357 18.2715 6.11823 18.5766 6.42333C18.8817 6.72842 19.3764 6.72842 19.6814 6.42333L20.418 5.68676Z"
                fill="currentColor"/>
            <path
                d="M12.4999 21.0938C12.9314 21.0938 13.2812 21.4435 13.2812 21.875V22.9167C13.2812 23.3482 12.9314 23.6979 12.4999 23.6979C12.0684 23.6979 11.7187 23.3482 11.7187 22.9167V21.875C11.7187 21.4435 12.0684 21.0938 12.4999 21.0938Z"
                fill="currentColor"/>
            <path
                d="M19.6815 18.5767C19.3764 18.2716 18.8818 18.2716 18.5767 18.5767C18.2716 18.8818 18.2716 19.3765 18.5767 19.6816L19.3132 20.4181C19.6183 20.7232 20.113 20.7232 20.4181 20.4181C20.7232 20.113 20.7232 19.6184 20.4181 19.3133L19.6815 18.5767Z"
                fill="currentColor"/>
            <path
                d="M3.90617 12.5C3.90617 12.9315 3.55639 13.2813 3.12492 13.2813H2.08325C1.65178 13.2813 1.302 12.9315 1.302 12.5C1.302 12.0685 1.65178 11.7188 2.08325 11.7188H3.12492C3.55639 11.7188 3.90617 12.0685 3.90617 12.5Z"
                fill="currentColor"/>
            <path
                d="M6.42317 19.6815C6.72826 19.3764 6.72826 18.8818 6.42317 18.5767C6.11807 18.2716 5.62341 18.2716 5.31831 18.5767L4.58174 19.3133C4.27664 19.6184 4.27664 20.113 4.58174 20.4181C4.88684 20.7232 5.3815 20.7232 5.6866 20.4181L6.42317 19.6815Z"
                fill="currentColor"/>
        </svg>

    );
};
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
