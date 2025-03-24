import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entity/Article/model/types/article';

export interface ArticleTypeTabsProps {
    className?: string,
    value: string,
    callback: (tab: ArticleType) => void,
};

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const{className, value, callback} = props;
    const{t} = useTranslation('articles');

    const tabItems = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('All')
        },
        {
            value: ArticleType.ECONOMIC,
            content: t('Economic')
        },
        {
            value: ArticleType.IT,
            content: t('IT')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Science')
        },
    ], [t]); 

    const onTabClick = useCallback((tab: TabItem) => {
        callback(tab.value as ArticleType)
    }, [callback])

    return (
        <Tabs 
            className={classNames('', [className])}
            tabs={tabItems} 
            value={value} 
            onTabClick={onTabClick} />
    );
});