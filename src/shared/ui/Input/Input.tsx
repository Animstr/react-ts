import { classNames, Mods } from 'shared/lib/classNames/classNames'
import * as style from './Input.module.scss';
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    className?: string,
    value?: string | number,
    onChange?: (value: string) => void,
    placeholder?: string,
    autoFocus?: boolean,
    readonly?: boolean
};

export const Input = memo(( props: InputProps) => {
    const {
        className,
        onChange,
        placeholder,
        autoFocus,
        value,
        readonly,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false);
    const [caretPlace, setCaretPlace] = useState<number>(0);

    const isCaretShow = !readonly && isFocused;

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autoFocus])

    const handleCaretPlace = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPlace(e.target.value.length)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSelect = (e: any) => {
        setCaretPlace(e?.target?.selectionStart || 0)
    }

    const mods: Mods = {
        [style.readonly]: readonly,
    }

    return (
        <div className={classNames(style.InputWrapper, [className], mods)}>
            {placeholder && 
            <div className={style.placeholder}>
                {`${placeholder}>`}
            </div>
            }
            <div className={style.caretWrapper}>
                <input 
                    value={value}
                    ref={ref} 
                    type="text" 
                    onChange={handleCaretPlace}
                    className={style.Input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}/>
                {isCaretShow && 
                    <span 
                        className={style.caret}
                        style={{left : `${caretPlace * 9 + 9}px`}}/>
                }
            </div>
        </div>
    );
});