import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"

import * as style from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(style.all, {}, [className])}>
            <h2><AppLink theme={AppLinkTheme.PRIMARY} to='/'>Main Page</AppLink></h2>
            <h2><AppLink theme={AppLinkTheme.PRIMARY} to='/about'>About Page </AppLink></h2>
        </div>
    )
}