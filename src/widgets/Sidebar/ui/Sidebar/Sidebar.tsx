import { classNames } from 'shared/lib/classNames/classNames'
import * as s from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';

export const Sidebar = () => {
    const [colapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();
    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div  
            data-testid='sidebar' 
            className={classNames(s.Sidebar, [], {[s.collapsed]: colapsed})}>
            <Button
                onClick={onToggle}
                className={s.toggler}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square={true}
                size={ButtonSize.L}
            >
                {colapsed ? '>' : '<'}
            </Button>
            <div data-testid='main-link'>
                <AppLink theme={AppLinkTheme.PRIMARY} to={RoutePaths['main ']}>
                    <div className={s.links}>
                        <div className={s.icon}>
                            <MainIcon/>
                        </div>
                        {t( colapsed ? '' : 'mainPage')}
                    </div>
                </AppLink>
            </div>
            <div data-testid='about-link'>
                <AppLink theme={AppLinkTheme.PRIMARY} to={RoutePaths.about}>
                    <div className={s.links}>
                        <div className={s.icon}>
                            <AboutIcon/>
                        </div>
                        {t( colapsed ? '' : 'aboutPage')}
                    </div>
                </AppLink>
            </div>
            <div className={s.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher 
                    short={colapsed}
                    className={s.langSwitcher} />
            </div>
        </div>
    );
};