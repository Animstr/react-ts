import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Select.module.scss';
import { ChangeEvent, useMemo } from 'react';

export interface SelectOption {
    value: string,
    content: string,
}

export interface SelectProps {
    label?: string,
    options: SelectOption[],
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    readonly?: boolean
};

export const Select = (props: SelectProps) => {
    const {
        label,
        className,
        options,
        value,
        onChange,
        readonly,
        ...otherProps
    } = props;

    const optionsList = useMemo(() => {
        return options.map(({value, content}: SelectOption) => (
            <option
                className={style.option}
                value={value}
                key={value}
            >
                {content}
            </option>
        ))
    }, [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    if (readonly) {
        return (
            <div className={classNames(style.Select, [className])}>
                { label && 
                <span className={style.label}>{`${label}>`}
                </span>
                }
                <span>{value}</span>
            </div>
        )
    }
    return (
        <div className={classNames(style.Select, [className])}>
            { label && 
                <span className={style.label}>{`${label}>`}
                </span>
            }
            <select 
                className={style.select}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}>
                {optionsList}
            </select>
        </div>
    );
};