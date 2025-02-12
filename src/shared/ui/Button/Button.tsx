import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

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
    size?: ButtonSize
};

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className,
        square,
        children, 
        theme, 
        size,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [style[theme]]: true,
        [style.square]: square
    }

    return (
        <button 
            className={classNames(style.Button, [className, style[size]], mods)}
            {...otherProps}
        >
            {children}
        </button>
    );
};