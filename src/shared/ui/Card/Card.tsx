import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Card.module.scss';
import { HTMLAttributes, memo, ReactNode } from 'react';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

export interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string,
    children: ReactNode,
    theme?: CardTheme
};

export const Card = memo((props: CardProps) => {
    const{className, children, theme = CardTheme.NORMAL, ...otherProps} = props;

    return (
        <div {...otherProps} className={classNames(style.Card, [className, style[theme]])}>
            {children}
        </div>
    );
});