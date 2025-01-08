import { classNames } from 'shared/lib/classNames/classNames';
import { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as style from './AppLink.module.scss';

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export interface AppLinkProps extends LinkProps{
    className?: string,
    theme: AppLinkTheme
};

export const AppLink = (props: AppLinkProps) => {
    const {to, children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;

    return (
        <Link 
            to={to}
            className={classNames(style.AppLink, [style[theme]])}
            {...otherProps}>
            {children}
        </Link>
    );
};