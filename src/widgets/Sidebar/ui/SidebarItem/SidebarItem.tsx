import { memo } from 'react';
import * as style from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from "widgets/Sidebar/model/types/item";
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entity/User';

export interface SidebarItemProps {
    colapsed: boolean,
    item: SidebarItemType
};

export const SidebarItem = memo((props: SidebarItemProps) => {
    const{t} = useTranslation();
    const {
        colapsed,
        item
    } = props;

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) return null;

    return (
        <AppLink theme={AppLinkTheme.PRIMARY} to={item.path}>
            <div className={style.links}>
                <div className={style.icon}>
                    <item.icon/>
                </div>
                {t( colapsed ? '' : item.text)}
            </div>
        </AppLink>
    );
});