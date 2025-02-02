import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton
};

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {className, children, theme, ...otherProps} = props;
    return (
        <button 
            className={classNames(style.Button, [className], {[style[theme]]: true})}
            {...otherProps}
        >
            {children}
        </button>
    );
};