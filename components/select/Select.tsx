import * as RadixSelect from '@radix-ui/react-select'
import s from './Select.module.scss';
import {ReactNode,forwardRef,useState} from "react";
import {ArrowUp,ArrowDown} from "@/assets/icons";
import {ILocation} from "@/mock/mockForLocations";
import {SelectItem} from "@/components/select/SelectItem/SelectItem";

export type SelectProps = {
    options:ILocation []
    placeholder?: ReactNode
    label?: string
    className?: string
    value:string
    onValueChange: (value: string) => void
}
export const Select=forwardRef<HTMLDivElement, SelectProps>(
    (
        {
            options,
            placeholder = 'Select value...',
            label,
            value,
            onValueChange,
            className,
            ...restProps
        },
        ref?
    ) => {
        const currentItem = options.find(item => item.city == value);
        const [isOpen, setIsOpen] = useState(false)

        return(
            <div className={s.wrapper}>
                <RadixSelect.Root
                    value={value}
                    onValueChange={onValueChange}
                    onOpenChange={setIsOpen}>
                    <RadixSelect.Trigger className={s.trigger} aria-label="select">
                        <p className={s.text}>
                            {`${currentItem?.city}`}
                        </p>
                        <RadixSelect.Icon className={s.icon}>
                            {isOpen ? <ArrowUp className={'icon'} /> : <ArrowDown className={'icon'} />}
                        </RadixSelect.Icon>
                    </RadixSelect.Trigger>
                    <RadixSelect.Portal>
                        <RadixSelect.Content ref={ref}  className={s.content} collisionPadding={0} position={'popper'}>
                            <RadixSelect.Viewport>
                                {options.map(option => (
                                    <SelectItem className={s.item} key={option.id} value={option.city}>
                                        {option.city}
                                    </SelectItem>
                                ))}
                            </RadixSelect.Viewport>
                        </RadixSelect.Content>
                    </RadixSelect.Portal>
                </RadixSelect.Root>
            </div>

        )
})
Select.displayName='Select'