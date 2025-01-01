import { classNames } from 'shared/lib/classNames/classNames'
import * as s from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';

export interface SidebarProps {};

export const Sidebar = ({}: SidebarProps) => {
    const [colapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(s.Sidebar, {[s.collapsed]: colapsed}, [])}>
            <button 
                onClick={onToggle}
                className={s.toggler}>Toggle</button>
            <div className={s.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    );
};