import { classNames, Mods } from 'shared/lib/classNames/classNames'
import * as style from './Button.module.scss';
import { ButtonHTMLAttributes, FC, memo } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear_inverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outline_inverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme,
    square?: boolean,
    size?: ButtonSize,
    diabled?: boolean,
};

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        className,
        square,
        children, 
        theme = ButtonTheme.OUTLINE, 
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [style[theme]]: true,
        [style.square]: square,
        [style.disabled]: disabled,
    }

    return (
        <button 
            className={classNames(style.Button, [className, style[size]], mods)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});