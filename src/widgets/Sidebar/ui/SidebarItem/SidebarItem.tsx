import { memo } from 'react';
import * as style from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';

export interface SidebarItemProps {
    colapsed: boolean,
    item: SidebarItemType
};

export const SidebarItem = memo((props: SidebarItemProps) => {
    const{t} = useTranslation();
    const {
        colapsed,
        item
    } = props

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