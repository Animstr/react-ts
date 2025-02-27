import { classNames } from 'shared/lib/classNames/classNames'
import * as s from './Sidebar.module.scss';
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

export const Sidebar = memo(() => {
    const [colapsed, setCollapsed] = useState(false);
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
            {SidebarItemList.map((item) => (
                <SidebarItem 
                    key={item.path}
                    colapsed={colapsed}
                    item={item}
                />
            ))}
            <div className={s.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher 
                    short={colapsed}
                    className={s.langSwitcher} />
            </div>
        </div>
    );
});