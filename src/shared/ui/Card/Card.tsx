import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Card.module.scss';
import { HTMLAttributes, memo, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string,
    children: ReactNode,
};

export const Card = memo((props: CardProps) => {
    const{className, children, ...otherProps} = props;

    return (
        <div {...otherProps} className={classNames(style.Card, [className])}>
            {children}
        </div>
    );
});