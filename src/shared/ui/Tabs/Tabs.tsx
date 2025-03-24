import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Tabs.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';

export interface TabItem {
    value: string;
    content: ReactNode
}

export interface TabsProps {
    className?: string,
    tabs: TabItem[];
    value: string,
    onTabClick: (tab: TabItem) => void;
};

export const Tabs = memo((props: TabsProps) => {
    const{className, tabs, value, onTabClick} = props;
    const{t} = useTranslation();

    const onClickHandler = useCallback((tab: TabItem) => {
        return () => {
            onTabClick(tab)
        }
    }, [onTabClick])

    return (
        <div className={classNames(style.Tabs, [className])}>
            {tabs.map(tab => (
                <Card 
                    onClick={onClickHandler(tab)}
                    key={tab.value} 
                    className={style.tab} 
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}>
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});