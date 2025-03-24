import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Select.module.scss';
import { ChangeEvent, useMemo } from 'react';

export interface SelectOption<T extends string>{
    value: T,
    content: string,
}

export interface SelectProps<T extends string>{
    label?: string,
    options: SelectOption<T>[],
    className?: string,
    value?: T,
    onChange?: (value: T) => void,
    readonly?: boolean
};

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        label,
        className,
        options,
        value,
        onChange,
        readonly,
        ...otherProps
    } = props;

    const optionsList = () => {
        return options.map(({value, content}: SelectOption<T>) => (
            <option
                className={style.option}
                value={value}
                key={value}
            >
                {content}
            </option>
        ))
    }

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
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
                {optionsList()}
            </select>
        </div>
    );
};