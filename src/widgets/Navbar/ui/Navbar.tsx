import { classNames } from "shared/lib/classNames/classNames"
import * as style from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <h2 className={style.links}><AppLink theme={AppLinkTheme.PRIMARY} to='/'>{t('mainPage')}</AppLink></h2>
            <h2 className={style.links}><AppLink theme={AppLinkTheme.PRIMARY} to='/about'>{t('aboutPage')}</AppLink></h2>
        </div>
    )
}